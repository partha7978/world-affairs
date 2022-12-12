import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Carousel.css";

export default function Carousel(props) {
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
                {props.articles
                    .filter((article) => article.urlToImage !== null)
                    .map((element) => {
                        return (
                            <div className="each-slide" key={element.url}>
                                <div className="news-img">
                                    <img alt="img" src={element.urlToImage}/>
                                </div>
                                <div className="news-text">
                                    <div className="news-header-text">
                                        <p>
                                        Top Headlines -{" "}
                                        {props.country === "in"
                                            ? "India"
                                            : props.country === "us"
                                            ? "United States"
                                            : props.country === "de"
                                            ? "Germany"
                                            : props.country === "cn"
                                            ? "China"
                                            : props.country === "ru"
                                            ? "Russia"
                                            : props.country === "jp"
                                            ? "Japan"
                                            : props.country === "au"
                                            ? "Australia"
                                            : props.country === "gb"
                                            ? "United Kingdom"
                                            : " "
                                        }
                                        </p>
                                    </div>
                                    <div className="news-text-inner">
                                        <h4 className="news-title">
                                            {element.title.split('-')[0]}
                                        </h4>
                                        <div className="btn-read">
                                            <a href={element.url} target="_blank" rel="noreferrer"><button>Read More</button></a>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        );
                    })}
            </Fade>
        </div>
    );
}
