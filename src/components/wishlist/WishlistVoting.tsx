import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import Button from "../common/Button";

interface WishlistVotingProps {
  itemId: string;
  initialVotes: number;
  onVote: (itemId: string, direction: "up" | "down") => void;
}

const WishlistVoting: React.FC<WishlistVotingProps> = ({
  itemId,
  initialVotes,
  onVote,
}) => {
  const [votes, setVotes] = useState(initialVotes);

  const handleVote = (direction: "up" | "down") => {
    onVote(itemId, direction);
    setVotes((prev) => (direction === "up" ? prev + 1 : prev - 1));
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleVote("up")}
        aria-label="Vote up"
      >
        <ChevronUp className="w-4 h-4" />
      </Button>
      <span className="font-semibold text-lg">{votes}</span>
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleVote("down")}
        aria-label="Vote down"
      >
        <ChevronDown className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default WishlistVoting;
