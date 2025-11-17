import { Badge } from '@/components/ui/badge'
import { Bot, Zap, Users, Workflow, Database, ChartColumnIncreasing } from 'lucide-react'

export function ToolkitSection() {
  const features = [
    {
      icon: Bot,
      title: 'Custom AI Agents',
      description: "We don't give you a dashboard — we give you an AI agent that does the work for you. Built around your exact workflow. Tailored for your team.",
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'From onboarding flows to multi-step marketing ops — if it\'s repeatable, we automate it. Fully custom. Fully hands-off.',
    },
    {
      icon: Workflow,
      title: 'Seamless Integrations',
      description: 'Your agent connects to the tools you already use — CRMs, email platforms, databases, docs. No rip and replace.',
    },
    {
      icon: Database,
      title: 'Data Analysis on Autopilot',
      description: 'Let your agent handle the numbers. Get instant insights from every data silo — without touching a spreadsheet.',
    },
    {
      icon: ChartColumnIncreasing,
      title: 'Performance Optimization',
      description: 'We don\'t just build and bounce. We monitor, refine, and upgrade your agents for better speed, accuracy, and ROI.',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'You get a human in the loop — always. Strategy calls, implementation help, and ongoing guidance from our AI automation experts.',
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-lime-300 text-lime-900 hover:bg-lime-400">
            AI Toolkit
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Team of AI Agents, Without the Overhead
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every service in our Done-For-You plan is designed to automate the busywork, amplify your output, and free your team to do what they do best.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="flex flex-col gap-3 p-6 rounded-lg border border-gray-200 bg-gray-50 hover:bg-white transition-colors"
              >
                <Icon className="w-8 h-8 text-gray-800" />
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
