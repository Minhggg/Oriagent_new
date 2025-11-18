// file: AIAgentsSection.tsx
'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { AGENT_TABS, AGENT_CONTENT, ROTATING_CONTENT, type TabId } from '@/components/landing/data' // Import từ file data

export default function AIAgentsSection() {
  const [activeTab, setActiveTab] = useState<TabId>('custom')
  const [contentIndex, setContentIndex] = useState(0)

  // Logic thay đổi text banner bên phải
  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex((prev) => (prev + 1) % ROTATING_CONTENT.length)
    }, 2500) // Đã tăng lên 2.5s cho dễ đọc hơn như gợi ý trước
    return () => clearInterval(interval)
  }, [])

  const currentContent = ROTATING_CONTENT[contentIndex]

  // Lấy danh sách feature dựa trên Tab đang chọn
  const currentFeatures = AGENT_CONTENT[activeTab] || AGENT_CONTENT['custom']

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-slate-50 dark:to-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-foreground mb-4">What can AI Agents do?</h1>
          <p className="text-lg text-muted-foreground">
            Discover the wide range of tasks our AI agents can handle to streamline your workflow and boost efficiency.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {AGENT_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabId)}
              className={`p-4 rounded-lg border-2 transition-all text-left ${activeTab === tab.id
                ? 'bg-green-50 dark:bg-green-950 border-green-300 dark:border-green-700'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                }`}
            >
              <h3 className={`font-bold text-sm ${activeTab === tab.id ? 'text-green-600 dark:text-green-400' : 'text-foreground'}`}>
                {tab.label}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">{tab.description}</p>
            </button>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Dynamic Features List */}
          <div className="rounded-2xl p-8 bg-transparent dark:bg-slate-900 h-fit animate-in fade-in duration-500">
            <div className="flex items-center justify-between mb-12">
              {/* Tiêu đề thay đổi theo Tab */}
              <h2 className="text-4xl font-bold text-foreground">
                {AGENT_TABS.find(t => t.id === activeTab)?.label}
              </h2>
              <Link href="/">
                <Button variant="outline" size="sm" className="gap-2 rounded-2xl">
                  Explore Agents
                </Button>
              </Link>
            </div>

            <div className="space-y-8">
              {currentFeatures.map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div key={`${activeTab}-${idx}`} className="rounded-lg border border-slate-200 dark:border-slate-700 p-4 bg-slate-50 dark:bg-slate-800 animate-in slide-in-from-bottom-2 duration-500 fill-mode-backwards" style={{ animationDelay: `${idx * 100}ms` }}>
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-green-100 dark:bg-green-950 rounded-lg">
                        <Icon className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-base font-bold text-foreground">{feature.title}</h3>
                          {feature.badge && (
                            <span className="text-xs bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 px-2 py-1 rounded">
                              {feature.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">{feature.description}</p>
                      </div>
                    </div>

                    {/* Steps */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {feature.steps.map((step, i) => (
                        <span
                          key={i}
                          className="text-xs bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded-full flex items-center gap-1"
                        >
                          <span className="w-3 h-3 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                            {i + 1}
                          </span>
                          {step}
                        </span>
                      ))}
                    </div>

                    {feature.cta && (
                      <Button size="sm" className="bg-black hover:bg-slate-900 dark:bg-white dark:hover:bg-slate-200 dark:text-black text-white">
                        {feature.cta}
                      </Button>
                    )}
                  </div>
                )
              })}
            </div>

            {/* CTA Section */}
            <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800">
              <p className="text-xs text-muted-foreground mb-3">Need a custom {activeTab} workflow? We can help you build it.</p>
              <div className="flex flex-wrap gap-2">
                <Button size="sm" className="bg-green-500 hover:bg-green-600 flex-1 text-white font-semibold">
                  Book a call
                </Button>
                <Button variant="outline" size="sm" className="flex-1">Email us</Button>
              </div>
            </div>
          </div>

          {/* Right Column - Auto-rotating Use Case Banner */}
          {/* Phần này giữ nguyên logic cũ, chỉ thay đổi nhẹ style để khớp với context */}
          <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-green-50 dark:from-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-700 p-12 flex flex-col justify-center items-center min-h-[600px] sticky top-24">
            <p className="text-sm text-muted-foreground mb-16">Try using</p>

            <div className="space-y-6 flex flex-col justify-center items-center text-center w-full">
              <div key={`agent-${contentIndex}`} className="animate-in fade-in zoom-in-95 duration-500">
                <p className="text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                  {currentContent.agent}
                </p>
              </div>

              <p className="text-muted-foreground text-lg">to</p>

              <div key={`usecase-${contentIndex}`} className="animate-in fade-in zoom-in-95 duration-500">
                <p className="text-3xl font-bold px-6 py-3 bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 rounded-lg">
                  {currentContent.useCase}
                </p>
              </div>

              <p className="text-muted-foreground text-lg">for your</p>

              <div key={`goal-${contentIndex}`} className="animate-in fade-in zoom-in-95 duration-500">
                <p className="text-3xl font-bold text-green-500">
                  {currentContent.goal}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}