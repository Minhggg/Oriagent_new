import {
    Bot, Megaphone, DollarSign, Smartphone,
    Lightbulb, Database, Settings, Play,
    Search, FileText, Globe, Users, Mail, Phone,
    Zap, Share2, Users2, BarChart3, PenTool
} from 'lucide-react'

// --- TYPES ---
export interface Step {
    label: string
    icon: any
}

export interface Feature {
    title: string
    description: string
    badge?: string
    steps: Step[]
    cta: string
}

export interface TabConfig {
    id: string
    label: string
    description: string
    icon: any
    color: string       // Text color main
    bgColor: string     // Background nhạt
    borderColor: string // Border
    activeBg: string    // Background khi active
    barColor: string    // Thanh line trên đầu
    theme: string       // Dùng để map style logic nếu cần
}

// --- 1. CONFIG TABS (4 Nút) ---
export const agentTabs: TabConfig[] = [
    {
        id: 'custom',
        label: 'Custom AI Agent',
        description: 'Build your own logic',
        icon: Bot,
        color: 'text-lime-600',
        bgColor: 'bg-lime-100',
        borderColor: 'border-lime-200',
        activeBg: 'bg-[#f7fee7]',
        barColor: 'bg-lime-500',
        theme: 'lime'
    },
    {
        id: 'marketing',
        label: 'Marketing',
        description: 'SEO & Content Growth',
        icon: Megaphone,
        color: 'text-blue-600',
        bgColor: 'bg-blue-100',
        borderColor: 'border-blue-200',
        activeBg: 'bg-blue-50',
        barColor: 'bg-blue-500',
        theme: 'blue'
    },
    {
        id: 'sales',
        label: 'Sales',
        description: 'Outreach & Closing',
        icon: DollarSign,
        color: 'text-orange-600',
        bgColor: 'bg-orange-100',
        borderColor: 'border-orange-200',
        activeBg: 'bg-orange-50',
        barColor: 'bg-orange-500',
        theme: 'orange'
    },
    {
        id: 'chat',
        label: 'Customer Chat',
        description: '24/7 Support',
        icon: Smartphone,
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-100',
        borderColor: 'border-yellow-200',
        activeBg: 'bg-yellow-50',
        barColor: 'bg-yellow-500',
        theme: 'yellow'
    },
]

// --- 2. CONTENT FEATURES (Nội dung chi tiết từng Tab) ---
export const tabContentData: Record<string, Feature[]> = {
    // Tab 1: Custom
    custom: [
        {
            title: 'Build Your Own Agent',
            description: 'Create a specialized AI workforce tailored exactly to your business needs with custom instructions and knowledge bases.',
            badge: 'Flexible',
            steps: [
                { label: 'Define Purpose', icon: Lightbulb },
                { label: 'Upload Knowledge', icon: Database },
                { label: 'Set Tools', icon: Settings },
                { label: 'Deploy', icon: Play }
            ],
            cta: 'Start Building'
        },
        {
            title: 'Multi-agent Orchestration',
            description: 'Connect multiple agents to solve complex workflows autonomously. Example: Research Agent passes data to Writer Agent.',
            badge: 'Advanced',
            steps: [
                { label: 'Assign Roles', icon: Users2 },
                { label: 'Workflow Map', icon: Share2 },
                { label: 'Execute', icon: Zap }
            ],
            cta: 'Explore Teams'
        }
    ],

    // Tab 2: Marketing
    marketing: [
        {
            title: 'SEO Content Generator',
            description: 'Automatically research keywords, outline blogs, write articles, and publish to CMS to drive organic traffic.',
            badge: 'Traffic Booster',
            steps: [
                { label: 'Keyword Research', icon: Search },
                { label: 'Drafting', icon: FileText },
                { label: 'Publishing', icon: Globe }
            ],
            cta: 'Create Campaign'
        },
        {
            title: 'Social Media Manager',
            description: 'Generate viral posts for Twitter/LinkedIn from your blogs and schedule them automatically.',
            badge: 'Viral',
            steps: [
                { label: 'Repurpose Content', icon: Share2 },
                { label: 'Generate Image', icon: PenTool },
                { label: 'Schedule', icon: BarChart3 }
            ],
            cta: 'Auto-Post'
        }
    ],

    // Tab 3: Sales
    sales: [
        {
            title: 'Outbound Sales Bot',
            description: 'Identify potential leads, enrich their data, and send personalized outreach emails at scale.',
            badge: 'Lead Gen',
            steps: [
                { label: 'Scrape Leads', icon: Users },
                { label: 'Enrich Data', icon: Database },
                { label: 'Email Sequence', icon: Mail }
            ],
            cta: 'Find Leads'
        },
        {
            title: 'Meeting Booker',
            description: 'An agent that qualifies leads via email and automatically books meetings into your calendar.',
            badge: 'Closer',
            steps: [
                { label: 'Qualify', icon: Check },
                { label: 'Propose Time', icon: CalendarDays },
                { label: 'Book Slot', icon: Check }
            ],
            cta: 'Connect Calendar'
        }
    ],

    // Tab 4: Chat
    chat: [
        {
            title: 'Support Auto-Pilot',
            description: 'Handle 80% of customer queries instantly with an AI that learns from your documentation and past tickets.',
            badge: '24/7 Active',
            steps: [
                { label: 'Ingest Docs', icon: FileText },
                { label: 'Auto-Reply', icon: Smartphone },
                { label: 'Escalate Human', icon: Phone }
            ],
            cta: 'Setup Chatbot'
        },
        {
            title: 'Product Recommender',
            description: 'Guide visitors to the right product based on their needs through a conversational interface.',
            badge: 'E-commerce',
            steps: [
                { label: 'Ask Needs', icon: Search },
                { label: 'Filter DB', icon: Database },
                { label: 'Suggest', icon: Zap }
            ],
            cta: 'Create Guide'
        }
    ]
}

// --- 3. ROTATING TEXT DATA ---
export const rotatingContent = [
    { agent: '@ContentWriter', useCase: '#PersonaPainMatrix', goal: 'SEO content' },
    { agent: '@SalesBot', useCase: '#LeadScoring', goal: 'qualified leads' },
    { agent: '@SupportGenie', useCase: '#AutoResponse', goal: 'happy customers' },
    { agent: '@DataAnalyst', useCase: '#MarketTrends', goal: 'strategic insights' },
]

// Import thêm icon còn thiếu cho Data file nếu cần để tránh lỗi
import { Check, CalendarDays } from 'lucide-react'