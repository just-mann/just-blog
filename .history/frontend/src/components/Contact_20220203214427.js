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
                <textarea name="message" id="message" cols="30" rows="10" className="message"></textarea>
            </div>
            <input type="submit" value="Send Message" />
        </form>
      </div>
    )
  }
}

export default Contact;