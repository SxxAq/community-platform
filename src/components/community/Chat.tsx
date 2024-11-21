import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../../context/AuthContext";
import { Send } from "lucide-react";

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const { user } = useAuth();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  //
  //useEffect(() => {
  //  // Fetch initial messages
  //  const fetchMessages = async () => {
  //    // Replace with your actual API call
  //    const response = await fetch("/api/messages");
  //    const data = await response.json();
  //    setMessages(data);
  //  };
  //
  //  fetchMessages();
  //
  //  // Set up WebSocket connection for real-time updates
  //  const ws = new WebSocket("ws://your-websocket-url");
  //  ws.onmessage = (event) => {
  //    const message = JSON.parse(event.data);
  //    setMessages((prevMessages) => [...prevMessages, message]);
  //  };
  //
  //  return () => {
  //    ws.close();
  //  };
  //}, []);
  //
  //useEffect(() => {
  //  scrollToBottom();
  //}, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !newMessage.trim()) return;

    // Replace with your actual API call
    const response = await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: newMessage }),
    });

    if (response.ok) {
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-card text-card-foreground rounded-lg shadow">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 ${
              message.sender === user?.username ? "text-right" : "text-left"
            }`}
          >
            <div
              className={`inline-block p-2 rounded-lg ${
                message.sender === user?.username
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              <p className="font-semibold">{message.sender}</p>
              <p>{message.content}</p>
              <p className="text-xs mt-1 opacity-75">
                {new Date(message.timestamp).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSendMessage} className="border-t border-border p-4">
        <div className="flex">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-background text-foreground border border-input rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-r-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <Send className="w-5 h-5" />
            <span className="sr-only">Send</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
