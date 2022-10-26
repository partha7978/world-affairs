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
    return (
        <div>
            <Fade>
                <div className="each-slide">
                    <div className="news-img">
                        <img alt="img" src={images[0]} />
                    </div>
                    <div className="news-text">
                        <h1>News 1</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, quae.
                        </p>

                    </div>
                </div>
               <div className="each-slide">
                    <div>
                        <img alt="img" src={images[1]} />
                    </div>
                    <div className="news-text">
                        <h1>News 1</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, quae.
                        </p>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img alt="img" src={images[2]} />
                    </div>
                    <div className="news-text">
                        <h1>News 1</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, quae.
                        </p>
                        
                    </div>
                </div>
            </Fade>
        </div>
    );
}
