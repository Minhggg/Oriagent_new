'use client'

import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
// Import Data từ file agent-data.ts (đảm bảo file này nằm cùng thư mục)
import { agentTabs, tabContentData, rotatingContent } from './agent-data'

export function AIAgentsSection() {
  const [activeTab, setActiveTab] = useState('custom')
  const [contentIndex, setContentIndex] = useState(0)

  // Logic: Lấy data features dựa trên activeTab
  // Nếu không tìm thấy tab (ví dụ lỗi typo) thì fallback về 'custom'
  const activeFeatures = tabContentData[activeTab] || tabContentData['custom']

  // Lấy config hiển thị (màu sắc, icon tab) hiện tại
  const activeTabConfig = agentTabs.find(t => t.id === activeTab) || agentTabs[0]

  // Hiệu ứng chạy chữ bên phải (Rotating Text)
  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex((prev) => (prev + 1) % rotatingContent.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const currentContent = rotatingContent[contentIndex]

  return (
    <section className="w-full py-12 bg-white">
      <div className="mx-auto max-w-7xl border border-gray-200 bg-white shadow-sm sm:rounded-3xl overflow-hidden">

        {/* --- 1. HEADER --- */}
        <div className="px-6 py-12 md:px-12 text-center bg-gradient-to-b from-white to-gray-50/50">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-lime-50 px-3 py-1 text-xs font-bold tracking-wide text-lime-700 uppercase border border-lime-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
              </span>
              Use Cases
            </span>
          </div>

          <h1 className="mb-6 text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
            What can AI Agents{' '}
            <span className="relative inline-block whitespace-nowrap">
              do for you?
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-lime-300 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-base md:text-lg text-gray-500">
            Streamline your workflow with intelligent agents designed for specific business functions.
          </p>
        </div>

        {/* --- 2. NAVIGATION TABS (4 Nút) --- */}
        <div className="grid grid-cols-4 border-y border-gray-200 divide-x divide-gray-200">
          {agentTabs.map((tab) => {
            // Gán Icon Tab ra biến để render (tránh lỗi JSX)
            const TabIcon = tab.icon

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative h-full p-2 md:p-6 transition-all duration-300 text-left outline-none
                    ${activeTab === tab.id ? tab.activeBg : 'bg-white hover:bg-gray-50'}
                  `}
              >
                {/* Thanh line màu bên trên khi active */}
                {activeTab === tab.id && (
                  <div className={`absolute left-0 top-0 h-1 w-full ${tab.barColor}`}></div>
                )}

                <div className="flex flex-col items-center md:items-start gap-2 md:gap-3">
                  {/* Icon Box */}
                  <div className="flex items-center gap-4 justify-center">
                    <div className={`p-2 rounded-lg transition-colors ${activeTab === tab.id ? 'bg-white shadow-sm' : 'bg-gray-100 group-hover:bg-white'}`}>
                      <TabIcon
                        className={`h-5 w-5 md:h-6 md:w-6 ${activeTab === tab.id ? tab.color : 'text-gray-400'}`}
                        strokeWidth={2}
                      />
                    </div>

                    {/* Text Desktop */}
                    <div className="hidden md:block">
                      <h3 className={`text-sm font-bold ${activeTab === tab.id ? 'text-gray-900' : 'text-gray-600'}`}>
                        {tab.label}
                      </h3>
                      <p className="text-xs text-gray-400">{tab.description}</p>
                    </div>
                  </div>

                  {/* Text Mobile (Rút gọn) */}
                  <div className="block md:hidden">
                    <h3 className={`text-[10px] font-bold text-center leading-tight ${activeTab === tab.id ? 'text-gray-900' : 'text-gray-600'}`}>
                      {tab.label}
                    </h3>
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* --- 3. MAIN CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">

          {/* --- LEFT COL: DYNAMIC FEATURE CARDS --- */}
          <div className="lg:col-span-7 p-6 md:p-10 bg-white space-y-8">

            {/* Header Cột Trái */}
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 animate-in fade-in slide-in-from-left-2 duration-300" key={activeTab}>
                {activeTabConfig.label} Solutions
              </h2>
              <button className="hidden sm:flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors">
                View details <ArrowRight className="h-3 w-3" />
              </button>
            </div>

            {/* Cards Loop */}
            <div className="space-y-5">
              {activeFeatures.map((feature, idx) => {
                // FIX LỖI JSX: Gán icon ra biến MainIcon (viết hoa chữ cái đầu)
                const MainIcon = feature.steps[0].icon

                return (
                  <div
                    key={`${activeTab}-${idx}`}
                    className={`group relative overflow-hidden rounded-2xl border border-gray-100 p-6 transition-all hover:shadow-md
                            ${activeTabConfig.bgColor} bg-opacity-30 hover:bg-opacity-50
                        `}
                  >
                    <div className="relative z-10">
                      {/* Card Top: Icon + Title */}
                      <div className="mb-4 flex items-center gap-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ${activeTabConfig.color}`}>
                          {/* Render icon từ biến đã gán */}
                          <MainIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                          {feature.badge && (
                            <span className="inline-block rounded-full bg-white/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-gray-600 border border-gray-200/50 shadow-sm">
                              {feature.badge}
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="mb-6 text-sm leading-relaxed text-gray-600 max-w-lg">
                        {feature.description}
                      </p>

                      {/* Steps Pills */}
                      <div className="mb-6 flex flex-wrap gap-2 sm:gap-3">
                        {feature.steps.map((step, sIdx) => {
                          // FIX LỖI JSX: Gán icon con ra biến StepIcon
                          const StepIcon = step.icon
                          return (
                            <div key={sIdx} className="flex items-center gap-1.5 rounded-md bg-white/60 px-2.5 py-1.5 text-xs font-medium text-gray-600 ring-1 ring-black/5">
                              <StepIcon className={`h-3.5 w-3.5 ${activeTabConfig.color}`} />
                              <span>{step.label}</span>
                            </div>
                          )
                        })}
                      </div>

                      {/* CTA */}
                      <button className="flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2 text-sm font-bold text-white transition-transform active:scale-95 hover:bg-gray-800">
                        {feature.cta} <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Background Decor */}
                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white opacity-40 blur-2xl group-hover:opacity-60 transition-opacity"></div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* --- RIGHT COL: ROTATING ANIMATION --- */}
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-gray-200 bg-gray-50/50 flex flex-col items-center justify-center p-10 relative overflow-hidden">

            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="relative z-10 flex flex-col items-center space-y-6 text-center w-full max-w-sm">

              <span className="text-xl font-light text-gray-400">Try using</span>

              {/* Box 1: Agent */}
              <div className="w-full transform transition-all duration-500 hover:scale-105">
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" key={`agent-${contentIndex}`}>
                  <div className="rounded-2xl bg-white border border-purple-100 p-5 shadow-lg shadow-purple-100/50">
                    <div className="text-xs font-bold uppercase text-purple-400 mb-1">Agent</div>
                    <div className="text-2xl sm:text-3xl font-black text-purple-600 tracking-tight truncate">{currentContent.agent}</div>
                  </div>
                </div>
              </div>

              <span className="text-xl font-light text-gray-400">to</span>

              {/* Box 2: Use Case */}
              <div className="w-full transform transition-all duration-500 hover:scale-105 delay-75">
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700" key={`usecase-${contentIndex}`}>
                  <div className="rounded-2xl bg-white border border-blue-100 p-5 shadow-lg shadow-blue-100/50">
                    <div className="text-xs font-bold uppercase text-blue-400 mb-1">Action</div>
                    <div className="text-2xl sm:text-3xl font-black text-blue-600 tracking-tight truncate">{currentContent.useCase}</div>
                  </div>
                </div>
              </div>

              <span className="text-xl font-light text-gray-400">for your</span>

              {/* Box 3: Goal */}
              <div className="w-full transform transition-all duration-500 hover:scale-105 delay-150">
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000" key={`goal-${contentIndex}`}>
                  <div className="rounded-2xl bg-white border border-amber-100 p-5 shadow-lg shadow-amber-100/50">
                    <div className="text-xs font-bold uppercase text-amber-400 mb-1">Outcome</div>
                    <div className="text-2xl sm:text-3xl font-black text-amber-600 tracking-tight truncate">{currentContent.goal}</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}