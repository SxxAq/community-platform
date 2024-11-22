import React from "react";
import RegisterForm from "../components/auth/RegisterForm";

const Register: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
        Join XpertBuddy
      </h1>
      <div className="max-w-md mx-auto bg-card text-card-foreground shadow-lg rounded-lg p-8">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
