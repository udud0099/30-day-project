"use client";
import React, { useState } from "react";

const StarRating = () => {
  const arr: number[] = [0, 0, 0, 0, 0];
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  console.log(arr, rating);
  return (
    <>
      <div>
        {arr.map((curValue: number, index: number) => {
          return (
            <span
              key={index}
              className={`cursor-pointer 
                ${
                  (hoverRating == 0 && rating > index) || hoverRating > index
                    ? "text-yellow-500"
                    : "text-white"
                }
                // ${hoverRating > index ? "text-red-500 " : "text-white"}
              `}
              onClick={() => setRating(index + 1)}
              onMouseEnter={() => setHoverRating(index + 1)}
              onMouseLeave={() => setHoverRating(0)}
            >
              &#9733;
            </span>
          );
        })}
        <h1>You Give a {rating}/5 Rating.</h1>
      </div>
    </>
  );
};

export default StarRating;
