import React from 'react'
import Hamburger from '../Hamburger/Hamburger'
import NewsCard from '../NewsCard/NewsCard'
import './News.css'

export default function News() {
  return (
    <div className="news-container">
        <div className="news-navBar">
          <div className="main-logo">
              <h3>World Affairs</h3>
          </div>
          <p class="hamburger">
            <Hamburger />
          </p>
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
