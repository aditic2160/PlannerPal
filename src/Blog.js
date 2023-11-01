import React, { useState } from 'react';
import BlogPost from './BlogPost';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', author: '', content: '', comments: [] });

  const handleAddPost = () => {
    if (newPost.title && newPost.author && newPost.content) {
      const date = new Date().toLocaleString();
      setPosts([...posts, { ...newPost, date }]);
      setNewPost({ title: '', author: '', content: '', comments: [] });
    }
  };

  const handleComment = (postId, comment) => {
    const updatedPosts = [...posts];
    const post = updatedPosts.find((p) => p.date === postId);
    if (post) {
      post.comments.push(comment);
      setPosts(updatedPosts);
    }
  };

  return (
    <div className="blog">
      <h1>Homework Help Forum</h1>
      <div className="blog-form">
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={newPost.author}
          onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
        />
        <textarea
          placeholder="Content"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
        <button onClick={handleAddPost}>Add Post</button>
      </div>
      <div className="blog-posts">
        {posts.map((post, index) => (
          <BlogPost key={index} {...post} onComment={(comment) => handleComment(post.date, comment)} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
