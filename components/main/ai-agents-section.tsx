'use client';

import ChatVideoDemo from '@/components/effect/chat-video-demo';
import { InsightChart } from '@/components/effect/reporting';
import IncidentSummaryCard from '@/components/effect/automation';
import RotatingIcons from '@/components/effect/Rotating-icon';
import Rotating from '@/components/effect/Rotating-icon';
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

        <div className="border-l border-r border-y border-gray-200 bg-white rounded-2xl shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-x divide-y divide-gray-200">
            <div className="p-8 h-full flex flex-col min-h-130 max-h-[40rem] relative overflow-hidden">
              <div className="w-full h-full absolute top-0 left-1 z-1">
                <ChatWidget />
              </div>
              <div
                className="absolute bottom-0  w-full p-6 bg-white text-center z-20 shadow-[_0_-20px_10px_rgba(0,0,0,0.15)]  shadow-gray-100/30"
                style={{ height: '33%', minHeight: '10rem' }}
              >
                <h3 className="text-xl text-center font-semibold text-gray-800 mb-2">Real-time AI Collaboration</h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto">
                  Experience real-time assistance. Ask your AI Agent to coordinate
                  tasks, answer questions, and maintain team alignment.
                </p>
              </div>

            </div>

            {/*Card 2: Seamless Integrations (RotatingIcons) */}
            <div className="p-8 h-full flex flex-col min-h-130 max-h-[40rem] relative overflow-hidden">
              <div className="w-full h-full absolute top-0 left-0 z-1 flex items-center justify-center ">


                <RotatingIcons />
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 w-full p-6 bg-white  text-center z-20 shadow-[_0_-50px_10px_rgba(0,0,0,0.15)]  shadow-gray-100/50"
                // Sử dụng style để chiếm 1/3 chiều cao và tạo hiệu ứng chồng lấp
                style={{ height: '33%', minHeight: '10rem' }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Seamless Integrations</h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto">
                  Unite your favorite tools for effortless connectivity.
                  Boost productivity through interconnected workflows.
                </p>
              </div>

            </div>
            <div className="p-8 flex flex-col items-center justify-center min-h-96 max-h-140">
              <InsightChart />
            </div>
            <div className="p-8 flex flex-col items-center justify-center min-h-96 max-h-140">
              <IncidentSummaryCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
