import React from "react";
import { User } from "lucide-react";

const dummyUsers = [
  { id: "1", username: "JohnDoe", isOnline: true },
  { id: "2", username: "JaneSmith", isOnline: false },
  { id: "3", username: "DevUser", isOnline: true },
  { id: "4", username: "Coder123", isOnline: false },
  { id: "5", username: "OnlineGuy", isOnline: true },
];

const UserPresence: React.FC = () => {
  return (
    <div className="bg-gray-800 text-gray-100 rounded-lg p-6 border border-gray-700">
      {/* <h2 className="text-xl font-semibold mb-4">User Presence</h2> */}
      <ul className="space-y-2">
        {dummyUsers.map((user) => (
          <li key={user.id} className="flex items-center gap-3">
            <div
              className={`w-3 h-3 rounded-full ${
                user.isOnline ? "bg-green-500" : "bg-gray-500"
              }`}
            ></div>
            <span className="flex items-center gap-2">
              <User className="w-4 h-4 text-gray-400" />
              {user.username}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPresence;
