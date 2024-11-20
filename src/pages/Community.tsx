import React from "react";
import Chat from "../components/community/Chat";
import QASection from "../components/community/QASection";
import UserPresence from "../components/community/UserPresence";

const Community: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Community</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Chat</h2>
            <Chat />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Q&A</h2>
            <QASection />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Online Users</h2>
          <UserPresence />
        </div>
      </div>
    </div>
  );
};

export default Community;
