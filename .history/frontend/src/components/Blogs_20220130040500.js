import React, { Component } from 'react';

class Blogs extends Component {
    constructor() {
      super()
    
      this.state = {
        myBlogs: []
      }
    }

    componentDidMount() {
        fetch("/api/blogs", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
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