'use client';

import ChatVideoDemo from '@/components/effect/chat-video-demo';
import IntegrationVideoDemo from '@/components/effect/integration-video-demo';
import AnalyticsVideoDemo from '@/components/effect/analytics-video-demo';
import AutomationVideoDemo from '@/components/effect/automation-video-demo';
import RotatingIcons from '@/components/effect/Rotating-icon';
import ChatWidget from '@/components/effect/ChatWidget';

export function AiAgentsSection() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-yellow-500 mb-2">✨ Features</p>
          <h2 className="text-4xl font-bold mb-3">
            How do AI Agents <span className="font-bold">work</span>
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Experience the simplicity and power of AI Agents working seamlessly to transform your workflow
          </p>
        </div>

        <div className="border-l border-r border-y border-gray-200 bg-white rounded-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-x divide-y divide-gray-200">
            {/* Video 1 - Real-time Collaboration */}
            <div className="p-8 flex flex-col items-center justify-center min-h-96">
              <ChatWidget />
            </div>

            {/* Video 2 - Seamless Integrations */}
            <div className="p-8 flex flex-col items-center justify-center min-h-96">
              <RotatingIcons />
            </div>

            {/* Video 3 - Instant Insight Reporting */}
            <div className="p-8 flex flex-col items-center justify-center min-h-96">
              <AnalyticsVideoDemo />
            </div>

            {/* Video 4 - Smart Automation */}
            <div className="p-8 flex flex-col items-center justify-center min-h-96">
              <AutomationVideoDemo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
