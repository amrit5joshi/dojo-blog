import React from 'react';
import { Link } from 'react-router-dom';
const BlogList = ({blogs}) => {
    return ( 
        <div className="blog-list">
            {blogs.map(blog => (
              <div className="blog-preview" key={blog.id} >
              <Link to={`/blogs/${blog.id}`}>
              <h3>{ blog.title }</h3>
              <h2>Written by { blog.author }</h2>
              </Link>
              </div>
            ))}
        </div>
     );
}
 
export default BlogList;