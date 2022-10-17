import React, { Component } from 'react'
import Hamburger from '../Hamburger/Hamburger'
import NewsCard from '../NewsCard/NewsCard'
import './News.css'

export class News extends Component {
  constructor() {
    super();
    console.log("Constructor from News Component");
    //todo: State for the fetched news
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async componentDidMount() {
    let url =  "https://newsapi.org/v2/top-headlines?country=in&apiKey=64cbaea366774d079c4d4318a36066a7&page=1&pagesoze=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles, totalArticles: parsedData.totalResults});
  }
  render() {
    return (
      <div className="news-container">
          <div className="news-navBar">
            <div className="main-logo">
                <h3>World Affairs</h3>
            </div>
            <div className="hamburger">
              <Hamburger />
            </div>
          </div>
          <div className="news-main-container">
            <div className="news-section">
              <h2>Top Headlines - India</h2>
              <div className="news-cards">
                {this.state.articles.map((element) => {
                  return <NewsCard title={element.title} description={element.description} source={element.source.name} url={element.url} imageUrl={element.urlToImage}/>
                })}
              </div>
            </div>
          </div>
      </div>
    )
  }
  
}
export default News;