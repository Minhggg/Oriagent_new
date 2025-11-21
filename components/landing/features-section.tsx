'use client'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Mail, PhoneCall, Rocket, BadgeCheckIcon, Lightbulb, ZapIcon, CalendarCheck, Clock,AlarmCheck, ChartBarIncreasing } from "lucide-react";
export function FeaturesSection() {
  return (
    <section className="pb-20 px-4 sm:px-6 lg:px-8 bg-white ">
      <div className="max-w-6xl mx-auto ">
        {/* Top Grid: Value Proposition + Feature Cards */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 p-8">
          {/* Left Column - Value Prop */}
          <div className="lg:col-span-1">
            <Badge variant="outline" className="bg-red-100 text-red-600 border-red-200 mb-4">
              <span className="w-2 h-2 bg-red-600 rounded-full mr-2 inline-block"></span>
              Problem
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-balance">
              Less Busywork.
            </h2>
            <h3 className="text-4xl font-bold mb-6 text-balance">

              <span className="bg-yellow-300 px-2 py-2 rounded-sm shadow-xl">
                More Breakthroughs.
              </span>
            </h3>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              You bring the workflow. We build teams of AI agents to automate it — so your team can focus on growth, not grunt work.
            </p>

            {/* Benefits List */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CalendarCheck className="text-blue-600 h-5 w-5 font-bold" />
                <span className="text-gray-700 text-sm">Cut costs by up to 30%</span>
              </div>
              <div className="flex items-start gap-3">
                <AlarmCheck className="text-orange-600 h-5 w-5 font-bold" />
                <span className="text-gray-700 text-sm">Save 15+ hours per employee per week</span>
              </div>
              <div className="flex items-start gap-3">
                <ChartBarIncreasing className="text-green-600 h-5 w-5 font-bold" />
                <span className="text-gray-700 text-sm">Scale what works — without more headcount</span>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 1 */}
            <Card className="p-6 border-0 bg-gradient-to-br from-gray-50 to-gray-100">

              <h3 className="text-xl font-bold mb-3 flex items-center gap-4">
                <PhoneCall className="w-8 h-10 flex-shrink-0 text-green-500 " /> {/* Đặt class để điều chỉnh kích thước icon nếu cần */}
                Book a Discovery Call
              </h3>
              <div className="text-gray-600 text-sm leading-relaxed space-y-3">

                <div className="flex items-start gap-2">
                  {/* Điều chỉnh kích thước icon nếu cần */}
                  <BadgeCheckIcon className="w-5 h-5 text-gray-900 mt-1 flex-shrink-0 text-green-500 " />
                  <span>No pressure, no prep. Just show us how you work — we'll spot what AI can take over.</span>
                </div>

                <div className="flex items-start gap-2">
                  {/* Điều chỉnh kích thước icon nếu cần */}
                  <BadgeCheckIcon className="w-5 h-5 text-gray-900 mt-1 flex-shrink-0 text-green-500" />
                  <span>We map your workflow and build a custom AI agent to match. You review, we refine.</span>
                </div>

                <div className="flex items-start gap-2">
                  {/* Điều chỉnh kích thước icon nếu cần */}
                  <BadgeCheckIcon className="w-5 h-5 text-gray-900 mt-1 flex-shrink-0 text-green-500" />
                  <span>We finalize the blueprint and define key metrics for success, ensuring the AI agent is ready for launch.</span>
                </div>

              </div>
            </Card>

            {/* Card 2 */}
            <Card className="p-6 border-0 bg-gradient-to-br from-yellow-50 to-yellow-100">

              <h3 className="text-xl font-bold mb-3 flex items-center gap-4">
                <Rocket className="w-8 h-10 flex-shrink-0 text-orange-600" />
                Launch to Scale
              </h3>
              <div className="text-gray-600 text-sm leading-relaxed space-y-3">

                <div className="flex items-start gap-2">
                  {/* Điều chỉnh kích thước icon nếu cần */}
                  <BadgeCheckIcon className="w-5 h-5 text-gray-900 mt-1 flex-shrink-0 text-orange-600" />
                  <span>We deploy your AI agent in under a week. We handle all integration and initial setup for production use.</span>
                </div>

                <div className="flex items-start gap-2">
                  {/* Điều chỉnh kích thước icon nếu cần */}
                  <BadgeCheckIcon className="w-5 h-5 text-gray-900 mt-1 flex-shrink-0 text-orange-600" />
                  <span>You get ongoing support, updates, and optimization — ensuring the agent evolves with your business needs.</span>
                </div>

                <div className="flex items-start gap-2">
                  {/* Điều chỉnh kích thước icon nếu cần */}
                  <BadgeCheckIcon className="w-5 h-5 text-gray-900 mt-1 flex-shrink-0 text-orange-600" />
                  <span>We continuously monitor performance and identify opportunities to scale the solution across other workflows.</span>
                </div>

              </div>
            </Card>
          </div>
        </div>

        {/* Bottom Grid: Process Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - The Mess */}
          <Card className="p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Juggle the mess</h3>
            <div className="relative h-64 flex items-center justify-center">
              {/* Chaotic sticky notes */}
              <div className="space-y-2 relative w-full h-full">
                <div className="absolute top-0 left-4 bg-purple-200 text-purple-900 px-3 py-2 rounded text-xs font-medium transform -rotate-3 shadow-lg">
                  😊 Meet to clarity requirements
                </div>
                <div className="absolute top-8 left-0 bg-blue-200 text-blue-900 px-3 py-2 rounded text-xs font-medium transform rotate-2 shadow-lg">
                  💬 See a prototype (it's not quite right)
                </div>
                <div className="absolute top-16 left-8 bg-pink-200 text-pink-900 px-3 py-2 rounded text-xs font-medium transform -rotate-1 shadow-lg">
                  🎟 Submit a ticket to IT
                </div>
                <div className="absolute top-24 left-2 bg-yellow-200 text-yellow-900 px-3 py-2 rounded text-xs font-medium transform rotate-3 shadow-lg">
                  ⏰ Wait (weeks or months)
                </div>
                <div className="absolute top-32 left-12 bg-red-200 text-red-900 px-3 py-2 rounded text-xs font-medium transform -rotate-2 shadow-lg">
                  🔔 Wait (they're swamped!)
                </div>
                <div className="absolute bottom-8 left-4 bg-green-200 text-green-900 px-3 py-2 rounded text-xs font-medium transform rotate-1 shadow-lg">
                  ↻ Repeat
                </div>
                <div className="absolute bottom-2 right-4 bg-cyan-200 text-cyan-900 px-3 py-2 rounded text-xs font-medium transform -rotate-3 shadow-lg">
                  ✅ Follow up (they're still swamped)
                </div>
                <div className="absolute bottom-12 right-6 bg-indigo-200 text-indigo-900 px-3 py-2 rounded text-xs font-medium transform rotate-2 shadow-lg">
                  📋 Add it to the backlog
                </div>
              </div>
            </div>
          </Card>

          {/* Right - The Solution */}
          <Card className="p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Just build it with OriAgent</h3>
            <div className="relative h-64 flex items-center justify-center">
              {/* Organized, colorful tags */}
              <div className="flex flex-col gap-3 items-center justify-center">
                <div className="bg-yellow-200 text-yellow-900 px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 flex-shrink-0 text-yellow-500 " /> You have an idea
                </div>
                <div className="bg-orange-200 text-orange-900 px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-2">
                  <ZapIcon className="w-5 h-5 flex-shrink-0 text-orange-500 " /> We scope it in 30 mins
                </div>
                <div className="bg-green-200 text-green-900 px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-2">
                  <CalendarCheck className="w-5 h-5 flex-shrink-0 text-green-500 " /> You get your agent in 7 days
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
