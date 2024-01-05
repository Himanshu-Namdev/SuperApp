import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsCard = () => {
  const [news, setNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = 'ecca7ec31d9d4ff39308723d2475bbab'; // Replace with your actual API key

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
        console.log('News API response:', response);
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
        setError('Error fetching news. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchNews(); // Initial fetch

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (news.length || 1));
    }, 600000); // Rotate news every minute

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [news.length, apiKey]);

  return (
    <div className="bg-white rounded-lg w-full h-[86%] mt-10 overflow-auto relative">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : news.length > 0 && news[currentIndex]?.urlToImage ? (
        <div key={currentIndex} className="w-full min-h-full relative">
          <img
            src={news[currentIndex].urlToImage}
            alt={news[currentIndex].title}
            className="w-full h-[500px] object-cover relative"
          />
          <h2 className="absolute bottom-[285px] left-0 right-0 bg-black bg-opacity-60 text-white text-[32px] font-roboto font-normal p-4">
            {news[currentIndex].title}
          </h2>
          <div className="w-full p-4">
            <p className="text-gray-700 text-[18px] font-roboto">{news[currentIndex].description}</p>
          </div>
        </div>
      ) : (
        <p>No news available.</p>
      )}
    </div>
  );
};

export default NewsCard;
