import React from 'react'
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import indiaLogo from '../../assets/image/india.webp'
import worldLogo from '../../assets/image/world.webp'
import homeImage from '../../assets/image/house.webp'
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import './Hamburger.css'
import usaLogo from '../../assets/image/usa.webp'
import germanyLogo from '../../assets/image/germany.webp'
import chinaLogo from '../../assets/image/china.webp'
import russiaLogo from '../../assets/image/russia.webp'
import japanLogo from '../../assets/image/japan.webp'
import australiaLogo from '../../assets/image/australia.webp'
import unitedKingdomLogo from '../../assets/image/unitedKingdom.webp'
import { Link } from "react-router-dom";

export default function Hamburger() {
  let chipStyle = {
    margin: 0.5,
    cursor: 'pointer',
    transition: 'all 0.3s linear'
  }
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      className='hamburger-menu'
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    //   display="flex"
    //   justifyContent="center"
    //   alignItems="center"
    //   flexDirection="column"
    >
      <List className="hamBurger-list">
        <Link to="/home" ><p><img src={homeImage} alt="home logo" />Home</p></Link>
        <Link to="/" ><p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
          Top Headlines
        </p></Link>
        <Link to="/in" ><p><img src={indiaLogo} alt="india logo" />India</p></Link>
        <Link to="/world" ><p><img src={worldLogo} alt="world logo" />World</p></Link>
      </List>
      <List>
        <div className="hamburger-chip-countries">
          <span>Filter by countries</span>
          <Divider sx={{ backgroundColor: '#ffffff' }} />
          <div className="hamburger-chips">
            <Link to="/us"><Chip sx={chipStyle} className="chip" label="USA" avatar={<Avatar alt="usaLogo" src={usaLogo} />} /></Link>
            <Link to="/germany"><Chip sx={chipStyle} className="chip" label="Germany" avatar={<Avatar alt="germanyLogo" src={germanyLogo} />} /></Link>
            <Link to="/china"><Chip sx={chipStyle} className="chip" label="China" avatar={<Avatar alt="chinaLogo" src={chinaLogo} />} /></Link>
            <Link to="/russia"><Chip sx={chipStyle} className="chip" label="Russia" avatar={<Avatar alt="russiaLogo" src={russiaLogo} />} /></Link>
            <Link to="/japan"><Chip sx={chipStyle} className="chip" label="Japan" avatar={<Avatar alt="japanLogo" src={japanLogo} />} /></Link>
            <Link to="/australia"><Chip sx={chipStyle} className="chip" label="Australia" avatar={<Avatar alt="australiaLogo" src={australiaLogo} />} /></Link>
            <Link to="/uk"><Chip sx={chipStyle} className="chip" label="United Kingdom" avatar={<Avatar alt="unitedKingdomLogo" src={unitedKingdomLogo} />} /></Link>
          </div>
        </div>
      </List>
      <List sx={{ paddingBottom: 0 }}>
        <div className="hamburger-social">
          <p>Developed by <a href="http://">Partha</a></p>
        </div>
      </List>
    </Box>
  );


  return (
    <div>
      <svg onClick={toggleDrawer('bottom', true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>


      <React.Fragment key={'bottom'}>
        <SwipeableDrawer
          anchor={'bottom'}
          open={state['bottom']}
          onClose={toggleDrawer('bottom', false)}
          onOpen={toggleDrawer('bottom', true)}
        >
          {list('bottom')}
        </SwipeableDrawer>
      </React.Fragment>



    </div>
  )
}
