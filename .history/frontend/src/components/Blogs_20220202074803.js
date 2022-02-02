import React, { Component } from 'react';

class Blogs extends Component {
    constructor() {
      super()
    
      this.state = {
        myBlogs: []
      }
    }

    componentDidMount() {
        this.getBlogsPosts();
    }

    getBlogsPosts = () => {
        fetch("http://localhost:5000/api/blogs")
            .then(res =>  res.json())
            .then(data => { 
                this.setState({
                    myBlogs: data
                })
            })
            .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div className="blogs">
                <h3>All Blogs</h3>
                <div className="blogs-container">
                    {
                        this.state.myBlogs.map(blog => (
                            <div key={blog._id} className="indBlog">
                                <h3 className="blogTitle">{blog.blog_title}</h3>
                                <div>
                                    <p className="blogAuthor">Author: {blog.blog_author}</p>
                                    <p className="blogDate">Published: {blog.blog_date}</p>
                                </div>
                                <p className="blogSnippet">{blog.blog_snippet}</p>
                                <button>Read Article</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Blogs;