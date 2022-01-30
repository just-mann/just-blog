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
                <h3>Blogs</h3>
                <div>
                    {
                        this.state.myBlogs.map(blog => (
                            <div key={blog._id}>
                                <h3>{blog.title}</h3>
                                <h5>{blog.author}</h5>
                                <p>{blog.date}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Blogs;