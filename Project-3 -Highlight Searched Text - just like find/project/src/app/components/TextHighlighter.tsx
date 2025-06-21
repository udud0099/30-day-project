"use client";
import { useState } from "react";

const paragraphText = `Where does it come from? Contrary to popular belief, Lorem Ipsum is not
simply random text. It has roots in a piece of classical Latin
literature from 45 BC, making it over 2000 years old. Richard
McClintock, a Latin professor at Hampden-Sydney College in Virginia,
looked up one of the more obscure Latin words, consectetur, from a Lorem
Ipsum passage, and going through the cites of the word in classical
literature, discovered the undoubtable source. Lorem Ipsum comes from
sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
treatise on the theory of ethics, very popular during the Renaissance.
The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
from a line in section 1.10.32.`;

const escapeRegExp = (str: string) =>
  str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const TextHighlighter = () => {
  const [input, setInput] = useState("");

  const getHighlightedText = () => {
    if (!input.trim()) return paragraphText;

    const pattern = new RegExp(escapeRegExp(input), "gi");

    return paragraphText.replace(pattern, (match) => `<mark>${match}</mark>`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-12 gap-8">
      <div className="w-full max-w-2xl">
        <input
          type="text"
          placeholder="Search keyword"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-3 rounded text-white text-lg"
        />
      </div>

      <div
        className="max-w-2xl text-justify text-lg leading-relaxed [&_mark]:bg-yellow-300 [&_mark]:text-black"
        dangerouslySetInnerHTML={{ __html: getHighlightedText() }}
      />
    </div>
  );
};

export default TextHighlighter;
