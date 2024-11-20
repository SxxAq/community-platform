import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

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
      <h2 className="text-2xl font-bold">Q&A Section</h2>
      {user && (
        <form onSubmit={handleSubmitQuestion} className="space-y-4">
          <input
            type="text"
            value={newQuestion.title}
            onChange={(e) =>
              setNewQuestion({ ...newQuestion, title: e.target.value })
            }
            placeholder="Question Title"
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            value={newQuestion.content}
            onChange={(e) =>
              setNewQuestion({ ...newQuestion, content: e.target.value })
            }
            placeholder="Question Content"
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Ask Question
          </button>
        </form>
      )}
      {questions.map((question) => (
        <div key={question.id} className="bg-white shadow rounded-lg p-6">
          <h3 className="font-bold text-xl mb-2">{question.title}</h3>
          <p className="text-gray-600 mb-4">{question.content}</p>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>
              Asked by {question.author} on{" "}
              {new Date(question.createdAt).toLocaleString()}
            </span>
            <div className="flex items-center space-x-2">
              <button onClick={() => handleVote(question.id, true)}>👍</button>
              <span>{question.votes}</span>
              <button onClick={() => handleVote(question.id, false)}>👎</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QASection;
