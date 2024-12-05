"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [likes, setLikes] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchLikes();
  }, []);

  const fetchLikes = async () => {
    try {
      const response = await fetch("/api/like");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setLikes(data.likes || 0);
    } catch (error) {
      console.error("Error fetching likes:", error);
      setLikes(0);
    }
  };

  const handleLike = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/like", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setLikes(data.likes);
    } catch (error) {
      console.error("Error updating likes:", error);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black gap-8">
      <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
        MAKE US GREAT AGAIN.
      </h1>
      {/* <div className="flex items-center gap-4">
        <button
          onClick={handleLike}
          disabled={isLoading}
          className="bg-white text-black px-3 py-1 rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50"
        >
          Like👍
        </button>
        <span className="text-white text-2xl">{likes}</span>
      </div> */}
    </div>
  );
}
