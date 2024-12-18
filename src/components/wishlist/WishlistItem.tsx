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
  title,
  description,
  votes,
  status,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h3 className="font-bold text-gray-800 text-xl mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-gray-700">{votes} votes</span>
        </div>
        <span
          className={`px-2 py-1 rounded text-sm font-semibold ${
            status === "pending"
              ? "bg-yellow-100 text-yellow-800"
              : status === "in-progress"
                ? "bg-blue-100 text-blue-800"
                : "bg-green-100 text-green-800"
          }`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
    </div>
  );
};

export default WishlistItem;
