// components/CommentSection.tsx
"use client";

import React, { useState } from 'react';
import { client } from '@/sanity/lib/client';

interface Comment {
  _id: string;
  name: string;
  email: string;
  comment: string;
  _createdAt: string;
}

interface CommentSectionProps {
  postId: string;
  initialComments: Comment[];
}

const CommentSection = ({ postId, initialComments }: CommentSectionProps) => {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState({
    name: '',
    email: '',
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          postId,
          name: newComment.name,
          email: newComment.email,
          comment: newComment.comment,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to post comment');
      }

      const data = await response.json();
      
      setComments([{ 
        _id: data._id,
        name: newComment.name,
        email: newComment.email,
        comment: newComment.comment,
        _createdAt: new Date().toISOString()
      }, ...comments]);
      
      setNewComment({ name: '', email: '', comment: '' });
    } catch (err) {
      setError('Failed to post comment. Please try again.');
      console.error('Error submitting comment:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-gray-800">
        Comments ({comments.length})
      </h3>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {/* Comment List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment._id} className="bg-gray-50 p-6 rounded-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-semibold text-gray-800">{comment.name}</h4>
                <p className="text-sm text-gray-500">
                  {new Date(comment._createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <p className="text-gray-600">{comment.comment}</p>
          </div>
        ))}
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Name"
            value={newComment.name}
            onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
            className="w-full p-3 border rounded-md"
            required
            spellCheck={false}
          />
          <input
            type="email"
            placeholder="Email"
            value={newComment.email}
            onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
            className="w-full p-3 border rounded-md"
            required
            spellCheck={false}
          />
        </div>
        <textarea
          placeholder="Your comment"
          value={newComment.comment}
          onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
          className="w-full p-3 border rounded-md h-32"
          required
          spellCheck={false}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#FF9F0D] text-white px-6 py-3 rounded-md hover:bg-[#ff9f0dd3] transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Post Comment'}
        </button>
      </form>
      
    </div>
  );
};

export default CommentSection;
