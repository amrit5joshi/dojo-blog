import React from 'react';
const BlogList = ({blogs}) => {
    return ( 
        <div className="blog-list">
            {blogs.map(blog => (
              <div className="blog-preview" key={blog.id} >
              <h3>{ blog.title }</h3>
              <h2>Written by { blog.author }</h2>
              <p>{blog.body}</p>
              </div>
            ))}
        </div>
     );
}
 
export default BlogList;