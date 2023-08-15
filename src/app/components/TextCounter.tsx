"use client"

import React, { useState } from 'react';

interface TextCounterProps {
  placeholder?: string;
}

const TextCounter: React.FC<TextCounterProps> = ({ placeholder = 'ここに文字を入力してください' }) => {
  const [text, setText] = useState('');

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const characterCount = text.length;

  return (
    <div className="w-full md:w-2/3 mx-auto flex flex-col items-center justify-center px-4">
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder={placeholder}
        rows={8}
        className="w-full p-4 text-slate-900 rounded-lg
                  border border-slate-300 focus:outline-slate-400 focus:border-slate-400"
      />
      <h1 className="text-2xl text-center font-bold mt-4">
        <span className="text-4xl text-blue-600 pr-1">{characterCount}</span>文字
      </h1>
    </div>
  );
};

export default TextCounter;