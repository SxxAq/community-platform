import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

  if (isLoading) return <div className="text-center p-4">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500 p-4">Error: {error}</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">User List</h2>
      <ul className="bg-white shadow-md rounded-lg overflow-hidden">
        {users.map((user) => (
          <li
            key={user.id}
            className="border-b border-gray-200 last:border-b-0"
          >
            <Link
              to={`/users/${user.id}`}
              className="block hover:bg-gray-50 transition duration-150 ease-in-out"
            >
              <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium text-blue-600">
                    {user.username}
                  </span>
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                    {user.role}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-600">{user.email}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
