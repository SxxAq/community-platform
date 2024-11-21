import React from "react";

interface WishlistItemProps {
  id: string;
  title: string;
  description: string;
  votes: number;
  status: "pending" | "in-progress" | "completed";
  onVote: (id: string) => void;
}

const WishlistItem: React.FC<WishlistItemProps> = ({
  id,
  title,
  description,
  votes,
  status,
  onVote,
}) => {
  return (
    <div className="bg-card text-card-foreground shadow rounded-lg p-6 mb-6">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onVote(id)}
            className="bg-primary text-primary-foreground px-3 py-1 rounded hover:bg-primary/90 transition duration-300"
          >
            Vote
          </button>
          <span className="text-muted-foreground">{votes} votes</span>
        </div>
        <span
          className={`px-2 py-1 rounded text-sm font-semibold ${
            status === "pending"
              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100"
              : status === "in-progress"
                ? "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100"
                : "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
          }`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
    </div>
  );
};

export default WishlistItem;
