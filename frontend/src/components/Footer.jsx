import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>HOTEL.</h1>
          <p>Event Organizers</p>
        </div>

        <div className="tag">
          <label >News Latter</label>
          <div>
            <input type="text" placeholder='Enter email' />
            <button>Subscribe</button>
          </div>
          <p>Sign up with your email address to receice news and updates!</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer