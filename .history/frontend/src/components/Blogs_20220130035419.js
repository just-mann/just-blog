import React, { Component } from 'react';

class Blogs extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        myBlogs: []
      }
    }

    componentDidMount() {
        fetch("/api/blogs")
            .then(res => res.json())
            .then(data => this.setState({myBlogs: data.json()}, () => console.log(this.state.myBlogs)))
            .catch(err => console.log(err))
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