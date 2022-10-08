import React from 'react'
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
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
