// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import NewsCard from '../components/NewsCard';

const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://gnews.io/api/v4/top-headlines?token=5b0686a3d70d811c0cd404b010f569f6&lang=en`
        );
        const data = await response.json();
        setNews(data.articles);  // Set the news articles from the response
      } catch (error) {
        console.error('Error fetching the top news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h2>Top News</h2>
      <div className="news-grid">
        {news.map((article) => (
          <NewsCard key={article.url} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Home;
