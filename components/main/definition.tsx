'use client';

import React from 'react';
import { PronunciationButton } from './PronunciationButton'; // Đảm bảo đường dẫn đúng tới file nút loa bạn vừa tạo

export function DefinitionSection() {
  return (
    <section className="border-b border-gray-200 bg-white">
      {/* Khung bao ngoài: Giữ chuẩn kích thước và viền để khớp với các section khác */}
      <div className="mx-auto max-w-7xl border-x border-gray-200 px-0 py-16 text-left">

        {/* Nội dung chính: Padding trong để chữ không dính viền */}
        <div className="mx-auto max-w-5xl px-8">

          {/* 1. Tag Capabilities */}
          <div className="mb-8 flex justify-center">
            <span className="flex items-center gap-1 rounded-full bg-purple-50 px-3 py-1 text-[10px] font-bold tracking-wider text-purple-600 uppercase">
              <span className="text-[8px]">●</span> Capabilities
            </span>
          </div>

          {/* 2. Main Title */}
          <h1 className="mb-12 text-center text-7xl font-bold text-gray-900 tracking-tight">
            What is an{' '}
            {/* Hiệu ứng gạch chân màu xanh lá */}
            <span className="relative inline-block underline underline-offset-1 decoration-[#a3e635]/60 ">
              AI Agent?
              <span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-[#a3e635]/60"></span>
            </span>
          </h1>

          {/* 3. Dictionary Header (Loa + Phiên âm) */}
          <div className="mb-8 flex items-start gap-4">
            <PronunciationButton text="AI Agent" />
            <div className="mt-1">
              <h3 className="text-xl font-bold leading-none text-gray-900">
                AI agent
              </h3>
              <p className="mt-1 font-serif text-lg italic text-gray-500">
                /ˈāˈī ˈā-jənt/ • noun
              </p>
            </div>
          </div>

          {/* 4. Definition Point 1 */}
          <div className="mb-8 flex gap-4">
            <span className="flex-shrink-0 pt-1 font-serif text-xl text-gray-400">1.</span>
            <p className="text-lg leading-relaxed text-gray-800">

              <span className="font-bold decoration-[#a3e635] decoration-2 underline-offset-2 hover:underline">
                A software system that uses artificial intelligence (AI) to perform tasks
              </span>,{' '}
              <span className="font-bold decoration-[#a3e635] decoration-2 underline-offset-2 hover:underline">
                pursue goals
              </span>, and{' '}
              <span className="font-bold decoration-[#a3e635] decoration-2 underline-offset-2 hover:underline">
                make decisions autonomously
              </span>.
              AI agents learn from <span className="font-bold text-black">data</span> and{' '}
              <span className="font-bold text-black">user feedback</span>, adapting over time. They act on behalf of users with minimal human input.
            </p>
          </div>

          {/* 5. Definition Point 2 */}
          <div className="mb-10 flex gap-4">
            <span className="flex-shrink-0 pt-1 font-serif text-xl text-gray-400">2.</span>
            <p className="text-lg leading-relaxed text-gray-600">
              <span className="mr-2 text-lg italic text-gray-400">Advanced usage:</span>
              Intelligent systems that{' '}
              <span className="decoration-gray-300 decoration-1 underline-offset-2 hover:underline">
                perceive their environment
              </span>, apply
              <span className="font-medium text-gray-900"> reasoning and planning</span>, and take{' '}
              <span className="decoration-[#a3e635] decoration-2 underline-offset-2 hover:underline">
                autonomous actions
              </span> to achieve outcomes.
              They use tools like <span className="italic">machine learning</span>, <span className="italic">memory</span>, and <span className="italic">goal-directed behaviors</span> to improve continuously.
            </p>
          </div>

          {/* 6. Quote Box */}
          <div className="mb-12 border-l-2 border-gray-200 pl-6">
            <p className="text-lg italic leading-relaxed text-gray-600">
              “AI agents are software systems that use AI to pursue goals and complete tasks on behalf of users. They show reasoning, planning, and memory and have a level of autonomy to make decisions, learn, and adapt.”
            </p>
            <p className="mt-2 text-right text-sm text-gray-400">— Google Cloud</p>
          </div>

          {/* 7. Similar Tags */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="mr-2 text-sm italic text-gray-400">Similar:</span>
            {[
              'virtual assistant',
              'AI assistant',
              'intelligence agent',
              'digital agent',
              'autonomous agent'
            ].map((tag) => (
              <span
                key={tag}
                className="cursor-default rounded-full border border-gray-200 bg-white px-3 py-1 text-[10px] text-gray-500 transition-colors hover:border-gray-300 hover:text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}