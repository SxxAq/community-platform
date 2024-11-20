import React from "react";
import { useAuth } from "../../context/AuthContext";

const UserProfile: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <p className="mt-1 text-sm text-gray-900">{user.username}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <p className="mt-1 text-sm text-gray-900">{user.email}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Role
          </label>
          <p className="mt-1 text-sm text-gray-900">{user.role}</p>
        </div>
        {/* Add more user details as needed */}
      </div>
      <div className="mt-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
