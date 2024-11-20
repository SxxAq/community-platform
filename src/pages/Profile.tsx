import React, { useState } from "react";
import UserProfile from "../components/user/UserProfile";
import UserSettings from "../components/user/UserSettings";

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"profile" | "settings">("profile");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
      <div className="mb-6">
        <button
          className={`mr-4 ${activeTab === "profile" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </button>
        <button
          className={`${activeTab === "settings" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}
          onClick={() => setActiveTab("settings")}
        >
          Settings
        </button>
      </div>
      {activeTab === "profile" ? <UserProfile /> : <UserSettings />}
    </div>
  );
};

export default Profile;
