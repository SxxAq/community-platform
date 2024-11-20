import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import CommentSection from "./CommentSection";
import ReactionButtons from "./ReactionButtons";

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
    <div className="bg-white shadow rounded-lg p-6 mb-6">
      <div className="flex items-center mb-4">
        <img
          className="h-12 w-12 rounded-full mr-4"
          src={`https://ui-avatars.com/api/?name=${author}`}
          alt={author}
        />
        <div>
          <h3 className="font-bold text-lg">{author}</h3>
          <p className="text-gray-500 text-sm">
            {new Date(createdAt).toLocaleString()}
          </p>
        </div>
      </div>
      <p className="text-gray-800 mb-4">{content}</p>
      <ReactionButtons likes={likes} />
      <button
        className="text-blue-600 hover:underline mt-2"
        onClick={() => setShowComments(!showComments)}
      >
        {showComments ? "Hide Comments" : `View ${comments} Comments`}
      </button>
      {showComments && <CommentSection postId={id} />}
    </div>
  );
};

export default FeedItem;
