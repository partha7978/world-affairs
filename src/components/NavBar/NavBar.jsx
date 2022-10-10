import React from 'react'
import './NavBar.css'
import indiaLogo from '../../assets/image/india.webp'
import worldLogo from '../../assets/image/world.webp'
import homeImage from '../../assets/image/house.webp'
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

export default function NavBar() {
  let navBarElementStyle = {
    backgroundColor: '#171717',
    color: '#ffffff',
    margin: 0.5,
    cursor: 'pointer'
  }
  return (
    <div className="navbar-container">
        <div className="main-logo">
            <h3>World Affairs</h3>
        </div>
        <div className="navBar-links">
            <p><img src={homeImage} alt="home logo" />Home</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </svg>
              Top Headlines
            </p>
            <p><img src={indiaLogo} alt="india logo" />India</p>
            <p><img src={worldLogo} alt="world logo" />World</p>
            <div className="navBar-chip-countries">
              <span>Filter by countries</span>
              <Divider sx={{backgroundColor: '#ffffff'}}/>
              <div className="navBar-chips">
                <Chip sx={navBarElementStyle} label="USA" />
                <Chip sx={navBarElementStyle} label="France" />
                <Chip sx={navBarElementStyle} label="Germany" />
                <Chip sx={navBarElementStyle} label="China" />
                <Chip sx={navBarElementStyle} label="Russia" />
                <Chip sx={navBarElementStyle} label="Japan" />
                <Chip sx={navBarElementStyle} label="Australia" />
                <Chip sx={navBarElementStyle} label="United Kingdom" />
              </div>
            </div>
        </div>
        <div className="navBar-social">
            <p>Developed by <a href="http://">Partha</a></p>
        </div>
    </div>
  )
}
