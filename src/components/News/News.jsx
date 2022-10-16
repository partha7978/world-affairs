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
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
              </div>
            </div>
          </div>
      </div>
    )
  }
  
}
export default News;