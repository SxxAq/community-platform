import React from "react";
import { User } from "lucide-react";

const dummyUsers = [
  { id: "1", username: "JohnDoe", isOnline: true },
  { id: "2", username: "DevUser", isOnline: true },
  { id: "3", username: "CodeMaster", isOnline: false },
  { id: "4", username: "Designer123", isOnline: true },
  { id: "5", username: "DataNinja", isOnline: false },
];

interface User {
  id: string;
  username: string;
  isOnline: boolean;
}

const UserPresence: React.FC = () => {
  const [users] = React.useState<User[]>(dummyUsers);
  const onlineCount = users.filter((user) => user.isOnline).length;

  return (
    <div className="space-y-6">
      <div className="bg-primary/5 rounded-lg p-4 flex items-center justify-between">
        <span className="text-sm font-medium text-primary">Online Now</span>
        <span className="bg-primary text-primary-foreground text-sm font-medium px-2.5 py-0.5 rounded-full">
          {onlineCount}
        </span>
      </div>

      <div className="space-y-2">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <div className="relative">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-secondary-foreground" />
              </div>
              <span
                className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-background ${
                  user.isOnline ? "bg-green-500" : "bg-muted"
                }`}
              />
            </div>
            <span
              className={`text-sm font-medium ${
                user.isOnline ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {user.username}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPresence;
