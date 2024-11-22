import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import FeedItem from "../components/feed/FeedItem";
import { UserPlus, LogIn } from "lucide-react";

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
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100 text-center">
        Welcome to{" "}
        <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          XpertBuddy
        </span>
      </h1>
      {user ? (
        <div>
          <p className="mb-6 text-xl text-gray-600 dark:text-gray-300">
            Hello,{" "}
            <span className="font-semibold text-blue-600">{user.username}</span>
            ! Here's what's new in your community:
          </p>
          <div className="space-y-8">
            {feedItems.map((item) => (
              <FeedItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      ) : (
        <div className="z-50 rounded-lg p-8 flex flex-col items-center justify-between">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
            Join Our Learning Community
          </h2>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
            Connect with fellow learners, access valuable resources, and
            participate in exciting events!
          </p>
          <div className="flex gap-2">
            <Link
              to="/register"
              className="bg-green-500 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg transition duration-300 inline-flex items-center text-lg font-medium"
            >
              <UserPlus className="mr-2" size={24} />
              Sign Up
            </Link>
            <Link
              to="/login"
              className="bg-blue-500 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition duration-300 inline-flex items-center text-lg font-medium"
            >
              <LogIn className="mr-2" size={24} />
              Log In
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
