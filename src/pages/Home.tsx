import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import FeedItem from "../components/feed/FeedItem";
import { FiUserPlus, FiLogIn } from "react-icons/fi";

const Home: React.FC = () => {
  const { user } = useAuth();

  // Mock data for feed items
  const feedItems = [
    {
      id: "1",
      author: "John Doe",
      content: "Just published a new tutorial on React hooks!",
      createdAt: "2023-06-01T12:00:00Z",
      likes: 15,
      comments: 3,
    },
    {
      id: "2",
      author: "Jane Smith",
      content: "Excited for the upcoming webinar on machine learning!",
      createdAt: "2023-06-02T10:30:00Z",
      likes: 8,
      comments: 1,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Welcome to XpertBuddy
      </h1>
      {user ? (
        <div>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Hello, {user.username}! Here's what's new in your community:
          </p>
          <div className="space-y-6">
            {feedItems.map((item) => (
              <FeedItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Join Our Learning Community
          </h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Connect with fellow learners, access valuable resources, and
            participate in exciting events!
          </p>
          <div className="space-x-4">
            <Link
              to="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 inline-flex items-center"
            >
              <FiUserPlus className="mr-2" />
              Sign Up
            </Link>
            <Link
              to="/login"
              className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100 px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300 inline-flex items-center"
            >
              <FiLogIn className="mr-2" />
              Log In
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
