import "./App.css";
import News from "./components/News/News";
import NavBar from "./components/NavBar/NavBar";
import Hamburger from "./components/Hamburger/Hamburger";
import React, { useState } from 'react'
import {
    Routes,
    Route,
  } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {
    // state for top loading bar
    const [loadingBar, setLoadingBar] = useState(0);
    
    // state for dark mode
    const [darkMode, setDarkMode] = useState(false);

    //todo: Below  Im accing the api key by creating environment variable in .env.local file( which is alreadyignored  by the .gitignore file. ). Search more about it.
    //? Created .env.local file in the root directory and  adding my api key in it. then access it by using process.env.REACT_APP_NEWS_API
    const apiKey = process.env.REACT_APP_NEWS_API;
    return (
            <div className="App">
                <div className="main-container">
                    <LoadingBar
                        color='rgb(165, 180, 252)'
                        progress={loadingBar}
                        height={3}
                    />
                    <div className="news-navBar" id = {`${darkMode && 'dark-background'}`}>
                        <div className="main-logo">
                            <h3>World Affairs</h3>
                        </div>
                        <div className="hamburger" id = {`${darkMode && 'dark-text'}`}>
                            <Hamburger darkMode = {darkMode} />
                        </div>
                    </div>
                    <NavBar darkMode = {darkMode} setDarkMode = {setDarkMode}/>
                    <Routes>
                        <Route path="/" element={<News darkMode = {darkMode} setLoadingBar = {setLoadingBar} apiKey = {apiKey} key="in" country="in" category="general" pageSize="20" />} />
                        <Route path="/home" element={<News darkMode = {darkMode} setLoadingBar = {setLoadingBar} apiKey = {apiKey} key="in" country="in" category="general" pageSize="20" />} />
                        <Route path="/in" element={<News darkMode = {darkMode} setLoadingBar = {setLoadingBar} apiKey = {apiKey} key="in" country="in" category="general" pageSize="20" />} />
                        <Route path="/us" element={<News darkMode = {darkMode} setLoadingBar = {setLoadingBar} apiKey = {apiKey} key="us" country="us" category="general" pageSize="20" />} />
                        <Route path="/germany" element={<News darkMode = {darkMode} setLoadingBar = {setLoadingBar} apiKey = {apiKey} key="germany" country="de" category="general" pageSize="20" />} />
                        <Route path="/china" element={<News darkMode = {darkMode} setLoadingBar = {setLoadingBar} apiKey = {apiKey} key="china" country="cn" category="general" pageSize="20" />} />
                        <Route path="/russia" element={<News darkMode = {darkMode} setLoadingBar = {setLoadingBar} apiKey = {apiKey} key="russia" country="ru" category="general" pageSize="20" />} />
                        <Route path="/japan" element={<News darkMode = {darkMode} setLoadingBar = {setLoadingBar} apiKey = {apiKey} key="japan" country="jp" category="general" pageSize="20" />} />
                        <Route path="/australia" element={<News darkMode = {darkMode} setLoadingBar = {setLoadingBar} apiKey = {apiKey} key="australia" country="au" category="general" pageSize="20" />} />
                        <Route path="/uk" element={<News darkMode = {darkMode} setLoadingBar = {setLoadingBar} apiKey = {apiKey} key="uk" country="gb" category="general" pageSize="20" />} />
                    </Routes>
                </div>
            </div>
       
    );
}

export default App;
