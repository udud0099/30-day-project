"use client";
import React, { useState } from "react";
import { data } from "../data/data";

const Faq = () => {
  const [open, setOpen] = useState(0);
  console.log(open + "test");

  return (
    <>
      <div>
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => setOpen(index + 1)}
            className="mb-2 bg-blue-500 text-white p-4 rounded cursor-pointer"
          >
            <h1 className="text-4xl">{item.title}</h1>
            <p
              className={`overflow-hidden transition-all duration-600 ${
                open == index + 1 ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              } `}
            >
              {item.des}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Faq;
