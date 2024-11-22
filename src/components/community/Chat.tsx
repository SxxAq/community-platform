import React, { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
}

const dummyMessages = [
  {
    id: "1",
    sender: "JohnDoe",
    content: "Hey everyone, welcome to the community!",
    timestamp: new Date().toISOString(),
  },
  {
    id: "2",
    sender: "DevUser",
    content: "Great to be here! Any interesting projects going on?",
    timestamp: new Date().toISOString(),
  },
];

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(dummyMessages);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      sender: "CurrentUser",
      content: newMessage,
      timestamp: new Date().toISOString(),
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-[500px] bg-background rounded-lg border border-border">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "CurrentUser" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-2xl ${
                message.sender === "CurrentUser"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-sm">{message.sender}</span>
                <span className="text-xs opacity-70">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </span>
              </div>
              <p className="text-sm leading-relaxed">{message.content}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={handleSendMessage}
        className="p-4 border-t border-border bg-card/50"
      >
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 bg-background rounded-full border border-input focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
          />
          <button
            type="submit"
            className="bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
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
