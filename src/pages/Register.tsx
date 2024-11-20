import React from "react";
import RegisterForm from "../components/auth/RegisterForm";

const Register: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Join EduCommunity</h1>
      <div className="max-w-md mx-auto">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
