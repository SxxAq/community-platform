import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

interface Comment {
  id: string;
  author: string;
  content: string;
  createdAt: string;
}

interface CommentSectionProps {
  postId: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    // Fetch comments for the post
    const fetchComments = async () => {
      // Replace with your actual API call
      const response = await fetch(`/api/posts/${postId}/comments`);
      const data = await response.json();
      setComments(data);
    };

    fetchComments();
  }, [postId]);

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    // Replace with your actual API call
    const response = await fetch(`/api/posts/${postId}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: newComment }),
    });

    if (response.ok) {
      const newCommentData = await response.json();
      setComments([...comments, newCommentData]);
      setNewComment("");
    }
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Comments</h3>
      {comments.map((comment) => (
        <div key={comment.id} className="bg-gray-100 p-3 rounded mb-2">
          <p className="text-sm font-semibold">{comment.author}</p>
          <p className="text-sm">{comment.content}</p>
          <p className="text-xs text-gray-500 mt-1">
            {new Date(comment.createdAt).toLocaleString()}
          </p>
        </div>
      ))}
      {user && (
        <form onSubmit={handleSubmitComment} className="mt-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Write a comment..."
            rows={3}
          />
          <button
            type="submit"
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Post Comment
          </button>
        </form>
      )}
    </div>
  );
};

export default CommentSection;
