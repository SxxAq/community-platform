import React from "react";
import LoginForm from "../components/auth/LoginForm";

const Login: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Log In to EduCommunity
      </h1>
      <div className="max-w-md mx-auto">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
