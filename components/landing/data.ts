// file: data.ts
import {
    Sparkles, Users2, Calendar,
    Megaphone, PenTool, BarChart3,
    Target, Mail, Search,
    MessageSquare, Bot, FileText
} from 'lucide-react'

export const AGENT_TABS = [
    { id: 'custom', label: 'Custom AI Agent', description: 'Your fully customizable AI agent' },
    { id: 'marketing', label: 'Marketing', description: 'SEO • Content • Social' },
    { id: 'sales', label: 'Sales', description: 'Prospect • Enrichment • Outreach' },
    { id: 'chat', label: 'Chat', description: 'Anything else you need help with' },
] as const;

export type TabId = typeof AGENT_TABS[number]['id'];

export const ROTATING_CONTENT = [
    { agent: '@SEOSpecialist', useCase: '#PersonaPainMatrix', goal: 'social media plan' },
    { agent: '@WorkingHard', useCase: '#ContentStrategy', goal: 'marketing campaign' },
    { agent: '@MarketingPro', useCase: '#BrandVoice', goal: 'email sequence' },
    { agent: '@SalesWizard', useCase: '#LeadQualification', goal: 'prospect list' },
    { agent: '@DataAnalyst', useCase: '#InsightGeneration', goal: 'performance report' },
];

export const AGENT_CONTENT = {
    custom: [
        {
            icon: Sparkles,
            title: 'Custom AI Agent',
            description: 'Create your own specialized AI agent with custom instructions, knowledge, and tools to handle specific tasks for your business.',
            steps: ['Define Purpose', 'Set Instructions', 'Add Knowledge', 'Configure Tools', 'Deploy & Use'],
            cta: 'Create Agent',
        },
        {
            icon: Users2,
            title: 'Multi-agent Teams',
            description: 'Build teams of specialized AI agents that work together to accomplish complex tasks with collaborative problem-solving.',
            steps: ['Define Roles', 'Set Workflows', 'Create Tasks', 'Monitor Progress', 'Review Output'],
            badge: 'Coming soon',
        },
        {
            icon: Calendar,
            title: 'Agent Scheduler',
            description: 'Schedule your AI agents to run tasks automatically at specific times.',
            steps: ['Define Task', 'Set Schedule', 'Select Agent', 'Configure Output', 'Activate'],
            badge: 'Coming soon',
        },
    ],
    marketing: [
        {
            icon: Megaphone,
            title: 'Social Media Manager',
            description: 'Auto-generate and schedule engaging posts across LinkedIn, Twitter, and Instagram based on your brand voice.',
            steps: ['Connect Accounts', 'Upload Brand Kit', 'Set Topics', 'Review Calendar', 'Auto-Publish'],
            cta: 'Start Campaign',
        },
        {
            icon: PenTool,
            title: 'SEO Content Writer',
            description: 'Research keywords and write full SEO-optimized blog posts that rank high on Google.',
            steps: ['Keyword Research', 'Outline Generation', 'Drafting', 'SEO Optimization', 'Publish to CMS'],
        },
        {
            icon: BarChart3,
            title: 'Ad Performance Analyst',
            description: 'Analyze your ad spend and performance to provide actionable insights for better ROI.',
            steps: ['Connect Ads Mgr', 'Analyze Data', 'Identify Trends', 'Suggest Changes', 'Optimize'],
            badge: 'Beta',
        },
    ],
    sales: [
        {
            icon: Search,
            title: 'Lead Researcher',
            description: 'Automatically find and enrich potential leads from LinkedIn and the web matching your ICP.',
            steps: ['Define ICP', 'Scrape Sources', 'Enrich Data', 'Verify Emails', 'Export List'],
            cta: 'Find Leads',
        },
        {
            icon: Mail,
            title: 'Outreach Specialist',
            description: 'Send personalized cold email sequences that actually get replies.',
            steps: ['Upload Leads', 'Draft Templates', 'Personalize', 'Schedule Send', 'Track Replies'],
        },
        {
            icon: Target,
            title: 'CRM Sync Agent',
            description: 'Keep your CRM updated by automatically logging calls, emails, and meeting notes.',
            steps: ['Connect CRM', 'Monitor Comms', 'Extract Info', 'Update Records', 'Notify Team'],
            badge: 'Popular',
        },
    ],
    chat: [
        {
            icon: Bot,
            title: 'Customer Support Bot',
            description: 'Handle 80% of customer queries instantly 24/7 with a bot trained on your docs.',
            steps: ['Upload Docs', 'Train Model', 'Embed Widget', 'Answer Queries', 'Escalate to Human'],
            cta: 'Build Bot',
        },
        {
            icon: FileText,
            title: 'Document Analyst',
            description: 'Chat with your PDF, CSV, or Notion docs to extract insights instantly.',
            steps: ['Upload Files', 'Index Content', 'Ask Questions', 'Get Citations', 'Summarize'],
        },
        {
            icon: MessageSquare,
            title: 'Internal Assistant',
            description: 'An all-in-one assistant for your team to schedule meetings and find internal info.',
            steps: ['Integrate Slack', 'Connect Calendar', 'Set Permissions', 'Receive Commands', 'Execute'],
            badge: 'Coming soon',
        },
    ],
};