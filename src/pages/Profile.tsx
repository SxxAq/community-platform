import React, { useState } from "react";
import UserProfile from "../components/user/UserProfile";
import UserSettings from "../components/user/UserSettings";
import { User, Settings } from "lucide-react";

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"profile" | "settings">("profile");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100">
        Your Profile
      </h1>
      <div className="mb-8 flex space-x-4">
        <button
          className={`flex items-center px-6 py-3 rounded-lg transition duration-300 text-lg font-medium ${
            activeTab === "profile"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
          }`}
          onClick={() => setActiveTab("profile")}
        >
          <User className="mr-2" size={24} />
          Profile
        </button>
        <button
          className={`flex items-center px-6 py-3 rounded-lg transition duration-300 text-lg font-medium ${
            activeTab === "settings"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
          }`}
          onClick={() => setActiveTab("settings")}
        >
          <Settings className="mr-2" size={24} />
          Settings
        </button>
      </div>
      <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg p-6">
        {activeTab === "profile" ? <UserProfile /> : <UserSettings />}
      </div>
    </div>
  );
};

export default Profile;
