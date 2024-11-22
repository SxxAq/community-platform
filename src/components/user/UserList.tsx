import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Shield } from "lucide-react";

interface User {
  id: string;
  username: string;
  email: string;
  role: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError("Failed to load users");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (isLoading)
    return (
      <div className="text-center p-4 text-lg text-muted-foreground">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="text-center p-4 text-lg text-destructive">
        Error: {error}
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">
        User List
      </h2>
      <ul className="bg-card text-card-foreground shadow-lg rounded-lg overflow-hidden">
        {users.map((user) => (
          <li key={user.id} className="border-b border-border last:border-b-0">
            <Link
              to={`/users/${user.id}`}
              className="block hover:bg-muted/50 transition duration-150 ease-in-out p-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-foreground">
                      {user.username}
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center">
                      <Mail className="w-4 h-4 mr-1" />
                      {user.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-secondary/10 text-secondary flex items-center">
                    <Shield className="w-4 h-4 mr-1" />
                    {user.role}
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
