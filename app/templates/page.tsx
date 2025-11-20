"use client"

import { useState } from "react"
import type * as React from "react"
import {
  Users,
  CheckSquare,
  Wrench,
  PenTool,
  Send,
  Search,
  FileText,
  CheckCircle2,
  Loader2,
  Sparkles,
  ArrowRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

// --- Types ---
// (Giữ nguyên như cũ)
interface TeamTemplate {
  id: string
  title: string
  description: string
  members: number
  tasks: number
  tools: number
}

interface AgentTask {
  id: string
  title: string
  description: string
}

interface AgentTemplate {
  id: string
  title: string
  role: string
  icon: React.ElementType
  goal: string
  backstory: string
  tasks: AgentTask[]
}

// --- Mock Data ---
// (Giữ nguyên như cũ)
const teamTemplates: TeamTemplate[] = [
  {
    id: "1",
    title: "SEO Content Engine",
    description:
      "End-to-end crew that discovers keywords, analyses SERP gaps, drafts long-form content, and polishes it for on-page SEO.",
    members: 5,
    tasks: 5,
    tools: 6,
  },
  {
    id: "2",
    title: "Social Trend Scraper Squad",
    description:
      "Scrape TikTok/Instagram for emerging trends, compute engagement insights, validate momentum, and generate creative hooks.",
    members: 4,
    tasks: 4,
    tools: 6,
  },
  {
    id: "3",
    title: "Deep-Dive Research Hub",
    description:
      "Comprehensive research workflow that gathers authoritative sources, extracts facts, synthesizes insights, and crafts executive narratives.",
    members: 4,
    tasks: 4,
    tools: 6,
  },
  {
    id: "4",
    title: "Lead Generation Engine",
    description:
      "Comprehensive B2B lead generation workflow that finds prospects, enriches contact data, and crafts personalized outreach.",
    members: 3,
    tasks: 3,
    tools: 7,
  },
  {
    id: "5",
    title: "Content Marketing Squad",
    description:
      "Multi-format content creation team that produces blog posts, social media content, and visual assets for comprehensive marketing campaigns.",
    members: 4,
    tasks: 4,
    tools: 9,
  },
]

const agentTemplates: AgentTemplate[] = [
  {
    id: "writer",
    title: "ContentWriter",
    role: "Technical Blog Writer (B2B SaaS)",
    icon: PenTool,
    goal: "Deliver SEO-optimised content that generates pipeline and boosts conversions.",
    backstory: "You translate complex SaaS topics into clear, compelling content that ranks.",
    tasks: [
      { id: "t1", title: "HeadlinePack", description: "Use WebSearchTool to..." },
      { id: "t2", title: "WriteEmail", description: "Compose a 3-paragraph..." },
      { id: "t3", title: "WriteBlogPost", description: "Draft a 1000-1500 word post..." },
      { id: "t4", title: "WriteTweet", description: "Generate five tweets (≤ 280..." },
    ],
  },
  {
    id: "outreach",
    title: "OutreachSpecialist",
    role: "Cold-Outreach Copywriter (B2B)",
    icon: Send,
    goal: "Book qualified demos via high-reply cold email & LinkedIn sequences.",
    backstory: "You obsess over reply rates and deep personalisation.",
    tasks: [
      { id: "t1", title: "PersonPainMat...", description: "List top three pain points..." },
      { id: "t2", title: "LinkedInMessag...", description: "Write a connection request..." },
      { id: "t3", title: "EmailSequence...", description: "Create a 3-touch sequence..." },
      { id: "t4", title: "ResponseTempl...", description: "Provide positive-reply and..." },
    ],
  },
  {
    id: "seo",
    title: "SEOSpecialist",
    role: "Technical SEO Optimiser",
    icon: Search,
    goal: "Rank target pages in top-10 SERP within 90 days.",
    backstory: "Data-driven SEO pro leveraging advanced tooling.",
    tasks: [
      { id: "t1", title: "SEOQuickAudit", description: "Use DataForSEODom..." },
      { id: "t2", title: "KeywordResearch", description: "Research keywords for..." },
      { id: "t3", title: "ContentOptimiz...", description: "Audit {page_url} for..." },
    ],
  },
  {
    id: "strategist",
    title: "ContentStrategist",
    role: "B2B Content Strategist",
    icon: FileText,
    goal: "Grow organic traffic by 30% and generate qualified leads in six months.",
    backstory: "Ex-editor mapping content to revenue touchpoints.",
    tasks: [
      { id: "t1", title: "QuickIdeaSnaps...", description: "Generate {amount} high-impact..." },
      { id: "t2", title: "ContentCalendar", description: "Build a 3-month calendar..." },
    ],
  },
]

// --- Components ---

function TeamCard({ team }: { team: TeamTemplate }) {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl">
      {/* Decorative gradient blob on hover */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-white opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div>
        <div className="mb-5 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 shadow-inner transition-transform group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white">
            <Users className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-700">{team.title}</h3>
            <div className="flex items-center gap-1 text-xs font-medium text-slate-400">
               <span>Template</span>
               <span className="h-1 w-1 rounded-full bg-slate-300"></span>
               <span>v1.0</span>
            </div>
          </div>
        </div>
        <p className="mb-6 text-sm leading-relaxed text-slate-500">{team.description}</p>
      </div>

      <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-xs font-medium text-slate-600 group-hover:bg-white group-hover:shadow-sm">
        <div className="flex items-center gap-1.5" title="Members">
          <Users className="h-4 w-4 text-blue-500" />
          <span>{team.members} Members</span>
        </div>
        <div className="h-4 w-px bg-slate-200"></div>
        <div className="flex items-center gap-1.5" title="Tasks">
          <CheckSquare className="h-4 w-4 text-green-500" />
          <span>{team.tasks} Tasks</span>
        </div>
        <div className="h-4 w-px bg-slate-200"></div>
        <div className="flex items-center gap-1.5" title="Tools">
          <Wrench className="h-4 w-4 text-orange-500" />
          <span>{team.tools} Tools</span>
        </div>
      </div>
    </div>
  )
}

function AgentCard({ agent }: { agent: AgentTemplate }) {
  const Icon = agent.icon

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-violet-200 hover:shadow-xl lg:flex-row">
      {/* Left Column: Agent Info */}
      <div className="flex flex-1 flex-col border-b border-slate-100 bg-white p-6 lg:w-1/3 lg:border-b-0 lg:border-r">
        <div className="mb-6">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100 text-violet-600 ring-4 ring-violet-50">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
                <h3 className="font-bold text-slate-900">{agent.title}</h3>
                <div className="flex items-center gap-1 text-xs text-violet-600">
                    <Sparkles className="h-3 w-3" />
                    <span>AI Agent</span>
                </div>
            </div>
          </div>
          <p className="text-sm font-medium text-slate-500">{agent.role}</p>
        </div>

        <div className="mb-4 flex-1 space-y-3">
          <div className="rounded-xl bg-slate-50 p-3.5 transition-colors group-hover:bg-violet-50/50">
            <span className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-400">Goal</span>
            <p className="text-sm leading-snug text-slate-700">{agent.goal}</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-3.5 transition-colors group-hover:bg-violet-50/50">
            <span className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-400">Backstory</span>
            <p className="text-sm leading-snug text-slate-600">{agent.backstory}</p>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between gap-2 pt-2">
          <div className="flex items-center gap-2 rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 border border-green-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Active
          </div>
          <button className="flex items-center gap-1 text-xs font-semibold text-violet-600 hover:text-violet-700 hover:underline">
             View Details <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>

      {/* Right Column: Tasks Grid */}
      <div className="relative flex-1 bg-slate-50/50 p-6">
        <div className="mb-3 flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Assigned Capabilities</h4>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {agent.tasks.map((task) => (
            <div
              key={task.id}
              className="relative flex flex-col justify-between rounded-xl border border-slate-100 bg-white p-3 shadow-sm transition-all hover:border-violet-200 hover:shadow-md"
            >
              <div>
                <h4 className="mb-1 text-sm font-semibold text-slate-800">{task.title}</h4>
                <p className="line-clamp-2 text-xs text-slate-500">{task.description}</p>
              </div>
              <div className="mt-3 flex justify-end">
                 <div className="rounded-full bg-slate-100 p-1 text-slate-400 transition-colors hover:bg-violet-100 hover:text-violet-600">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                 </div>
              </div>
            </div>
          ))}
        </div>
        {/* Decorative Loader Icon */}
        <div className="absolute bottom-4 right-4 opacity-20">
          <Loader2 className="h-12 w-12 animate-spin text-slate-400" />
        </div>
      </div>
    </div>
  )
}

