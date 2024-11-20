import React, { useState } from "react";
import { ThumbsUp, ThumbsDown, MessageCircle, Share2 } from "lucide-react";

interface ReactionButtonsProps {
  likes: number;
  dislikes?: number;
  comments: number;
  onLike: () => void;
  onDislike?: () => void;
  onComment: () => void;
  onShare: () => void;
}

const ReactionButtons: React.FC<ReactionButtonsProps> = ({
  likes,
  dislikes,
  comments,
  onLike,
  onDislike,
  onComment,
  onShare,
}) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      setDisliked(false);
      onLike();
    }
  };

  const handleDislike = () => {
    if (!disliked && onDislike) {
      setDisliked(true);
      setLiked(false);
      onDislike();
    }
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={handleLike}
        className={`flex items-center space-x-1 ${liked ? "text-blue-600" : "text-gray-500"}`}
      >
        <ThumbsUp size={20} />
        <span>{likes}</span>
      </button>
      {onDislike && (
        <button
          onClick={handleDislike}
          className={`flex items-center space-x-1 ${disliked ? "text-red-600" : "text-gray-500"}`}
        >
          <ThumbsDown size={20} />
          <span>{dislikes}</span>
        </button>
      )}
      <button
        onClick={onComment}
        className="flex items-center space-x-1 text-gray-500"
      >
        <MessageCircle size={20} />
        <span>{comments}</span>
      </button>
      <button
        onClick={onShare}
        className="flex items-center space-x-1 text-gray-500"
      >
        <Share2 size={20} />
        <span>Share</span>
      </button>
    </div>
  );
};

export default ReactionButtons;
