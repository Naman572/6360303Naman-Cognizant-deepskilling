import React from 'react';

const blogs = [
  {
    id: 1,
    title: "React Learning",
    author: "Stephen Biz",
    description: "Welcome to learning React!"
  },
  {
    id: 2,
    title: "Installation",
    author: "Schwezdenier",
    description: "You can install React from npm."
  }
];

const BlogDetails = () => {
  return (
    <div>
      <h2>Blog Details</h2>
      {blogs.map(blog => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p><strong>{blog.author}</strong></p>
          <p>{blog.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;
