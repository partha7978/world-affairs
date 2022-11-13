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
                        <Route path="/" element={<News key="in" country="in" category="general" />} />
                        <Route path="/home" element={<News key="in" country="in" category="general" />} />
                        <Route path="/in" element={<News key="in" country="in" category="general" />} />
                        <Route path="/us" element={<News key="us" country="us" category="general" />} />
                        <Route path="/germany" element={<News key="germany" country="de" category="general" />} />
                        <Route path="/china" element={<News key="china" country="cn" category="general" />} />
                        <Route path="/russia" element={<News key="russia" country="ru" category="general" />} />
                        <Route path="/japan" element={<News key="japan" country="jp" category="general" />} />
                        <Route path="/australia" element={<News key="australia" country="au" category="general" />} />
                        <Route path="/uk" element={<News key="uk" country="gb" category="general" />} />
                    </Routes>
                </div>
            </div>
       
    );
}

export default App;
