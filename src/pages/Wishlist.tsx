import React, { useState } from "react";
import WishlistItem from "../components/wishlist/WishlistItem";
import WishlistVoting from "../components/wishlist/WishlistVoting";

const Wishlist: React.FC = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: "1",
      title: "Advanced React Course",
      description:
        "A comprehensive course on advanced React concepts and patterns",
      votes: 25,
      status: "pending" as const,
    },
    {
      id: "2",
      title: "Machine Learning Workshop",
      description:
        "Hands-on workshop for practical machine learning applications",
      votes: 18,
      status: "in-progress" as const,
    },
  ]);

  const handleVote = (itemId: string, direction: "up" | "down") => {
    setWishlistItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, votes: item.votes + (direction === "up" ? 1 : -1) }
          : item,
      ),
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Feature Wishlist
      </h1>
      <div className="space-y-6">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-4 bg-white dark:bg-gray-800 shadow rounded-lg p-6"
          >
            <WishlistVoting
              itemId={item.id}
              initialVotes={item.votes}
              onVote={handleVote}
            />
            <WishlistItem
              id={item.id}
              title={item.title}
              description={item.description}
              votes={item.votes}
              status={item.status}
              onVote={() => {}}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
