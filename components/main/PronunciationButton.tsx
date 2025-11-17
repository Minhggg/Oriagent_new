'use client';

import React, { useState } from 'react';
import { Volume2, Loader2 } from 'lucide-react'; // Cần cài lucide-react hoặc dùng svg icon thường

interface PronunciationButtonProps {
  text: string; // Từ cần đọc, ví dụ: "AI Agent"
}

export function PronunciationButton({ text }: PronunciationButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      // Ngắt âm thanh đang đọc dở (nếu có)
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);

      // Cấu hình giọng đọc (Tiếng Anh)
      utterance.lang = 'en-US';
      utterance.rate = 0.9; // Tốc độ đọc (1 là bình thường, 0.9 chậm hơn xíu cho rõ)
      utterance.pitch = 1;

      // Sự kiện khi bắt đầu và kết thúc
      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
    } else {
      alert("Trình duyệt của bạn không hỗ trợ đọc văn bản.");
    }
  };

  return (
    <button
      onClick={handlePlay}
      disabled={isPlaying}
      className={`
        group flex h-8 w-8 items-center justify-center rounded-full 
        transition-all duration-200 ease-in-out
        ${isPlaying ? 'bg-lime-500 scale-95' : 'bg-[#a3e635] hover:bg-lime-400 hover:scale-105'}
      `}
      aria-label="Listen to pronunciation"
      title="Click to listen"
    >
      {isPlaying ? (
        // Icon xoay xoay khi đang đọc (tùy chọn, cho đẹp)
        <Loader2 className="h-4 w-4 animate-spin text-black" />
      ) : (
        // Icon loa giống trong ảnh
        <Volume2 className="h-4 w-4 text-black" strokeWidth={2.5} />
      )}
    </button>
  );
}