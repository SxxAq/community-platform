import React from "react";
import { useAuth } from "../../context/AuthContext";
import { User, Mail, Shield, Edit } from "lucide-react";

const UserProfile: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="text-center p-4 text-lg text-gray-600 dark:text-gray-300">
        Please log in to view your profile.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-center mb-8">
        <div className="w-32 h-32 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center">
          <User size={64} className="text-blue-600 dark:text-blue-300" />
        </div>
      </div>
      <div className="space-y-6">
        <div className="flex items-center">
          <User className="w-6 h-6 mr-4 text-blue-600 dark:text-blue-300" />
          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
              Username
            </label>
            <p className="text-lg font-medium text-gray-900 dark:text-gray-100">
              {user.username}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <Mail className="w-6 h-6 mr-4 text-blue-600 dark:text-blue-300" />
          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
              Email
            </label>
            <p className="text-lg font-medium text-gray-900 dark:text-gray-100">
              {user.email}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <Shield className="w-6 h-6 mr-4 text-blue-600 dark:text-blue-300" />
          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
              Role
            </label>
            <p className="text-lg font-medium text-gray-900 dark:text-gray-100 capitalize">
              {user.role}
            </p>
          </div>
        </div>
      </div>
      <button className="mt-8 w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 flex items-center justify-center">
        <Edit className="mr-2" size={20} />
        Edit Profile
      </button>
    </div>
  );
};

export default UserProfile;
