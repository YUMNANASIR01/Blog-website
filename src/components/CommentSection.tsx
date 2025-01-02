'use client';

import React, { useState } from "react";

type Comment = {
  id: number;
  text: string;
};

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState<string>("");

  // Add a new comment
  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        { id: Date.now(), text: newComment.trim() },
      ]);
      setNewComment("");
    }
  };

  // Delete a comment
  const handleDeleteComment = (id: number) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  // Start editing a comment
  const handleEditComment = (id: number, text: string) => {
    setEditingCommentId(id);
    setEditingText(text);
  };

  // Save edited comment
  const handleSaveEdit = () => {
    setComments(
      comments.map((comment) =>
        comment.id === editingCommentId
          ? { ...comment, text: editingText.trim() }
          : comment
      )
    );
    setEditingCommentId(null);
    setEditingText("");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-b from-blue-100 to-white shadow-lg rounded-lg mt-10  w-full  mb-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Comment Section</h2>

      {/* Add Comment */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment here..."
          className="flex-1 w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleAddComment}
          className="bg-blue-500 text-white px-6 py-3 text-lg rounded-lg hover:bg-blue-600 transition shadow-md"
        >
          Add
        </button>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="border border-gray-200 rounded-lg p-4 flex items-start justify-between shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-4 flex-1">
              {/* Profile Image */}
              <img
                src="/icon.png"
                alt="Profile"
                className="w-12 h-10 border-gray-300 rounded-full"
              />
              {editingCommentId === comment.id ? (
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              ) : (
                <p className="text-gray-800 text-lg">{comment.text}</p>
              )}
            </div>

            <div className="flex gap-4 ml-4">
              {editingCommentId === comment.id ? (
                <>
                  <button
                    onClick={handleSaveEdit}
                    className="bg-green-500 text-white px-4 py-2 text-sm rounded-lg hover:bg-green-600 transition shadow-sm"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingCommentId(null)}
                    className="bg-gray-400 text-white px-4 py-2 text-sm rounded-lg hover:bg-gray-500 transition shadow-sm"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleEditComment(comment.id, comment.text)}
                    className="bg-yellow-500 text-white px-4 py-2 text-sm rounded-lg hover:bg-yellow-600 transition shadow-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteComment(comment.id)}
                    className="bg-red-500 text-white px-4 py-2 text-sm rounded-lg hover:bg-red-600 transition shadow-sm"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
