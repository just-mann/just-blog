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
        .then(data => console.log(data.json()))
            
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