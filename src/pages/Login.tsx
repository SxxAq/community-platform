import React from "react";
import LoginForm from "../components/auth/LoginForm";

const Login: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
        Log In to XpertBuddy
      </h1>
      <div className="max-w-md mx-auto bg-card text-card-foreground shadow-lg rounded-lg p-8">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
