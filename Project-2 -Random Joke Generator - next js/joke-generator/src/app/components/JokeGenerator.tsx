"use client";
import { useEffect, useState } from "react";

const JokeGenerator = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  const getJoke = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
      );
      const data = await res.json();
      setJoke(data.joke);
    } catch {
      setJoke("Failed to fetch joke. Try again!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div className="min-h-screen bg-green-950 text-white flex flex-col items-center justify-center gap-12 px-[10%] md:px-[20%] lg:px-[30%] mx-auto text-center">
      <p
        className={`text-lg sm:text-xl md:text-2xl transition-opacity duration-700  ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        {joke}
      </p>
      <button
        onClick={getJoke}
        className="bg-white text-green-950 font-bold text-xl px-6 py-3 rounded hover:bg-green-200 transition"
      >
        {loading ? "Loading..." : "Get a new Joke"}
      </button>
    </div>
  );
};

export default JokeGenerator;
