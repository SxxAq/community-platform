import React from "react";
import LoginForm from "../components/auth/LoginForm";

const Login: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
        Log In to XpertBuddy
      </h1>
      <div className="max-w-md mx-auto">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
