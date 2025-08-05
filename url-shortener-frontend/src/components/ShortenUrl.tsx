// src/components/BuildConnections.jsx
import React, { useState, useRef } from "react";

const ShortenUrl = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const shortUrlRef = useRef(null);

  const handleShorten = async () => {
    if (!longUrl.trim()) {
      setError("Please enter a valid URL.");
      return;
    }

    setLoading(true);
    setError("");
    setShortUrl("");

    try {
      const response = await fetch("http://localhost:8000/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ longUrl }),
      });

      const data = await response.json();
      console.log("Response from backend:", data); // Helpful for debugging

      if (response.ok && data.shortUrl) {
        setShortUrl(data.shortUrl);
      } else {
        setError(data.message || "Failed to shorten the URL.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#001f3f] py-16 px-4 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Build stronger digital connections</h2>
        <p className="text-lg text-gray-300 mb-8">
          Use our URL shortener, QR Codes, and landing pages to engage your audience and connect them to the right information. Build, edit, and track everything inside the Bitly Connections Platform.
        </p>

        <div className="flex justify-center gap-4 mb-6">
          <button className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition">
            🔗 Short link
          </button>
          <button className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition">
            📱 QR Code
          </button>
        </div>

        {/* Shorten URL Box */}
        <div className="bg-white rounded-2xl p-8 text-left text-black shadow-xl max-w-2xl mx-auto">
          <label htmlFor="longUrlInput" className="block text-lg font-medium mb-2">
            Paste your long link
          </label>
          <input
            id="longUrlInput"
            type="text"
            placeholder="https://example.com/my-long-url"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            className="w-full border rounded px-4 py-3 mb-4 text-sm"
          />

          <button
            onClick={handleShorten}
            disabled={loading}
            className="bg-blue-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            {loading ? "Shortening..." : "Shorten your link"}
          </button>

          {/* Output area */}
          {shortUrl && (
            <div className="mt-4">
              <label className="text-green-700 font-medium block mb-1">Short URL:</label>
              <input
                ref={shortUrlRef}
                type="text"
                value={shortUrl}
                readOnly
                className="w-full border border-green-400 rounded px-4 py-2 text-green-700 font-semibold"
              />
              <button
                className="mt-2 text-sm text-blue-600 hover:underline"
                onClick={() => {
                  navigator.clipboard.writeText(shortUrl);
                }}
              >
                Copy to clipboard
              </button>
            </div>
          )}

          {error && <p className="mt-4 text-red-600">{error}</p>}
        </div>
      </div>
    </section>
  );
};

export default ShortenUrl;
