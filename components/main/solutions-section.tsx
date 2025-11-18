'use client';
import { Bot, ArrowRight } from "lucide-react";
export function SolutionsSection() {
  return (
    <section className="max-w-7xl mx-auto border-l border-r border-b border-border">
      {/* Top: Two column layout - Left 3/4, Right 1/4 */}
      <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">

        {/* Left: Comprehensive Solutions - 3/4 width */}
        <div className="col-span-3 p-12 flex flex-col items-center text-center">

          {/* Image Area */}
          <div className="mb-8 w-full flex items-center justify-center h-64">
            <img
              src="/flow.svg" // ĐIỀN LINK ẢNH TRÁI VÀO ĐÂY
              alt="Comprehensive End-to-End Solutions"
              className="h-full w-auto object-contain"
            />
          </div>

          <h3 className="text-2xl font-semibold mb-3 text-foreground">
            Comprehensive End-to-End Solutions
          </h3>
          <p className="text-muted-foreground max-w-xl text-sm leading-relaxed">
            A seamless journey from concept to execution with meticulously crafted solutions.
            Every detail refined, creating an experience that feels intuitive and magical.
          </p>
        </div>

        {/* Right: Cutting-Edge AI - 1/4 width */}
        <div className="col-span-1 p-12 flex flex-col items-center text-center">

          {/* Image Area */}
          <div className="mb-8 w-full flex items-center justify-center h-64">
            <img
              src="/flow2.svg" // ĐIỀN LINK ẢNH PHẢI VÀO ĐÂY
              alt="Cutting-Edge AI Technology"
              className="h-full w-auto object-contain"
            />
          </div>

          <h3 className="text-2xl font-semibold mb-3 text-foreground">
            Cutting-Edge AI Technology
          </h3>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            Harness the power of next-generation AI, engineered to understand your needs with precision
            and deliver exceptional results.
          </p>
        </div>
      </div>

      <button
        onClick={() => window.location.href = '/'}
        className="w-full py-12 px-12 flex items-center justify-between border-t border-border bg-background hover:bg-amber-300 hover:text-lime-900 transition-all duration-200 cursor-pointer group text-left"
      >
        {/* Text Section */}
        <span className="text-foreground group-hover:text-lime-900 text-2xl font-medium">
          See our changelog
        </span>

        {/* Decorative stars and arrow */}
        <div className="flex items-center gap-8 ml-auto">
          {/* Bot Icon */}
          <Bot className="text-foreground group-hover:text-lime-900 h-8 w-8 transition-colors" />

          {/* Arrow Icon */}
          <ArrowRight className="text-border group-hover:text-lime-900 h-8 w-8 transition-colors" />

          {/* Logo/Star */}
          <div className="flex gap-2">
            <img src="/logo.svg" alt="Star" className="h-8 w-8" />
          </div>
        </div>
      </button>
    </section>

  );
}