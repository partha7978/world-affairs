import "./App.css";
import News from "./components/News/News";
import NavBar from "./components/NavBar/NavBar";
import Hamburger from "./components/Hamburger/Hamburger";

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
                <News country="in"/>
            </div>
        </div>
    );
}

export default App;
