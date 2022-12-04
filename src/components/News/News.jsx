import React, { Component } from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./News.css";
import Snackbar from "@mui/material/Snackbar";
import Fade from "@mui/material/Fade";
import Carousel from "../Carousel/Carousel";
import Loding from "../Loding/Loding";
import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        country: "in",
        category: "general",
    };
    static propTypes = {
        country: PropTypes.string,
    };
    constructor() {
        super();
        console.log("Constructor from News Component");
        //todo: State for the fetched news
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalArticles: 0,
            //todo: State for snackBar
            open: false,
            Transition: Fade,
            alertMsg: "",
            //* for scroll to top
            scroll: false,
        };

        console.log("construyctor total articles", this.state.totalArticles);
    }
    // todo: for showing alert msg
    showAlert = (msg) => {
        this.setState({
            open: true,
            alertMsg: msg,
        });
        setTimeout(() => {
            this.setState({ open: false });
        }, 1500);
    };

    getNews = async () => {
        this.props.setLoadingBar(10);
        this.props.setLoadingBar(20);
        this.setState({ loading: true });
        this.handleScrollOnClick();
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=20`;
        this.props.setLoadingBar(30);
        let data = await fetch(url);
        this.props.setLoadingBar(40);
        let parsedData = await data.json();
        this.props.setLoadingBar(60);
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalArticles: parsedData.totalResults,
            loading: false,
        });
        this.props.setLoadingBar(80);
        this.props.setLoadingBar(100);
    };

    async componentDidMount() {
        this.getNews();
        console.log(this.state.articles);
    }
    // todo: for handling previous and next page operations
    handlePreviousPage = async () => {
        if (this.state.page - 1 <= 0) {
            this.showAlert("You are on the first page");
        } else {
            console.log("Previous btn clicked");
            //updating state immidietly with callbacks
            this.setState({ page: this.state.page - 1 }, () => {
                this.getNews();
            });
        }
    };
    handleNextPage = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalArticles / 20)) {
            this.showAlert("No more pages to show");
        } else {
            //todo: here i've tried to change the state 1st then call the funciton get news. But the problem is the state doesnt change immidietly. So as a
            //todo: result, when i clicked next button it doesnt work and when clicking prev btn - it shows me the 2nd page result.
            //todo: Thats why I have used callbacks to update the state 1st then perform the action as given.
            //todo: https://linguinecode.com/post/why-react-setstate-usestate-does-not-update-immediately -- reference for updating state immediately.
            console.log("Next btn clicked");
            this.setState({ page: this.state.page + 1 }, () => {
                this.getNews();
            });
        }
    };

    //* for handling scroll oprations
    componentDidUpdate() {
        document
            .getElementById("news-section")
            .addEventListener("scroll", this.handleScrollTopOnScroll);
    }
    // * for hiding and showing scroll to top button
    handleScrollTopOnScroll = () => {
        if (document.getElementById("news-section").scrollTop > 20) {
            this.setState({ scroll: true });
        } else {
            this.setState({ scroll: false });
        }
    };
    //* for handling scroll to top on clicking btn
    handleScrollOnClick = () => {
        document
            .getElementById("news-section")
            .scrollTo({ top: 0, behavior: "smooth" });
    };

    //* for fetch more data in infinite scroll
    // fetchMoreData = () => {
    //     this.setState({ page: this.state.page + 1 }, async () => {
    //         console.log("articles length", this.state.articles.length);
    //         console.log("TOTAL articles length", this.state.totalArticles.length);
    //         this.setState({ loading: true });
    //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=64cbaea366774d079c4d4318a36066a7&page=${this.state.page}&pageSize=20`;
    //         let data = await fetch(url);
    //         let parsedData = await data.json();
    //         console.log(parsedData);
    //         console.log("page is ", this.state.page);
    //         this.setState({
    //             articles: this.state.articles.concat(parsedData.articles),
    //             loading: false,
    //         });
    //         console.log("articles length", this.state.articles.length);
    //     });
       
    // }

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

                <div className="news-container">
                    <div className="news-main-container">
                        <div className="news-section" id="news-section">
                            {this.state.loading && <Loding />}
                            {/* for carousel section */}
                            <Carousel {...this.state} />
                            {/* for main news cards */}
                            {!this.state.loading && 
                                <h2>
                                Top Headlines -{" "}
                                    {this.props.country === "in"
                                        ? "India"
                                        : this.props.country === "us"
                                        ? "United States"
                                        : this.props.country === "de"
                                        ? "Germany"
                                        : this.props.country === "cn"
                                        ? "China"
                                        : this.props.country === "ru"
                                        ? "Russia"
                                        : this.props.country === "jp"
                                        ? "Japan"
                                        : this.props.country === "au"
                                        ? "Australia"
                                        : this.props.country === "gb"
                                        ? "United Kingdom"
                                        : " "
                                    }
                                </h2>
                            }
                           

                            {/* <InfiniteScroll
                                dataLength={this.state.articles.length}
                                next={this.fetchMoreData}
                                hasMore={this.state.articles.length !== this.state.totalArticles}
                                loader={<Loding />}
                            > */}
                                <div className="news-cards">
                                    {this.state.articles.map((element) => {
                                        return (
                                            <NewsCard
                                                key={element.url}
                                                title={
                                                    element.title.split("-")[0]
                                                }
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
                            {/* </InfiniteScroll> */}
                            {/* Scroll to top button */}
                            {this.state.scroll && (
                                <div className="scroll-to-top">
                                    <button onClick={this.handleScrollOnClick}>
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
                                                d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            )}
                            {!this.state.loading && 
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
                                <button className="page-show-btn">
                                    {this.state.page}
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
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default News;
