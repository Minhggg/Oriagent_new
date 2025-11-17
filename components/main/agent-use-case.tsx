// components/main/AgentUseCases.tsx
'use client'

import { useState, useEffect } from 'react'
import {
  Sparkles, Users, Calendar, Lightbulb, FileText, Users2,
  Database, Settings, Play, Search, Share2, LayoutTemplate, CalendarDays,
  // Import thêm các icon cho Tabs
  Bot, Megaphone, DollarSign, Smartphone, Check, Phone, Mail
} from 'lucide-react'

// --- DATA ---
// Cập nhật thêm Icon và Class màu sắc cho từng Tab để giống ảnh
const agentTabs = [
  {
    id: 'custom',
    label: 'Custom AI Agent',
    description: 'Your fully customizable AI agent',
    icon: Bot,
    colorClass: 'text-lime-500' // Màu xanh lá (Robot)
  },
  {
    id: 'marketing',
    label: 'Marketing',
    description: 'SEO • Content • Social',
    icon: Megaphone,
    colorClass: 'text-blue-500' // Màu xanh dương (Loa)
  },
  {
    id: 'sales',
    label: 'Sales',
    description: 'Prospect • Enrichment • Outreach',
    icon: DollarSign,
    colorClass: 'text-orange-500' // Màu cam ($)
  },
  {
    id: 'chat',
    label: 'Chat',
    description: 'Anything else you need help with',
    icon: Smartphone, // Hoặc Tablet
    colorClass: 'text-yellow-500' // Màu vàng (Điện thoại)
  },
]

// ... (Giữ nguyên phần agentFeatures và rotatingContent) ...
const agentFeatures = [
  {
    icon: Bot,
    title: 'Custom AI Agent',
    description: 'Create your own specialized AI agent with custom instructions, knowledge, and tools to handle specific tasks for your business.',
    steps: [
      { label: 'Define Purpose', icon: Lightbulb },
      { label: 'Set Instructions', icon: FileText },
      { label: 'Add Knowledge', icon: Database },
      { label: 'Configure Tools', icon: Settings },
      { label: 'Deploy & Use', icon: Play }
    ],
    cta: 'Create Agent',
    badge: null,
    active: true
  },
  {
    icon: Users,
    title: 'Multi-agent Teams',
    description: 'Build teams of specialized AI agents that work together to accomplish complex tasks with collaborative problem-solving.',
    steps: [
      { label: 'Define Roles', icon: Users2 },
      { label: 'Set Workflows', icon: Share2 },
      { label: 'Create Tasks', icon: FileText },
      { label: 'Monitor Progress', icon: Search },
      { label: 'Review Output', icon: LayoutTemplate }
    ],
    badge: 'Coming soon',
    active: false
  },
  {
    icon: Calendar,
    title: 'Agent Scheduler',
    description: 'Schedule your AI agents to run tasks automatically at specific times, delivering results via email or your preferred channel.',
    steps: [
      { label: 'Define Task', icon: FileText },
      { label: 'Set Schedule', icon: CalendarDays },
      { label: 'Select Agent', icon: Users2 },
      { label: 'Configure Output', icon: Settings },
      { label: 'Activate', icon: Play }
    ],
    badge: 'Coming soon',
    active: false
  },
]

const rotatingContent = [
  { agent: '@ContentWriter', useCase: '#PersonaPainMatrix', goal: 'SEO content' },
  { agent: '@SalesBot', useCase: '#LeadScoring', goal: 'qualified leads' },
  { agent: '@SupportGenie', useCase: '#AutoResponse', goal: 'happy customers' },
]

