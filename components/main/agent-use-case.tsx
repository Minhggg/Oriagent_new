'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button' // Giả định bạn có component UI này hoặc dùng thẻ button thường
import {
  Sparkles, Users2, Calendar, ArrowRight, Mail, CalendarDays,
  Lightbulb, FileText, Database, Settings, Play, Search, Share2, LayoutTemplate,
  Brain

} from 'lucide-react'
import Link from 'next/link'

// Data cho Tabs
const agentTabs = [
  { id: 'custom', label: 'Custom AI Agent', description: 'Your fully customizable AI agent' },
  { id: 'marketing', label: 'Marketing', description: 'SEO • Content • Social' },
  { id: 'sales', label: 'Sales', description: 'Prospect • Enrichment • Outreach' },
  { id: 'chat', label: 'Chat', description: 'Anything else you need help with' },
]

// Data cho nội dung bên trái
const agentFeatures = [
  {
    icon: Brain,
    title: 'Custom AI Agent',
    description: 'Create your own specialized AI agent with custom instructions, knowledge, and tools to handle specific tasks for your business.',
    // Map icon cho từng step giả lập
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
    icon: Users2,
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

// Data cho Animation bên phải (Khớp màu ảnh: Tím -> Xanh -> Vàng)
const rotatingContent = [
  { agent: '@ContentWriter', useCase: '#PersonaPainMatrix', goal: 'SEO content' },
  { agent: '@SalesBot', useCase: '#LeadScoring', goal: 'qualified leads' },
  { agent: '@SupportGenie', useCase: '#AutoResponse', goal: 'happy customers' },
]

export function AIAgentsSection() {
  const [activeTab, setActiveTab] = useState('custom')
  const [contentIndex, setContentIndex] = useState(0)

  // Hiệu ứng chuyển chữ bên phải
  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex((prev) => (prev + 1) % rotatingContent.length)
    }, 2500) // Chậm lại chút cho dễ đọc
    return () => clearInterval(interval)
  }, [])

  const currentContent = rotatingContent[contentIndex]

  return (
    <section className="pb-20 pt-0 bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl border-x border-gray-200 px-0 py-16 text-center">

        {/* --- HEADER --- */}
        <div className="mb-16 text-center max-w-3xl mx-auto ">
          {/* Tag Use Cases */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0fdf4] border border-[#dcfce7] text-xs font-bold text-green-600 uppercase tracking-wide">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Use Cases
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            What can AI Agents{' '}
            <span className="relative inline-block">
              do?
              {/* Gạch chân màu vàng chanh */}
              <span className="absolute bottom-1 left-0 w-full h-3 bg-[#bef264] -z-10 transform -rotate-1"></span>
            </span>
          </h1>
          <p className="text-lg text-gray-500">
            Discover the wide range of tasks our AI agents can handle to streamline your workflow and boost efficiency.
          </p>
        </div>

        {/* --- TABS --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 border-y border-gray-200 divide-y md:divide-y-0 md:divide-x divide-gray-200  ">
          {agentTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-6 text-left transition-colors relative group h-full
                ${activeTab === tab.id ? 'bg-[#f7fee7]' : 'bg-white hover:bg-gray-50'}
              `}
            >
              {/* Border top highlight cho tab active */}
              {activeTab === tab.id && (
                <div className="absolute top-0 left-0 w-full h-1 bg-[#bef264]"></div>
              )}
              <h3 className={`font-bold text-sm mb-1 ${activeTab === tab.id ? 'text-gray-900' : 'text-gray-900'}`}>
                {tab.label}
              </h3>
              <p className="text-xs text-gray-500">{tab.description}</p>
            </button>
          ))}
        </div>

        {/* --- CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:divide-x divide-gray-200 border-b border-gray-200  ">

          {/* === LEFT COLUMN: List Features === */}
          <div className="pr-0 lg:pr-12 space-y-10 px-6 my-12 lg:py-0">
            {/* Header Left */}
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-medium text-gray-900">Custom AI Agents</h2>
              <button className="px-4 py-1.5 text-xs font-medium border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                Explore Agents
              </button>
            </div>

            {/* Cards Loop */}
            <div className="space-y-6">
              {agentFeatures.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  // 1. Sửa class để cả 3 card giống hệt nhau (bg-white, border-gray-200)
                  <div
                    key={idx}
                    className="flex flex-col px-6 py-4 rounded-xl border border-gray-50 bg-yellow-50/10 transition-all hover:border-gray-300"
                  >
                    {/* Phần trên: Icon + Title + Description */}
                    <div className="w-full mb-2">

                      {/* 1. Header: Icon + Title nằm cùng 1 dòng */}
                      <div className="flex items-center gap-3 mb-3">
                        {/* Icon Wrapper */}
                        <div className={`p-1.5 rounded-md h-fit `}>
                          <Icon className="w-5 h-5" /> {/* Tăng size icon lên chút cho cân đối với Title */}
                        </div>

                        {/* Title & Badge */}
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-sm text-gray-900">{feature.title}</h3>
                          {feature.badge && (
                            <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] font-semibold rounded-full uppercase tracking-wide">
                              {feature.badge}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* 2. Description: Xuống dòng, full width, sát lề trái */}
                      <p className="text-xs text-left text-gray-500 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Steps: Vẫn giữ thụt đầu dòng cho đẹp mắt (thẳng với text ở trên) */}
                    <div className="flex flex-wrap gap-x-2 gap-y-2 mb-2 ">
                      {feature.steps.map((step, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-x-1  font-bold rounded-2xl  px-1 py-0.5">
                          <step.icon className="w-3 h-3 text-orange-400" />
                          <span className="text-xs text-gray-500">{step.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Button: Nằm cuối cùng và Căn trái tuyệt đối (Bỏ padding-left) */}
                    {feature.cta && (
                      <div className="mt-0 pt-1 pb-0 text-left">
                        <button className="px-2 py-1 bg-black text-white text-xs font-mono rounded-full hover:bg-gray-800 transition-colors">
                          {feature.cta}
                        </button>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Footer Box (Giữ nguyên) */}
            <div className="mt-0 pt-0 p-6 bg-transparent">
              <p className="text-sm text-left text-gray-600 mb-4">
                If you have a specific usecase in mind, we can help you build a custom solution.
              </p>
              <div className="flex gap-3">
                <button className="flex-1 px-4 py-2.5 bg-[#bef264] text-gray-600 text-sm font-semibold rounded-full hover:bg-[#aacc2e] transition-colors">
                  Book a call
                </button>
                <button className="flex-1 px-4 py-2.5 bg-white border border-gray-200 text-gray-900 text-sm font-semibold rounded-full hover:bg-gray-50 transition-colors">
                  Email us
                </button>
              </div>
            </div>
          </div>

          {/* === RIGHT COLUMN: Dynamic Visualization === */}
          <div className="hidden lg:flex flex-col justify-center items-center pl-0 lg:pl-12 min-h-[600px] px-3 py-6 lg:py-0">
            <div className="flex flex-col items-center space-y-6">
              <span className="text-2xl text-gray-400 font-light">Try using</span>

              {/* Purple Pill */}
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" key={`agent-${contentIndex}`}>
                <div className="px-8 py-4 bg-purple-100 rounded-2xl text-3xl font-bold text-purple-600 shadow-sm">
                  {currentContent.agent}
                </div>
              </div>

              <span className="text-2xl text-gray-400 font-light">to</span>

              {/* Blue Pill */}
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700" key={`usecase-${contentIndex}`}>
                <div className="px-8 py-4 bg-blue-100 rounded-2xl text-3xl font-bold text-blue-600 shadow-sm">
                  {currentContent.useCase}
                </div>
              </div>

              <span className="text-2xl text-gray-400 font-light">for your</span>

              {/* Yellow Pill */}
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000" key={`goal-${contentIndex}`}>
                <div className="px-8 py-4 bg-amber-100 rounded-2xl text-3xl font-bold text-amber-600 shadow-sm">
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