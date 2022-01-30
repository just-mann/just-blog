import React, { Component } from 'react';

class Blogs extends Component {
    constructor() {
      super()
    
      this.state = {
        myBlogs: []
      }
    }

    componentDidMount() {
        fetch("/api/blogs")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    myBlogs: data
                })
            })
    }
    
    render() {
        return (
            <div className="blogs">
                <h3>Blogs</h3>
            </div>
        )
    }
}

export default Blogs;