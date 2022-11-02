import React, { Component } from "react";
import Hamburger from "../Hamburger/Hamburger";
import NavBar from "../NavBar/NavBar";
import NewsCard from "../NewsCard/NewsCard";
import "./News.css";
import Snackbar from "@mui/material/Snackbar";
import Fade from "@mui/material/Fade";
import Carousel from "../Carousel/Carousel";



export class News extends Component {

    constructor() {
        super();
        console.log("Constructor from News Component");
        //todo: State for the fetched news
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            //todo: State for snackBar
            open: false,
            Transition: Fade,
            alertMsg: ""
        };
    }
    // todo: for showing alert msg
    showAlert = (msg) => {
        this.setState({
            open: true,
            alertMsg: msg,
        });
        setTimeout(() => {
            this.setState({ open: false });
        }, 1500)
    }

    async componentDidMount() {
        let url =
            "https://newsapi.org/v2/top-headlines?country=in&apiKey=64cbaea366774d079c4d4318a36066a7&page=1&pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalArticles: parsedData.totalResults,
        });
        console.log(this.state.articles);
    }

    // todo: for handling previous and next page operations
    handlePreviousPage = async () => {
        if (this.state.page - 1 <= 0) {
            this.showAlert("You are on the first page");
        } else {
            console.log("Previous btn clicked");
           
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=64cbaea366774d079c4d4318a36066a7&page=${
                this.state.page - 1
            }&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            document.getElementById('news-section').scrollTo({top: 0, behavior: 'smooth'});
            this.setState({
                articles: parsedData.articles,
                page: this.state.page - 1,
            });
        }
    };
    handleNextPage = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalArticles / 20)) {
            this.showAlert("No more pages to show");
        } else {
            console.log("Next btn clicked");
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=64cbaea366774d079c4d4318a36066a7&page=${
                this.state.page + 1
            }&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            document.getElementById('news-section').scrollTo({top: 0, behavior: 'smooth'});
            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1,
            });
        }
    };
    render() {
        return (
            <div className="container-parent">
                <Snackbar
                    open={this.state.open}
                    autoHideDuration={6000} // for how long the snackbar will be visible
                    TransitionComponent={this.state.Transition}
                    message={this.state.alertMsg}
                    key={this.state.Transition.name}
                />
                <NavBar />
                <div className="news-container">
                    <div className="news-navBar">
                        <div className="main-logo">
                            <h3>World Affairs</h3>
                        </div>
                        <div className="hamburger">
                            <Hamburger/>
                        </div>
                    </div>
                    <div className="news-main-container">
                        <div className="news-section" id="news-section">
                            {/* for carousel section */}
                            <Carousel {...this.state}/>
                            {/* for main news cards */}
                            <h2>Top Headlines - India</h2>
                            <div className="news-cards">
                                {this.state.articles.map((element) => {
                                    return (
                                        <NewsCard
                                            key={element.url}
                                            title={element.title.split("-")[0]}
                                            description={
                                                element.description
                                                    ? element.description
                                                    : "No description found"
                                            }
                                            imageUrl={element.urlToImage}
                                            newsUrl={element.url}
                                            author={element.author}
                                            date={element.publishedAt}
                                            source={element.source.name}
                                            times={element.publishedAt}
                                        />
                                    );
                                })}
                            </div>
                            <div className="news-pagination">
                                <button
                                    className="news-pagination-btn"
                                    onClick={this.handlePreviousPage}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                                        />
                                    </svg>
                                </button>
                                <button
                                    className="news-pagination-btn"
                                    onClick={this.handleNextPage}
                                >
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
                                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default News;
