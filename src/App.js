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
    const [loadingBar, setLoadingBar] = useState(0);
    return (
            <div className="App">
                <div className="main-container">
                    <LoadingBar
                        color='rgb(165, 180, 252)'
                        progress={loadingBar}
                        height={3}
                    />
                    <div className="news-navBar">
                        <div className="main-logo">
                            <h3>World Affairs</h3>
                        </div>
                        <div className="hamburger">
                            <Hamburger />
                        </div>
                    </div>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<News setLoadingBar = {setLoadingBar} key="in" country="in" category="general" pageSize="20" />} />
                        <Route path="/home" element={<News setLoadingBar = {setLoadingBar} key="in" country="in" category="general" pageSize="20" />} />
                        <Route path="/in" element={<News setLoadingBar = {setLoadingBar} key="in" country="in" category="general" pageSize="20" />} />
                        <Route path="/us" element={<News setLoadingBar = {setLoadingBar} key="us" country="us" category="general" pageSize="20" />} />
                        <Route path="/germany" element={<News setLoadingBar = {setLoadingBar} key="germany" country="de" category="general" pageSize="20" />} />
                        <Route path="/china" element={<News setLoadingBar = {setLoadingBar} key="china" country="cn" category="general" pageSize="20" />} />
                        <Route path="/russia" element={<News setLoadingBar = {setLoadingBar} key="russia" country="ru" category="general" pageSize="20" />} />
                        <Route path="/japan" element={<News setLoadingBar = {setLoadingBar} key="japan" country="jp" category="general" pageSize="20" />} />
                        <Route path="/australia" element={<News setLoadingBar = {setLoadingBar} key="australia" country="au" category="general" pageSize="20" />} />
                        <Route path="/uk" element={<News setLoadingBar = {setLoadingBar} key="uk" country="gb" category="general" pageSize="20" />} />
                    </Routes>
                </div>
            </div>
       
    );
}

export default App;
