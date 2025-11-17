'use client';

import React from 'react';

interface AnimatedCarouselProps {
  leftImages: string[];
  rightImages: string[];
}

export function AnimatedCarousel({ leftImages, rightImages }: AnimatedCarouselProps) {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="container mx-auto max-w-5xl px-0 py-0">
        {/* Main Border Box */}
        <div className="grid grid-cols-1 border-x border-gray-200 lg:grid-cols-2">

          {/* --- Left Column --- */}
          <div className="flex flex-col justify-center overflow-hidden px-6 py-4">
            <h2 className="mb-6 text-center text-xs font-medium uppercase tracking-wider text-gray-500">
              Trusted by global companies
            </h2>

            {/* Carousel Container with Fade Mask */}
            <div className="relative flex h-6 w-full items-center overflow-hidden ">
              <div className="absolute inset-0 flex animate-scroll-left items-center gap-6">
                {/* First Loop */}
                {leftImages.map((image, idx) => (
                  <div
                    key={`left-${idx}`}
                    className="flex h-4 w-24 flex-shrink-0 items-center justify-center"
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Logo ${idx + 1}`}
                      className="max-h-4 max-w-full object-contain "
                    />
                  </div>
                ))}
                {/* Duplicate Loop */}
                {leftImages.map((image, idx) => (
                  <div
                    key={`left-dup-${idx}`}
                    className="flex h-4 w-24 flex-shrink-0 items-center justify-center"
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Logo ${idx + 1}`}
                      className="max-h-4 max-w-full object-contain "
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- Right Column --- */}
          <div className="flex flex-col justify-center overflow-hidden border-t border-gray-200 px-6 py-6 lg:border-l lg:border-t-0">
            <h2 className="mb-6 text-center text-xs font-medium uppercase tracking-wider text-gray-500">
              Trusted by global companies
            </h2>

            <div className="relative flex h-6 w-full items-center overflow-hidden ">
              <div className="absolute inset-0 flex animate-scroll-left items-center gap-6" style={{ animationDelay: '-5s' }}>
                {/* animationDelay giúp 2 bên chạy lệch nhau một chút cho tự nhiên */}
                {rightImages.map((image, idx) => (
                  <div
                    key={`right-${idx}`}
                    className="flex h-4 w-24 flex-shrink-0 items-center justify-center"
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Logo ${idx + 6}`}
                      className="max-h-4 max-w-full object-contain "
                    />
                  </div>
                ))}
                {/* Duplicate Loop */}
                {rightImages.map((image, idx) => (
                  <div
                    key={`right-dup-${idx}`}
                    className="flex h-4 w-24 flex-shrink-0 items-center justify-center"
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Logo ${idx + 6}`}
                      className="max-h-4 max-w-full object-contain "
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}