import React, { useState, useEffect } from "react";

interface User {
  id: string;
  username: string;
  isOnline: boolean;
}

const UserPresence: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  //useEffect(() => {
  //  // Fetch initial user list
  //  const fetchUsers = async () => {
  //    // Replace with your actual API call
  //    const response = await fetch("/api/users");
  //    const data = await response.json();
  //    setUsers(data);
  //  };
  //
  //  fetchUsers();
  //
  //  // Set up WebSocket connection for real-time updates
  //  const ws = new WebSocket();
  //  ws.onmessage = (event) => {
  //    const { userId, isOnline } = JSON.parse(event.data);
  //    setUsers((prevUsers) =>
  //      prevUsers.map((user) =>
  //        user.id === userId ? { ...user, isOnline } : user,
  //      ),
  //    );
  //  };
  //
  //  return () => {
  //    ws.close();
  //  };
  //}, []);

  return (
    <div className="bg-card text-card-foreground rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-4">Online Users</h3>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="flex items-center">
            <span
              className={`w-3 h-3 rounded-full mr-2 ${
                user.isOnline ? "bg-green-500" : "bg-muted"
              }`}
            ></span>
            <span
              className={
                user.isOnline ? "text-foreground" : "text-muted-foreground"
              }
            >
              {user.username}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPresence;
