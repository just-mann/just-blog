import React, { Component } from 'react';

class Blogs extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        blogs: []
      }
    }
    
    render() {
        return (
            <div className='Blogs'>
                <h2>Blogs</h2>
            </div>
        );
    }
}

export default Blogs;
