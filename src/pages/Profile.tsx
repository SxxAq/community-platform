import React, { useState } from "react";
import UserProfile from "../components/user/UserProfile";
import UserSettings from "../components/user/UserSettings";
import { FiUser, FiSettings } from "react-icons/fi";

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"profile" | "settings">("profile");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Your Profile
      </h1>
      <div className="mb-6 flex space-x-4">
        <button
          className={`flex items-center px-4 py-2 rounded transition duration-300 ${
            activeTab === "profile"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100"
          }`}
          onClick={() => setActiveTab("profile")}
        >
          <FiUser className="mr-2" />
          Profile
        </button>
        <button
          className={`flex items-center px-4 py-2 rounded transition duration-300 ${
            activeTab === "settings"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100"
          }`}
          onClick={() => setActiveTab("settings")}
        >
          <FiSettings className="mr-2" />
          Settings
        </button>
      </div>
      {activeTab === "profile" ? <UserProfile /> : <UserSettings />}
    </div>
  );
};

export default Profile;
