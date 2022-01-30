import React, { Component } from 'react';

class Blogs extends Component {
    constructor() {
      super()
    
      this.state = {
        myBlogs: []
      }
    }

    componentDidMount() {
        fetch("http://localhost:5000/api/blogs")
            .then(res => res.json())
            .then(data => this.setState({
                myBlogs: data
            }, () => console.log(data)))
            .catch(err => console.error(err))
    }
    
    render() {
        return (
            <div className="blogs">
                <h3>All Blogs</h3>
                <div className="blogs-container">
                    {
                        this.state.myBlogs.map(blog => (
                            <div key={blog._id} className="indBlog">
                                <h3 className="blog-title">{blog.blogTitle}</h3>
                                <div>
                                    <h5 className="blog-author">Written by {blog.blogAuthor}</h5>
                                    <h6 className="blog-date">{blog.blogDate}</h6>
                                </div>
                                <p className="blog-snippet">{blog.blogSnippet}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Blogs;