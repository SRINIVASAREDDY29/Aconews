// src/pages/SearchResults.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const SearchResults = () => {
  const { query } = useParams();  // Get the search query from the URL params
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(
          `https://gnews.io/api/v4/search?q=${query}&token=YOUR_API_KEY&lang=en`
        );
        const data = await response.json();
        setResults(data.articles);  // Set the news articles from the response
      } catch (error) {
        console.error('Error fetching the search results:', error);
      }
    };
    
    fetchSearchResults();
  }, [query]);

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
      <div className="news-grid">
        {results.map((article) => (
          <NewsCard key={article.url} article={article} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
