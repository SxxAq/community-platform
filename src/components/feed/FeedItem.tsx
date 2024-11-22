import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import CommentSection from "./CommentSection";
import ReactionButtons from "./ReactionButtons";
import { formatDistanceToNow } from "date-fns";

interface FeedItemProps {
  id: string;
  author: string;
  content: string;
  createdAt: string;
  likes: number;
  comments: number;
}

const FeedItem: React.FC<FeedItemProps> = ({
  id,
  author,
  content,
  createdAt,
  likes,
  comments,
}) => {
  const { user } = useAuth();
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="bg-card text-card-foreground shadow-lg rounded-lg p-6 mb-6">
      <div className="flex items-center mb-4">
        <img
          className="h-12 w-12 rounded-full mr-4 border-2 border-primary"
          src={`https://ui-avatars.com/api/?name=${author}&background=random`}
          alt={author}
        />
        <div>
          <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
            {author}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
          </p>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{content}</p>
      <ReactionButtons likes={likes} comments={comments} />
      <button
        className="mt-4 text-primary hover:text-primary/90 text-sm font-medium"
        onClick={() => setShowComments(!showComments)}
      >
        {showComments ? "Hide Comments" : `View ${comments} Comments`}
      </button>
      {showComments && <CommentSection postId={id} />}
    </div>
  );
};

export default FeedItem;
