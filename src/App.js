import "./App.css";
import News from "./components/News/News";
import NavBar from "./components/NavBar/NavBar";
import Hamburger from "./components/Hamburger/Hamburger";
import {
    Routes,
    Route,
  } from "react-router-dom";

function App() {
    return (
     
            <div className="App">
                <div className="main-container">
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
                        <Route path="/" element={<News country="in" category="general" />} />
                        <Route path="/us" element={<News country="us" category="general" />} />
                        <Route path="/de" element={<News country="de" category="general" />} />
                        <Route path="/cn" element={<News country="cn" category="general" />} />
                        <Route path="/ru" element={<News country="ru" category="general" />} />
                        <Route path="/jp" element={<News country="jp" category="general" />} />
                        <Route path="/au" element={<News country="au" category="general" />} />
                        <Route path="/gb" element={<News country="gb" category="general" />} />
                    </Routes>
                </div>
            </div>
       
    );
}

export default App;