export function AIAgentsSection() {
  const [activeTab, setActiveTab] = useState('custom')
  const [contentIndex, setContentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex((prev) => (prev + 1) % rotatingContent.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const currentContent = rotatingContent[contentIndex]

  return (
    <section className="">

      <div className="mx-auto max-w-7xl border-x border-b  border-gray-200 bg-white">

        {/* --- 1. HEADER --- */}
        <div className="px-8 py-12 lg:py-16 text-center">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f0fdf4] px-3 py-1 text-xs font-bold tracking-wide text-green-600 uppercase border border-[#dcfce7]">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Use Cases
            </span>
          </div>

          <h1 className="mb-6 text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            What can AI Agents{' '}
            <span className="relative inline-block">
              do?
              <span className="absolute -z-10 bottom-1 left-0 h-3 w-full -rotate-1 transform bg-[#bef264]"></span>
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-base lg:text-lg text-gray-500">
            Discover the wide range of tasks our AI agents can handle to streamline your workflow and boost efficiency.
          </p>
        </div>

        {/* --- 2. TABS (Đã sửa responsive) --- */}
        {/* grid-cols-4 áp dụng cho cả mobile để luôn nằm ngang */}
        <div className="grid grid-cols-4 divide-x divide-gray-200 border-y border-gray-200">
          {agentTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group relative h-full transition-colors
                /* Padding khác nhau cho mobile/desktop */
                p-4 md:p-6 text-left 
                ${activeTab === tab.id ? 'bg-[#f7fee7]' : 'bg-white hover:bg-gray-50'}
              `}
            >
              {/* Highlight bar active: Chỉ hiện trên desktop hoặc nếu thích thì hiện cả mobile */}
              {activeTab === tab.id && (
                <div className="absolute left-0 top-0 h-1 w-full bg-[#bef264]"></div>
              )}

              {/* --- CONTENT CHO MOBILE (Chỉ hiện Icon ở giữa) --- */}
              <div className="flex items-center justify-center md:hidden">
                <tab.icon
                  className={`h-6 w-6 ${activeTab === tab.id ? tab.colorClass : 'text-gray-400'}`}
                  strokeWidth={2.5}
                />
              </div>

              {/* --- CONTENT CHO DESKTOP (Ẩn trên mobile) --- */}
              <div className="hidden md:block">
                <h3 className="mb-1 text-sm font-bold text-gray-900">
                  {tab.label}
                </h3>
                <p className="text-xs text-gray-500">{tab.description}</p>
              </div>
            </button>
          ))}
        </div>

        {/* --- 3. CONTENT GRID --- */}
        <div className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-2 lg:divide-x lg:divide-y-0">

          {/* Left Column */}
          <div className="space-y-8 p-6 lg:p-10">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Custom AI Agents</h2>
              <button className="rounded-full border border-gray-300 px-4 py-1.5 text-xs font-medium transition-colors hover:bg-gray-50">
                Explore Agents
              </button>
            </div>

            <div className="space-y-6">
              {agentFeatures.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="flex flex-col rounded-xl bg-[#d4e8b1e3] hover:border-gray-300 py-3 px-5">

                    {/* Header: Icon + Title */}
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-fit items-center justify-center rounded-md bg-purple-50 p-2 text-purple-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                        {feature.badge && (
                          <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-gray-600">
                            {feature.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mb-6 text-left text-sm leading-relaxed text-gray-500">
                      {feature.description}
                    </p>

                    {/* Steps */}
                    <div className="mb-6 flex flex-wrap gap-x-4 gap-y-3">
                      {feature.steps.map((step, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs font-medium text-gray-500">
                          <step.icon className="h-3.5 w-3.5 text-orange-400" />
                          <span>{step.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Button */}
                    {feature.cta && (
                      <div className="mt-auto">
                        <button className="rounded-full bg-black px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-gray-800">
                          {feature.cta}
                        </button>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Footer Box */}
            <div className="rounded-xl ">
              <p className="mb-4 text-sm text-gray-600">
                If you have a specific usecase in mind, we can help you build a custom solution.
              </p>
              <div className="flex gap-3">
                <button className="flex-1 rounded-full bg-[#c4f20c] px-4 py-2.5 text-sm font-medium text-[#606e28] transition-colors hover:bg-[#aacc2e] flex items-center justify-center gap-2">
                  <Smartphone className='h-4 w-4' />Book a call
                </button>
                <button className="flex-1 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 flex items-center justify-center gap-2">
                  <Mail className='h-4 w-4' /> Email us
                </button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="hidden min-h-[600px] flex-col items-center justify-center bg-white p-8 lg:flex">
            <div className="flex flex-col items-center space-y-6">
              <span className="text-2xl font-light text-gray-400">Try using</span>

              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" key={`agent-${contentIndex}`}>
                <div className="rounded-2xl bg-purple-100 px-8 py-4 text-3xl font-bold text-purple-600 shadow-sm">
                  {currentContent.agent}
                </div>
              </div>

              <span className="text-2xl font-light text-gray-400">to</span>

              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700" key={`usecase-${contentIndex}`}>
                <div className="rounded-2xl bg-blue-100 px-8 py-4 text-3xl font-bold text-blue-600 shadow-sm">
                  {currentContent.useCase}
                </div>
              </div>

              <span className="text-2xl font-light text-gray-400">for your</span>

              <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000" key={`goal-${contentIndex}`}>
                <div className="rounded-2xl bg-amber-100 px-8 py-4 text-3xl font-bold text-amber-600 shadow-sm">
                  {currentContent.goal}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}