import React from 'react'
import './NavBar.css'
import indiaLogo from '../../assets/image/india.webp'
import worldLogo from '../../assets/image/world.webp'
import usaLogo from '../../assets/image/usa.webp'
import germanyLogo from '../../assets/image/germany.webp'
import chinaLogo from '../../assets/image/china.webp'
import russiaLogo from '../../assets/image/russia.webp'
import japanLogo from '../../assets/image/japan.webp'
import australiaLogo from '../../assets/image/australia.webp'
import unitedKingdomLogo from '../../assets/image/unitedKingdom.webp'
import homeImage from '../../assets/image/house.webp'
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";

export default function NavBar({darkMode, setDarkMode}) {
  let chipStyle = {
    backgroundColor: '#171717',
    color: '#ffffff',
    margin: 0.5,
    cursor: 'pointer',
    transition: 'all 0.3s linear'
  }
  
  //? for theme change
    const changeTheme = () => {
        setDarkMode(!darkMode);
        console.log(darkMode);
    }
  return (
    <div className="navbar-container" style={{backgroundColor: darkMode && '#171717', color: darkMode && '#ffffff'}}>
        <div className="main-logo">
            <h3>World Affairs</h3>
           
            <button className="darkModeBtn" onClick={changeTheme}>
                <span className="material-symbols-outlined">
                    nightlight
                </span>
            </button>
        </div>
        <div className="navBar-links">
            <Link className="nav-link-item" to="/home" ><p style={{backgroundColor: darkMode && '#262626', color: darkMode && '#ffffff'}}><img src={homeImage} alt="home logo" />Home</p></Link>
            <Link className="nav-link-item" to="/" >
                <p style={{backgroundColor: darkMode && '#262626', color: darkMode && '#ffffff'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                    Top Headlines
                </p>
            </Link>
            <Link className="nav-link-item" to="/in" ><p style={{backgroundColor: darkMode && '#262626', color: darkMode && '#ffffff'}}><img src={indiaLogo} alt="india logo" />India</p></Link>
            <Link className="nav-link-item" to="/world" ><p style={{backgroundColor: darkMode && '#262626', color: darkMode && '#ffffff'}}><img src={worldLogo} alt="world logo" />World</p></Link>
            <div className="navBar-chip-countries">
                <span>Filter by countries</span>
                <Divider sx={{backgroundColor: '#ffffff'}}/>
                <div className="navBar-chips">
                    <Link to="/us"><Chip sx={chipStyle} className="chip" label="USA" avatar={<Avatar alt="usaLogo" src={usaLogo} />} /></Link>
                    <Link to="/germany"><Chip sx={chipStyle} className="chip" label="Germany" avatar={<Avatar alt="germanyLogo" src={germanyLogo} />} /></Link>
                    <Link to="/china"><Chip sx={chipStyle} className="chip" label="China" avatar={<Avatar alt="chinaLogo" src={chinaLogo} />} /></Link>
                    <Link to="/russia"><Chip sx={chipStyle} className="chip" label="Russia" avatar={<Avatar alt="russiaLogo" src={russiaLogo} />} /></Link>
                    <Link to="/japan"><Chip sx={chipStyle} className="chip" label="Japan" avatar={<Avatar alt="japanLogo" src={japanLogo} />} /></Link>
                    <Link to="/australia"><Chip sx={chipStyle} className="chip" label="Australia" avatar={<Avatar alt="australiaLogo" src={australiaLogo} />} /></Link>
                    <Link to="/uk"><Chip sx={chipStyle} className="chip" label="United Kingdom" avatar={<Avatar alt="unitedKingdomLogo" src={unitedKingdomLogo} />} /></Link>
                </div>
            </div>
        </div>
        <div className="navBar-social">
            <p>Developed by <a href="http://">Partha</a></p>
        </div>
    </div>
  )
}
