import React, { useState } from "react";
import { ThumbsUp, MessageCircle } from "lucide-react";

interface ReactionButtonsProps {
  likes: number;
  comments: number;
}

const ReactionButtons: React.FC<ReactionButtonsProps> = ({
  likes,
  comments,
}) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="flex space-x-6">
      <button
        onClick={handleLike}
        className={`flex items-center space-x-2 ${
          liked ? "text-primary" : "text-gray-500 dark:text-gray-400"
        } hover:text-primary transition-colors duration-200`}
      >
        <ThumbsUp className={`h-5 w-5 ${liked ? "fill-current" : ""}`} />
        <span className="font-medium">{likes + (liked ? 1 : 0)}</span>
      </button>
      <button className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-primary transition-colors duration-200">
        <MessageCircle className="h-5 w-5" />
        <span className="font-medium">{comments}</span>
      </button>
    </div>
  );
};

export default ReactionButtons;
