import React, { useState } from "react";
import UrlShortenerForm from "../components/UrlShortenerForm";
import UrlList from "../components/UrlList";

const UrlShortenerPage = () => {
  const [urls, setUrls] = useState([]);

  const handleShorten = ({ longUrl, validity, shortcode }) => {
    if (urls.length >= 5) {
      alert("You can only shorten up to 5 URLs at a time");
      return;
    }

    // Fake shortener logic
    const shortUrl = `https://sho.rt/${shortcode || Math.random().toString(36).substring(7)}`;

    setUrls([...urls, { longUrl, shortUrl, expiry: validity }]);
  };

  return (
    <div>
      <h2>URL Shortener</h2>
      <UrlShortenerForm onSubmit={handleShorten} />
      <UrlList urls={urls} />
    </div>
  );
};

export default UrlShortenerPage;
