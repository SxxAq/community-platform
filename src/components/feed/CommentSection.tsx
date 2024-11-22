import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { Send } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

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
    const fetchComments = async () => {
      // Simulating API call
      const mockComments: Comment[] = [
        {
          id: "1",
          author: "Alice",
          content: "Great post!",
          createdAt: new Date().toISOString(),
        },
        {
          id: "2",
          author: "Bob",
          content: "Thanks for sharing!",
          createdAt: new Date(Date.now() - 3600000).toISOString(),
        },
      ];
      setComments(mockComments);
    };

    fetchComments();
  }, [postId]);

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !newComment.trim()) return;

    // Simulating API call
    const newCommentData: Comment = {
      id: Date.now().toString(),
      author: user.username,
      content: newComment,
      createdAt: new Date().toISOString(),
    };

    setComments([...comments, newCommentData]);
    setNewComment("");
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Comments
      </h3>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-muted p-4 rounded-lg">
            <div className="flex justify-between items-start">
              <p className="font-semibold text-gray-800 dark:text-gray-200">
                {comment.author}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {formatDistanceToNow(new Date(comment.createdAt), {
                  addSuffix: true,
                })}
              </p>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mt-1">
              {comment.content}
            </p>
          </div>
        ))}
      </div>
      {user && (
        <form onSubmit={handleSubmitComment} className="mt-6">
          <div className="flex items-center">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Write a comment..."
            />
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-r-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CommentSection;
