import React, { useState, useEffect } from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./News.css";
import Snackbar from "@mui/material/Snackbar";
import Fade from "@mui/material/Fade";
import Carousel from "../Carousel/Carousel";
import Loding from "../Loding/Loding";
import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
     //todo: State for the fetched news
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalArticles, setTotalArticles] = useState(0);
      //todo: State for snackBar
    const [open, setOpen] = useState(false);
    const [transition, setTransition] = useState(Fade);
    const [alertMsg, setAlertMsg] = useState("");
     //* for scroll to top
    const [scroll, setScroll] = useState(false);
    const [newsCategory, setNewsCategory] = useState("general");


    // todo: for showing alert msg
    const showAlert = (msg) => {
        setOpen(true);
        setAlertMsg(msg);
        setTimeout(() => {
            setOpen(false);
        }, 1500);
    };

    const getNews = async () => {
        props.setLoadingBar(10);
        props.setLoadingBar(20);
        setLoading(true);
        handleScrollOnClick();
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${newsCategory}&apiKey=${props.apiKey}&page=${page}&pageSize=20`;
        props.setLoadingBar(30);
        let data = await fetch(url);
        props.setLoadingBar(40);
        let parsedData = await data.json();
        props.setLoadingBar(60);
        console.log(parsedData);
        setArticles(parsedData.articles);
        setTotalArticles(parsedData.totalResults);
        setLoading(false);
        props.setLoadingBar(80);
        props.setLoadingBar(100);
    }

    useEffect(() => {
        getNews();
    }, [page])
    
    // todo: for handling previous and next page operations
    const HandlePreviousPage = async () => {
        if (page - 1 <= 0) {
            showAlert("You are on the first page");
        } else {
            console.log("Previous btn clicked");
            //updating state immidietly with callbacks
            setPage(page - 1)
        }
    };
    const HandleNextPage = async () => {
        if (page + 1 > Math.ceil(totalArticles / 20)) {
            showAlert("No more pages to show");
        } else {
            //! FOR CLASS BASED COMPONENTS
            //todo: here i've tried to change the state 1st then call the funciton get news. But the problem is the state doesnt change immidietly. So as a
            //todo: result, when i clicked next button it doesnt work and when clicking prev btn - it shows me the 2nd page result.
            //todo: Thats why I have used callbacks to update the state 1st then perform the action as given.
            //todo: https://linguinecode.com/post/why-react-setstate-usestate-does-not-update-immediately -- reference for updating state immediately.
            //todo: EXAMPLE:  this.setState({ page: this.state.page + 1 }, () => { OPERATION TO BE PERFORMED AFTER STATE CHANGE })
            //! FOR FUNCTION BASED COMPONENTS
            //todo: as we know that in functional components we dont have setState() method. So we have to use useState() hook to update the state.
            //todo: and as the state doesnt change instantly, in CLASS BASED COMPONENTS I have used callbacks to update the state 1st then perform the action.
            //todo: but here as I used useEffect to update and rerender the component, and useEffect doesnt support for callbacks, so I
            //todo: updated the state in the condition and then called the useEffect() hook to perform the action and pass the [Page ] as a parameter
            //todo: so that everytime the page changes the useEffect() hook will trigger and rerender the component.
            console.log("Next btn clicked");
            setPage(page + 1)
        }
    };

    // useEffect(() => {
    //     getNews();
    //? here I have used useEffect only once and add page as a dependency so that everytime the page changes the useEffect() hook will trigger and rerender the component.
    // }, [page])
    
    //* for handling scroll oprations
    // componentDidUpdate() {
    //     document
    //         .getElementById("news-section")
    //         .addEventListener("scroll", this.handleScrollTopOnScroll);
    // }
    useEffect(() => {
        document
            .getElementById("news-section")
            .addEventListener("scroll", handleScrollTopOnScroll);
    }, [])

    // * for hiding and showing scroll to top button
    const handleScrollTopOnScroll = () => {
        if (document.getElementById("news-section").scrollTop > 20) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };
    //* for handling scroll to top on clicking btn
    const handleScrollOnClick = () => {
        document
            .getElementById("news-section")
            .scrollTo({ top: 0, behavior: "smooth" });
    };
    //* for fetching category news
    const fetchNewsCategory = async (category) => {
        setNewsCategory(category);
        console.log("category", category);
        getNews();
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

        return (
            <div className="container-parent">
                <Snackbar
                    open={open}
                    autoHideDuration={6000} // for how long the snackbar will be visible
                    TransitionComponent={transition}
                    message={alertMsg}
                    key={transition.name}
                />

                <div className="news-container">
                    <div className="news-main-container">
                        <div className="news-section" id="news-section">
                            {loading && <Loding />}
                            {/* for carousel section */}
                            <Carousel articles = {articles} loading = { loading } page = { page } totalArticles = { totalArticles } alertMsg = { alertMsg } country={props.country}/>
                            {/* for main news cards */}
                            {!loading && 
                                <div className="filter-category">
                                    <p>Filter by category</p>
                                    <div className="filter-category-btns">
                                    {/* in button functions if Im not using arrow function its giving me the error as 
                                    Too many re-renders. React limits the number of renders to prevent an infinite loop.
                                    Hence the solution is to give arrow function
                                    https://stackoverflow.com/questions/55265604/uncaught-invariant-violation-too-many-re-renders-react-limits-the-number-of-re
                                    */}
                                        <button onClick={() => fetchNewsCategory('general')}>General</button>
                                        <button onClick={() => fetchNewsCategory('entertainment')}>Entertainment</button>
                                        <button onClick={() => fetchNewsCategory('health')}>Health</button>
                                        <button onClick={() => fetchNewsCategory('science')}>Science</button>
                                        <button onClick={() => fetchNewsCategory('sports')}>Sports</button>
                                        <button onClick={() => fetchNewsCategory('technology')}>Technology</button>
                                        <button onClick={() => fetchNewsCategory('business')}>Business</button>
                                    </div>
                                </div>
                            }
                           

                            {/* <InfiniteScroll
                                dataLength={this.state.articles.length}
                                next={this.fetchMoreData}
                                hasMore={this.state.articles.length !== this.state.totalArticles}
                                loader={<Loding />}
                            > */}
                                <div className="news-cards">
                                    {articles.map((element) => {
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
                            {scroll && (
                                <div className="scroll-to-top">
                                    <button onClick={handleScrollOnClick}>
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
                            {!loading && 
                                <div className="news-pagination">
                                <p
                                    className="news-pagination-btn"
                                    onClick={HandlePreviousPage}
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
                                </p>
                                <p className="page-show-btn">
                                    {page}
                                </p>
                                <p
                                    className="news-pagination-btn"
                                    onClick={HandleNextPage}
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
                                </p>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
}

News.defaultProps = {
    country: "in",
    category: "general",
};
News.propTypes = {
    country: PropTypes.string,
};
