import React, { useState } from "react";

const RedirectUrl = () => {
  const [shortId, setShortId] = useState("");
  const [analytics, setAnalytics] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFetchRedirect = async () => {
    if (!shortId.trim()) {
      setError("Please enter a valid short URL or ID.");
      return;
    }

    setLoading(true);
    setError("");
    setAnalytics(null);

    try {
      const response = await fetch(`https://url-shortener-system-sb03.onrender.com/analytics/${shortId}`);
      const data = await response.json();
      console.log("Analytics Response:", data);

      if (response.ok && data.longUrl) {
        setAnalytics(data);
      } else {
        setError(data.message || "Failed to retrieve the redirect URL.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#003366] py-16 px-4 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Retrieve Original URL</h2>
        <p className="text-lg text-gray-300 mb-8">
          Enter your shortened link (or ID) to retrieve the full redirect destination and its analytics.
        </p>

        <div className="bg-white rounded-2xl p-8 text-left text-black shadow-xl">
          <label htmlFor="shortIdInput" className="block text-lg font-medium mb-2">
            Enter your short URL or ID
          </label>
          <input
            id="shortIdInput"
            type="text"
            placeholder="xi629X or https://short.ly/xi629X"
            value={shortId}
            onChange={(e) => {
              const input = e.target.value.trim();
              const match = input.match(/\/([^\/]+)$/);
              setShortId(match ? match[1] : input);
            }}
            className="w-full border rounded px-4 py-3 mb-4 text-sm"
          />

          <button
            onClick={handleFetchRedirect}
            disabled={loading}
            className="bg-blue-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            {loading ? "Looking up..." : "Get Redirect URL"}
          </button>

          {/* Output */}
          {analytics && (
            <div className="mt-6">
              <p className="text-green-700 font-medium mb-1">Original URL:</p>
              <a
                href={analytics.longUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline break-words"
              >
                {analytics.longUrl}
              </a>

              <div className="mt-6 space-y-2 text-sm text-gray-700">
                <p><strong>Total Clicks:</strong> {analytics.clicks}</p>
                <p><strong>Created At:</strong> {new Date(analytics.createdAt).toLocaleString()}</p>
                <p>
                  <strong>Expires At:</strong>{" "}
                  {analytics.expiresAt ? new Date(analytics.expiresAt).toLocaleString() : "No expiration"}
                </p>
              </div>

              <div className="mt-4">
                <h3 className="font-medium">Visit History:</h3>
                {analytics.visitHistory.length > 0 ? (
                  <ul className="list-disc pl-5 text-sm text-gray-600">
                    {analytics.visitHistory.map((visit) => (
                      <li key={visit._id}>
                        {new Date(visit.timestamp).toLocaleString()}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-500">No visits yet.</p>
                )}
              </div>
            </div>
          )}

          {error && <p className="mt-4 text-red-600">{error}</p>}
        </div>
      </div>
    </section>
  );
};

export default RedirectUrl;
