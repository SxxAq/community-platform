import React from "react";
import Chat from "../components/community/Chat";
import QASection from "../components/community/QASection";
import UserPresence from "../components/community/UserPresence";

const Community: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h1 className="text-3xl font-bold mb-6 text-foreground">Community Hub</h1>*/}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Real-time Chat
            </h2>
            <Chat />
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Community Q&A
            </h2>
            <QASection />
          </section>
        </div>
        <aside>
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Community Pulse
          </h2>
          <UserPresence />
        </aside>
      </div>
    </div>
  );
};

export default Community;
