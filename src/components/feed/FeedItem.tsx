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
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <div className="flex items-center mb-4">
        <img
          className="h-10 w-10 rounded-full mr-4"
          src={`https://ui-avatars.com/api/?name=${author}&background=random`}
          alt={author}
        />
        <div>
          <h3 className="font-semibold text-lg text-gray-800">{author}</h3>
          <p className="text-gray-500 text-sm">
            {new Date(createdAt).toLocaleString()}
          </p>
        </div>
      </div>
      <p className="text-gray-700 mb-4">{content}</p>
      <ReactionButtons likes={likes} comments={comments} />
      <button
        className="text-blue-600 hover:underline mt-4 text-sm"
        onClick={() => setShowComments(!showComments)}
      >
        {showComments ? "Hide Comments" : `View ${comments} Comments`}
      </button>
      {showComments && <CommentSection postId={id} />}
    </div>
  );
};

export default FeedItem;
