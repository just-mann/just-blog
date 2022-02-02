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
        fetch("/api/blogs")
            .then((res) => {
                const data = res.data;
                this.setState({ myBlogs: data});
                console.log('Data is received...');
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
                                <h3 className="blogTitle">{blog.blogTitle}</h3>
                                <div>
                                    <p className="blogAuthor">Author: {blog.author}</p>
                                    <p className="blogDate">Published: {blog.date}</p>
                                </div>
                                <p className="blogSnippet">{blog.blogSnippet}</p>
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