export default function TemplatesPage() {
  const [activeTab, setActiveTab] = useState<"agent" | "team">("team")

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-12 md:px-8 lg:px-12 font-sans text-slate-900">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                 Library <span className="text-indigo-600">Templates</span>
                </h1>
                <p className="mt-2 text-slate-500 max-w-2xl">
                    Deploy ready-made AI crews and specialized agents to automate your workflows instantly.
                </p>
            </div>

            {/* Improved Tabs */}
            <div className="inline-flex items-center rounded-xl bg-slate-200/60 p-1.5">
            <button
                onClick={() => setActiveTab("team")}
                className={cn(
                "flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 ease-out",
                activeTab === "team"
                    ? "bg-white text-indigo-600 shadow-md ring-1 ring-slate-200"
                    : "text-slate-500 hover:bg-slate-200/50 hover:text-slate-700",
                )}
            >
                <Users className="h-4 w-4" />
                Crews & Teams
            </button>
            <button
                onClick={() => setActiveTab("agent")}
                className={cn(
                "flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 ease-out",
                activeTab === "agent"
                    ? "bg-white text-violet-600 shadow-md ring-1 ring-slate-200"
                    : "text-slate-500 hover:bg-slate-200/50 hover:text-slate-700",
                )}
            >
                <Sparkles className="h-4 w-4" />
                Individual Agents
            </button>
            </div>
        </div>

        {/* Content */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          {activeTab === "team" ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {teamTemplates.map((team) => (
                <TeamCard key={team.id} team={team} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {agentTemplates.map((agent) => (
                <AgentCard key={agent.id} agent={agent} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}