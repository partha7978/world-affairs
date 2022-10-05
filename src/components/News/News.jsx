import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import './News.css'

export default function News() {
  return (
    <div className="news-container">
        <div className="news-navBar">
          NAVBAR
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
