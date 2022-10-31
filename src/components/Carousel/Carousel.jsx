import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Carousel.css";

export default function Carousel({ articles }) {
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
                {articles
                    .filter((article) => article.urlToImage !== null)
                    .map((element) => {
                        return (
                            <div className="each-slide" key={element.url}>
                                <div className="news-img">
                                    <img alt="img" src={element.urlToImage}/>
                                </div>
                                <div className="news-text">
                                    <h4 className="news-title">
                                        {element.title.split('-')[0]}
                                    </h4>
                                    <div className="btn-read">
                                        <a href={element.url} target="_blank" rel="noreferrer"><button>Read More</button></a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </Fade>
        </div>
    );
}
