'use client';

import { useEffect, useState } from 'react';

export default function IntegrationVideoDemo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const integrations = [
    { name: 'Slack', emoji: '⚫', color: 'bg-purple-500', ring: 'outer' },
    { name: 'Notion', emoji: '◻', color: 'bg-gray-800', ring: 'middle' },
    { name: 'WhatsApp', emoji: '💬', color: 'bg-green-500', ring: 'inner' },
    { name: 'Google', emoji: 'G', color: 'bg-blue-500', ring: 'outer' },
    { name: 'OpenAI', emoji: '◯', color: 'bg-green-600', ring: 'middle' },
    { name: 'Telegram', emoji: '✈', color: 'bg-cyan-500', ring: 'inner' },
    { name: 'Figma', emoji: '🎨', color: 'bg-red-500', ring: 'outer' },
  ];

  if (!mounted) return null;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 rounded-lg border border-gray-200 p-8">
      <style>{`
        @keyframes spin-ccw {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes spin-cw {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .orbit-outer {
          animation: spin-ccw 20s linear infinite;
        }
        .orbit-middle {
          animation: spin-cw 20s linear infinite;
        }
        .orbit-inner {
          animation: spin-ccw 20s linear infinite;
        }
      `}</style>

      <div className="relative w-full">
        {/* Integration Icons with Concentric Circles */}
        <div className="relative w-96 h-96 flex items-center justify-center mx-auto">
          {/* Outer circle - rotates counter-clockwise */}
          <div className="orbit-outer absolute w-80 h-80 rounded-full border-2 border-gray-300" />

          {/* Middle circle - rotates clockwise */}
          <div className="orbit-middle absolute w-56 h-56 rounded-full border-2 border-gray-300" />

          {/* Inner circle - rotates counter-clockwise */}
          <div className="orbit-inner absolute w-32 h-32 rounded-full border-2 border-gray-300" />

          {/* Center Logo */}
          <div className="absolute z-10 w-12 h-12 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center shadow-md">
            <span className="text-lg">✨</span>
          </div>

          {integrations.map((integration, index) => {
            const totalIcons = integrations.length;
            const angle = (index / totalIcons) * 360;

            let radius = 160;
            let orbitClass = 'orbit-outer';

            if (integration.ring === 'middle') {
              radius = 115;
              orbitClass = 'orbit-middle';
            } else if (integration.ring === 'inner') {
              radius = 65;
              orbitClass = 'orbit-inner';
            }

            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={integration.name}
                className={`${orbitClass} absolute w-10 h-10 ${integration.color} rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md`}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
                title={integration.name}
              >
                {integration.emoji}
              </div>
            );
          })}
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center">
          <h3 className="font-bold text-lg text-gray-900">Seamless Integrations</h3>
          <p className="text-sm text-gray-600 mt-2">
            Unite your favorite tools for effortless connectivity.<br />
            Boost productivity through interconnected workflows.
          </p>
        </div>
      </div>
    </div>
  );
}
