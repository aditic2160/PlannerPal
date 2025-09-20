import React, { useState } from 'react';

const BlogPost = ({ title, author, content, date, comments, onComment }) => {
  const [newComment, setNewComment] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');

  const handleComment = () => {
    if (newComment.trim() === '' || commentAuthor.trim() === '') return;

    const comment = { text: newComment, author: commentAuthor };
    onComment(comment);
    setNewComment('');
    setCommentAuthor('');
  };

  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Date: {date}</p>
      <p>{content}</p>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <p>{comment.text}</p>
            <p>By: {comment.author}</p>
          </li>
        ))}
      </ul>
      <div className="comment-form">
        <input
          type="text"
          placeholder="Your Name"
          value={commentAuthor}
          onChange={(e) => setCommentAuthor(e.target.value)}
        />
        <textarea
          placeholder="Add a Comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleComment}>Comment</button>
      </div>
    </div>
  );
};

export default BlogPost;
