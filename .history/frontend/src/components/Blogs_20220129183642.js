import React, { Component } from 'react';

class Blogs extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        blogs: []
      }
    }

    componentDidMount() {
        fetch('/api/blogs')
            .then(data => console.log(data.json()))
            .catch(err => console.log(err))
    }
    
    render() {
        return (
        <div className="blogs">
            <h2>Blogs</h2>
        </div>
        )
    }
}

export default Blogs
