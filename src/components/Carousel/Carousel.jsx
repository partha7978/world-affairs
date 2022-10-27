import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Carousel.css";

export default function Carousel() {
    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];
    const nav_btn_arrow_styles = {
        prevArrow: (
            <button className="arrow-btn">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                </svg>
            </button>
        ),
        nextArrow: (
            <button className="arrow-btn">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                </svg>
            </button>
        ),
    };
    return (
        <div>
            <Fade {...nav_btn_arrow_styles}>
                <div className="each-slide">
                    <div className="news-img">
                        <img alt="img" src={images[0]} />
                    </div>
                    <div className="news-text">
                        <h4 className="news-title">"T20 World Cup, India vs Netherlands, Super 12, Group 2 Live Updates: Virat Kohli, Rohit Sharma and Suryakumar Yadav guided India to 179/2 in 20 overs against Netherlands in Group 2 Super 12 match of … [+622 chars]"</h4>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="news-img">
                        <img alt="img" src={images[0]} />
                    </div>
                    <div className="news-text">
                        <h4 className="news-title">"T20 World Cup, India vs Netherlands, Super 12, Group 2 Live Updates: Virat Kohli, Rohit Sharma and Suryakumar Yadav guided India to 179/2 in 20 overs against Netherlands in Group 2 Super 12 match of … [+622 chars]"</h4>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="news-img">
                        <img alt="img" src={images[0]} />
                    </div>
                    <div className="news-text">
                        <h4 className="news-title">"T20 World Cup, India vs Netherlands, Super 12, Group 2 Live Updates: Virat Kohli, Rohit Sharma and Suryakumar Yadav guided India to 179/2 in 20 overs against Netherlands in Group 2 Super 12 match of … [+622 chars]"</h4>
                    </div>
                </div>

            </Fade>
        </div>
    );
}
