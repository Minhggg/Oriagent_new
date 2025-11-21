'use client'

import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
// Import Data từ file agent-data.ts
import { agentTabs, tabContentData, rotatingContent } from './agent-data'

// CẤU HÌNH THEME CHO CỘT BÊN PHẢI
// Mỗi theme tương ứng với thứ tự của Tab (0, 1, 2, 3)
const rightPanelThemes = [
  // Theme 0: Clean White - Viền màu nhẹ (Mặc định)
  {
    panelBg: "bg-gray-50/50",
    gridColor: "bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px),black]",
    textColor: "text-gray-400",
    box1: "bg-white border-purple-100 shadow-purple-100/50 text-purple-600",
    label1: "text-purple-400",
    box2: "bg-white border-blue-100 shadow-blue-100/50 text-blue-600",
    label2: "text-blue-400",
    box3: "bg-white border-amber-100 shadow-amber-100/50 text-amber-600",
    label3: "text-amber-400",
  },
  // Theme 1: Pastel Fill - Nền màu nhạt, chữ đậm
  {
    panelBg: "bg-emerald-50/30",
    gridColor: "bg-[linear-gradient(to_right,#05966912_1px,transparent_1px),linear-gradient(to_bottom,#05966912_1px,transparent_1px),transparent]",
    textColor: "text-emerald-600/60",
    box1: "bg-emerald-100/50 border-emerald-200 shadow-none text-emerald-700",
    label1: "text-emerald-600",
    box2: "bg-teal-100/50 border-teal-200 shadow-none text-teal-700",
    label2: "text-teal-600",
    box3: "bg-green-100/50 border-green-200 shadow-none text-green-700",
    label3: "text-green-600",
  },
  // Theme 2: Dark Mode - Glassmorphism (Hiệu ứng kính tối)
  {
    panelBg: "bg-slate-900",
    gridColor: "bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px),transparent]",
    textColor: "text-slate-400",
    box1: "bg-white/10 backdrop-blur-md border-white/10 text-white shadow-2xl",
    label1: "text-rose-300",
    box2: "bg-white/10 backdrop-blur-md border-white/10 text-white shadow-2xl",
    label2: "text-orange-300",
    box3: "bg-white/10 backdrop-blur-md border-white/10 text-white shadow-2xl",
    label3: "text-yellow-300",
  },
  // Theme 3: Modern Gradient - Nền chuyển màu nhẹ
  {
    panelBg: "bg-white",
    gridColor: "hidden", // Ẩn lưới
    textColor: "text-indigo-300",
    box1: "bg-gradient-to-br from-white to-indigo-50 border-indigo-100 shadow-indigo-200/40 text-indigo-600",
    label1: "text-indigo-400",
    box2: "bg-gradient-to-br from-white to-fuchsia-50 border-fuchsia-100 shadow-fuchsia-200/40 text-fuchsia-600",
    label2: "text-fuchsia-400",
    box3: "bg-gradient-to-br from-white to-violet-50 border-violet-100 shadow-violet-200/40 text-violet-600",
    label3: "text-violet-400",
  }
]

