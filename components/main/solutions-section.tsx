'use client';

export function SolutionsSection() {
  return (
    <section className="max-w-7xl mx-auto border-l border-r border-b border-border">
      {/* Top: Two column layout - Left 3/4, Right 1/4 */}
      <div className="grid grid-cols-4 divide-x divide-border">
        {/* Left: Comprehensive Solutions - 3/4 width */}
        <div className="col-span-3 p-12 flex flex-col items-center text-center">
          {/* Illustration placeholder */}
          <div className="mb-8 w-full h-64 bg-muted rounded-lg flex items-center justify-center">
            <div className="text-muted-foreground">
              <svg className="w-32 h-32 mx-auto" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Simplified workflow diagram */}
                <circle cx="50" cy="50" r="20" fill="#CDDC39" stroke="#border" strokeWidth="2" />
                <circle cx="100" cy="100" r="20" fill="#FF6B6B" stroke="#border" strokeWidth="2" />
                <circle cx="150" cy="50" r="20" fill="#FFA500" stroke="#border" strokeWidth="2" />
                <circle cx="100" cy="150" r="20" fill="#A855F7" stroke="#border" strokeWidth="2" />
                <line x1="70" y1="50" x2="80" y2="100" stroke="#border" strokeWidth="1" />
                <line x1="130" y1="50" x2="120" y2="100" stroke="#border" strokeWidth="1" />
                <line x1="100" y1="120" x2="100" y2="130" stroke="#border" strokeWidth="1" />
              </svg>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-3 text-foreground">
            Comprehensive End-to-End Solutions
          </h3>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            A seamless journey from concept to execution with meticulously crafted solutions.
            Every detail refined, creating an experience that feels intuitive and magical.
          </p>
        </div>

        {/* Right: Cutting-Edge AI - 1/4 width */}
        <div className="col-span-1 p-12 flex flex-col items-center text-center">
          {/* Illustration placeholder */}
          <div className="mb-8 w-full h-64 bg-muted rounded-lg flex items-center justify-center">
            <div className="text-muted-foreground flex gap-4 flex-wrap justify-center items-center p-8">
              <div className="w-10 h-10 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">G</div>
              <div className="w-10 h-10 bg-black rounded flex items-center justify-center text-white text-xs">⚙️</div>
              <div className="w-10 h-10 bg-purple-600 rounded flex items-center justify-center text-white text-xs">✨</div>
              <div className="w-10 h-10 bg-yellow-400 rounded flex items-center justify-center text-black text-xs font-bold">◆</div>
              <div className="w-10 h-10 bg-red-500 rounded flex items-center justify-center text-white text-xs">A</div>
              <div className="w-10 h-10 bg-green-500 rounded flex items-center justify-center text-white text-xs">🎯</div>
              <div className="w-10 h-10 bg-cyan-500 rounded flex items-center justify-center text-white text-xs">⚡</div>
            </div>
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

      {/* Bottom: Changelog link */}
      <div className="py-12 px-12 flex items-center gap-8 border-t border-border">
        <button
          onClick={() => window.location.href = '#changelog'}
          className="text-foreground text-lg font-medium hover:text-lime-500 transition-colors duration-200 cursor-pointer"
        >
          See our changelog
        </button>

        {/* Decorative stars and arrow */}
        <div className="flex items-center gap-8 ml-auto">
          <div className="text-lime-500 text-3xl">◆</div>
          <div className="text-border text-2xl">→</div>
          <div className="flex gap-2">
            <div className="text-lime-500 text-3xl">◆</div>
            <div className="text-lime-500 text-3xl">◆</div>
          </div>
        </div>
      </div>
    </section>
  );
}
