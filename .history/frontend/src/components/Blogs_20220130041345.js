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
            //.then(res => res.json())
            .then(data => console.log(data))
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