export function AIAgentsSection() {
  const [activeTab, setActiveTab] = useState('custom')
  const [contentIndex, setContentIndex] = useState(0)

  // --- LOGIC MỚI: XÁC ĐỊNH THEME ---
  // Tìm vị trí index của tab hiện tại (0, 1, 2, hoặc 3)
  const currentTabIndex = agentTabs.findIndex(t => t.id === activeTab)
  // Lấy theme config tương ứng (nếu không tìm thấy lấy theme 0)
  const currentTheme = rightPanelThemes[currentTabIndex] || rightPanelThemes[0]

  // Lấy data features cho cột trái
  const activeFeatures = tabContentData[activeTab] || tabContentData['custom']
  const activeTabConfig = agentTabs.find(t => t.id === activeTab) || agentTabs[0]

  // Hiệu ứng chạy chữ
  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex((prev) => (prev + 1) % rotatingContent.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  // --- LOGIC MỚI: OFFSET CONTENT ---
  // Để nội dung "khác đi" mỗi khi đổi tab, ta cộng thêm index của tab vào
  // Ví dụ: Tab 1 lấy item 0, Tab 2 sẽ bắt đầu lấy từ item 5...
  const offsetIndex = (contentIndex + (currentTabIndex * 5)) % rotatingContent.length
  const currentContent = rotatingContent[offsetIndex]

  return (
    <section className="w-full py-12 bg-white">
      <div className="mx-auto max-w-7xl border border-gray-200 bg-white shadow-sm sm:rounded-3xl overflow-hidden">

        {/* --- 1. HEADER (GIỮ NGUYÊN) --- */}
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

        {/* --- 2. NAVIGATION TABS (GIỮ NGUYÊN) --- */}
        <div className="grid grid-cols-4 border-y border-gray-200 divide-x divide-gray-200">
          {agentTabs.map((tab) => {
            const TabIcon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative h-full p-2 md:p-6 transition-all duration-300 text-left outline-none
                    ${activeTab === tab.id ? tab.activeBg : 'bg-white hover:bg-gray-50'}
                  `}
              >
                {activeTab === tab.id && (
                  <div className={`absolute left-0 top-0 h-1 w-full ${tab.barColor}`}></div>
                )}
                <div className="flex flex-col items-center md:items-start gap-2 md:gap-3">
                  <div className="flex items-center gap-4 justify-center">
                    <div className={`p-2 rounded-lg transition-colors ${activeTab === tab.id ? 'bg-white shadow-sm' : 'bg-gray-100 group-hover:bg-white'}`}>
                      <TabIcon
                        className={`h-5 w-5 md:h-6 md:w-6 ${activeTab === tab.id ? tab.color : 'text-gray-400'}`}
                        strokeWidth={2}
                      />
                    </div>
                    <div className="hidden md:block">
                      <h3 className={`text-sm font-bold ${activeTab === tab.id ? 'text-gray-900' : 'text-gray-600'}`}>
                        {tab.label}
                      </h3>
                      <p className="text-xs text-gray-400">{tab.description}</p>
                    </div>
                  </div>
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

          {/* --- LEFT COL: DYNAMIC FEATURE CARDS (GIỮ NGUYÊN) --- */}
          <div className="lg:col-span-7 p-6 md:p-10 bg-white space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 animate-in fade-in slide-in-from-left-2 duration-300" key={activeTab}>
                {activeTabConfig.label} Solutions
              </h2>
              <a
                  href="https://app.oriagent.com/apps"
                  target="_blank"
                  rel="noopener noreferrer"
                  
                >
                  <button className="hidden sm:flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors">
                    View details <ArrowRight className="h-3 w-3" />
                  </button>
                </a>
               
              
            </div>

            <div className="space-y-5">
              {activeFeatures.map((feature, idx) => {
                const MainIcon = feature.steps[0].icon
                return (
                  <div
                    key={`${activeTab}-${idx}`}
                    className={`group relative overflow-hidden rounded-2xl border border-gray-100 p-6 transition-all hover:shadow-md
                            ${activeTabConfig.bgColor} bg-opacity-30 hover:bg-opacity-50
                        `}
                  >
                    <div className="relative z-10">
                      <div className="mb-4 flex items-center gap-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ${activeTabConfig.color}`}>
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
                      <div className="mb-6 flex flex-wrap gap-2 sm:gap-3">
                        {feature.steps.map((step, sIdx) => {
                          const StepIcon = step.icon
                          return (
                            <div key={sIdx} className="flex items-center gap-1.5 rounded-md bg-white/60 px-2.5 py-1.5 text-xs font-medium text-gray-600 ring-1 ring-black/5">
                              <StepIcon className={`h-3.5 w-3.5 ${activeTabConfig.color}`} />
                              <span>{step.label}</span>
                            </div>
                          )
                        })}
                      </div>
                        <a
                          href="https://app.oriagent.com/apps"
                          target="_blank"
                          rel="noopener noreferrer"
                          
                        >
                          <button className="flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2 text-sm font-bold text-white transition-transform active:scale-95 hover:bg-gray-800">
                            {feature.cta} <ArrowRight className="h-4 w-4" />
                          </button>
                        </a>
                      
                    </div>
                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white opacity-40 blur-2xl group-hover:opacity-60 transition-opacity"></div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* --- RIGHT COL: ROTATING ANIMATION (ĐÃ SỬA: DYNAMIC THEME) --- */}
          <div className={`lg:col-span-5 border-t lg:border-t-0 lg:border-l border-gray-200 flex flex-col items-center justify-center p-10 relative overflow-hidden transition-colors duration-500 ${currentTheme.panelBg}`}>

            {/* Background Grid Pattern (Thay đổi theo theme) */}
            <div className={`absolute inset-0 bg-[size:24px_24px] opacity-20 ${currentTheme.gridColor}`}></div>

            <div className="relative z-10 flex flex-col items-center space-y-6 text-center w-full max-w-sm">

              <span className={`text-xl font-light transition-colors duration-300 ${currentTheme.textColor}`}>Try using</span>

              {/* Box 1: Agent */}
              <div className="w-full transform transition-all duration-500 hover:scale-105">
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" key={`agent-${offsetIndex}-${activeTab}`}>
                  <div className={`rounded-2xl border p-5 shadow-lg transition-all duration-500 ${currentTheme.box1}`}>
                    <div className={`text-xs font-bold uppercase mb-1 ${currentTheme.label1}`}>Agent</div>
                    <div className="text-2xl sm:text-3xl font-black tracking-tight truncate">{currentContent?.agent || 'Assistant'}</div>
                  </div>
                </div>
              </div>

              <span className={`text-xl font-light transition-colors duration-300 ${currentTheme.textColor}`}>to</span>

              {/* Box 2: Use Case */}
              <div className="w-full transform transition-all duration-500 hover:scale-105 delay-75">
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700" key={`usecase-${offsetIndex}-${activeTab}`}>
                  <div className={`rounded-2xl border p-5 shadow-lg transition-all duration-500 ${currentTheme.box2}`}>
                    <div className={`text-xs font-bold uppercase mb-1 ${currentTheme.label2}`}>Action</div>
                    <div className="text-2xl sm:text-3xl font-black tracking-tight truncate">{currentContent?.useCase || 'Process'}</div>
                  </div>
                </div>
              </div>

              <span className={`text-xl font-light transition-colors duration-300 ${currentTheme.textColor}`}>for your</span>

              {/* Box 3: Goal */}
              <div className="w-full transform transition-all duration-500 hover:scale-105 delay-150">
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000" key={`goal-${offsetIndex}-${activeTab}`}>
                  <div className={`rounded-2xl border p-5 shadow-lg transition-all duration-500 ${currentTheme.box3}`}>
                    <div className={`text-xs font-bold uppercase mb-1 ${currentTheme.label3}`}>Outcome</div>
                    <div className="text-2xl sm:text-3xl font-black tracking-tight truncate">{currentContent?.goal || 'Success'}</div>
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