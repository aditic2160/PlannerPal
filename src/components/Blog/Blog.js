// Blog.js
import React, { useState } from 'react';
import '../../App.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({ title: '', author: '', content: '' });

const addPost = () => {
  if (!form.title.trim() || !form.author.trim() || !form.content.trim()) {
    alert("Please fill in all fields before posting.");
    return;
  }
  setPosts((p) => [{ ...form, id: Date.now(), date: new Date(), comments: [] }, ...p]);
  setForm({ title: '', author: '', content: '' });
};


  const addComment = (postId, c) => {
    setPosts((p) => p.map(post => post.id === postId ? { ...post, comments: [...post.comments, { id: Date.now(), text: c }] } : post));
  };

  return (
    <div className="content-card">
      <h2>Homework Help Forum</h2>

      <div className="col mb-12">
        <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <input placeholder="Author" value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} />
        <textarea placeholder="Describe your question or topic..." value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} />
        <div style={{ display:'flex', justifyContent:'flex-end', gap:8 }}>
          <button className="secondary" onClick={() => setForm({ title: '', author: '', content: '' })}>Reset</button>
          <button onClick={addPost}>Post</button>
        </div>
      </div>

      <div>
        {posts.length === 0 && <p className="muted">No posts yet. Start the discussion!</p>}
        <ul>
          {posts.map(post => (
            <li key={post.id} style={{ marginBottom:12 }}>
              <article className="content-card" style={{ padding:14 }}>
                <div style={{ display:'flex', justifyContent:'space-between', gap:8 }}>
                  <div>
                    <h3 style={{ margin:'0 0 6px 0' }}>{post.title}</h3>
                    <div className="small muted">by {post.author} • {post.date.toLocaleString()}</div>
                  </div>
                </div>

                <p style={{ marginTop:12 }}>{post.content}</p>

                <div style={{ marginTop:10 }}>
                  <CommentList comments={post.comments} />
                  <AddComment onAdd={(c) => addComment(post.id, c)} />
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => (
  <ul style={{ listStyle:'none', padding:0, margin:0 }}>
    {comments.map(c => (
      <li key={c.id} style={{ background:'#f6f3fb', padding:8, borderRadius:8, marginTop:6 }}>{c.text}</li>
    ))}
  </ul>
);

const AddComment = ({ onAdd }) => {
  const [c, setC] = useState('');
  return (
    <div style={{ display:'flex', gap:8, marginTop:10 }}>
      <input placeholder="Write a comment..." value={c} onChange={(e) => setC(e.target.value)} />
      <button onClick={() => { if (c.trim()) { onAdd(c.trim()); setC(''); } }}>Add</button>
    </div>
  );
};

export default Blog;
