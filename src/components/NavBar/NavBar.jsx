import React from 'react'
import './NavBar.css'

export default function NavBar() {
  return (
    <div className="navbar-container">
        <div className="main-logo">
            <h3>World Affairs</h3>
        </div>
        <div className="navBar-links">
            <p>Home</p>
            <p>Top Headlines</p>
            <p>India</p>
            <p>World</p>
            <select >
              <option disabled={true}>Select category</option>
              <option>Entertainment</option>
              <option>Health</option>
              <option>Science</option>
              <option>Sports</option>
              <option>Technology</option>
            </select>
        </div>
    </div>
  )
}
