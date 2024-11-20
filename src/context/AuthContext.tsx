import React, { createContext, useState, useContext, useEffect } from "react";

interface User {
  id: string;
  username: string;
  email: string;
  role: "admin" | "tutor" | "student";
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (
    username: string,
    email: string,
    password: string,
  ) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

// Mock user database
const mockUsers: User[] = [
  {
    id: "1",
    username: "demo",
    email: "demo@example.com",
    role: "student",
  },
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  // Mock login function
  const login = async (email: string, password: string) => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const foundUser = mockUsers.find((u) => u.email === email);
    if (!foundUser) {
      throw new Error("Invalid credentials");
    }

    // Create a simple token (in a real app, this would be a JWT from the backend)
    const token = btoa(JSON.stringify(foundUser));
    localStorage.setItem("token", token);
    setUser(foundUser);
  };

  // Mock register function
  const register = async (
    username: string,
    email: string,
    password: string,
  ) => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Check if user already exists
    if (mockUsers.find((u) => u.email === email)) {
      throw new Error("User already exists");
    }

    // Create new user
    const newUser: User = {
      id: String(mockUsers.length + 1),
      username,
      email,
      role: "student",
    };

    mockUsers.push(newUser);

    // Auto login after registration
    const token = btoa(JSON.stringify(newUser));
    localStorage.setItem("token", token);
    setUser(newUser);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = JSON.parse(atob(token));
        setUser(decoded);
      } catch (error) {
        localStorage.removeItem("token");
      }
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
