import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h3>Contact Me</h3>
        <form>
            <div>
                <label htmlFor="fName">Name</label>
                <input type="text" name="fName" id="fName" className="fName" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" className="email" />
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <input type="text" name="message" id="message" className="message" />
            </div>
            <input type="submit" value="Send Message" />
        </form>
      </div>
    )
  }
}

export default Contact;