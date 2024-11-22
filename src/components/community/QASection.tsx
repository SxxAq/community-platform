import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { ThumbsUp, ThumbsDown, MessageCircle } from "lucide-react";

interface Question {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  votes: number;
  answers: Answer[];
}

interface Answer {
  id: string;
  content: string;
  author: string;
  createdAt: string;
  votes: number;
}

const QASection: React.FC = () => {
  const { user } = useAuth();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [newQuestion, setNewQuestion] = useState({ title: "", content: "" });

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      const question: Question = {
        id: Date.now().toString(),
        title: newQuestion.title,
        content: newQuestion.content,
        author: user.username,
        createdAt: new Date().toISOString(),
        votes: 0,
        answers: [],
      };
      setQuestions([question, ...questions]);
      setNewQuestion({ title: "", content: "" });
    }
  };

  const handleVote = (questionId: string, increment: boolean) => {
    setQuestions(
      questions.map((q) =>
        q.id === questionId
          ? { ...q, votes: q.votes + (increment ? 1 : -1) }
          : q,
      ),
    );
  };

  return (
    <div className="space-y-6">
      {user && (
        <form
          onSubmit={handleSubmitQuestion}
          className="space-y-4 bg-gray-800 p-6 rounded-lg border border-gray-700"
        >
          <div>
            <input
              type="text"
              value={newQuestion.title}
              onChange={(e) =>
                setNewQuestion({ ...newQuestion, title: e.target.value })
              }
              placeholder="What's your question?"
              className="w-full px-4 py-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              required
            />
          </div>
          <div>
            <textarea
              value={newQuestion.content}
              onChange={(e) =>
                setNewQuestion({ ...newQuestion, content: e.target.value })
              }
              placeholder="Provide more details about your question..."
              className="w-full px-4 py-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm min-h-[100px]"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors text-sm font-medium"
            >
              Post Question
            </button>
          </div>
        </form>
      )}

      <div className="space-y-4">
        {questions.map((question) => (
          <div
            key={question.id}
            className="bg-gray-800 border border-gray-700 rounded-lg p-6 transition-shadow hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-100">
              {question.title}
            </h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              {question.content}
            </p>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleVote(question.id, true)}
                    className="text-blue-500 hover:text-blue-400 transition-colors"
                  >
                    <ThumbsUp className="w-4 h-4" />
                  </button>
                  <span className="font-medium">{question.votes}</span>
                  <button
                    onClick={() => handleVote(question.id, false)}
                    className="text-blue-500 hover:text-blue-400 transition-colors"
                  >
                    <ThumbsDown className="w-4 h-4" />
                  </button>
                </div>
                <button className="flex items-center gap-1 text-gray-400 hover:text-blue-500 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span>{question.answers.length} answers</span>
                </button>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="font-medium">{question.author}</span>
                <span>•</span>
                <span>{new Date(question.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QASection;
