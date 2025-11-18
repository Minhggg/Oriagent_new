'use client'

import { useState } from 'react'
import { ChevronDown, Plus, Minus } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

// Dữ liệu câu hỏi (Chia làm 2 cột như trong ảnh)
const faqData = [
  // Cột Trái
  [
    {
      q: "What are AI Agents?",
      a: "AI Agents are autonomous software programs capable of observing their environment, making decisions, and taking actions to achieve specific goals without constant human intervention."
    },
    {
      q: "What's the difference between AI Agent and ChatGPT?",
      a: "ChatGPT is a passive chatbot that responds to prompts. AI Agents are active systems that can execute tasks, use tools, and run workflows autonomously based on a goal."
    },
    {
      q: "What's the difference between AI Agent and AutoGPT?",
      a: "AutoGPT is an open-source experiment demonstrating the capabilities of the GPT-4 language model. It is one type of AI Agent, but 'AI Agent' is a broader category encompassing many architectures."
    },
    {
      q: "What's the difference between AI Agent and babyAGI?",
      a: "BabyAGI is a simplified AI agent framework focused on task management and execution loops. It's a specific implementation, whereas AI Agent is the general term."
    },
    {
      q: "Is AI Agent free to use?",
      a: "It depends. Some open-source frameworks are free, but enterprise-grade AI Agents usually require a subscription or usage-based fees for the underlying LLM (like GPT-4) and hosting."
    },
    {
      q: "How do AI agents differ from traditional chatbots?",
      a: "Traditional chatbots follow rigid scripts or simple pattern matching. AI Agents use LLMs to understand context, plan complex actions, and interact with external APIs/tools."
    },
    {
      q: "What are the common applications of AI agents in business?",
      a: "Common uses include automated customer support, lead generation, market research, data analysis, coding assistance, and personal scheduling."
    },
    {
      q: "Are AI agents capable of replacing human employees?",
      a: "They are designed to augment humans by handling repetitive tasks, not replace them entirely. They act as 'copilots' to increase productivity."
    },
    {
      q: "How do AI agents learn and improve over time?",
      a: "Through techniques like Reinforcement Learning from Human Feedback (RLHF), memory vector databases, and fine-tuning on specific domain data."
    },
    {
      q: "What are the ethical considerations when deploying AI agents?",
      a: "Key concerns include data privacy, bias in decision making, accountability for errors, and ensuring transparency in how the agent operates."
    },
    {
      q: "What types of AI agents are available today?",
      a: "There are single-task agents, general-purpose assistants, and multi-agent swarms designed for complex collaborative problem solving."
    },
  ],
  // Cột Phải
  [
    {
      q: "Who are the top AI agent providers in 2025?",
      a: "Leading providers include OpenAI (Assistants API), Google (Vertex AI Agents), Microsoft (Copilot Studio), and specialized platforms like LangChain and AutoGPT-based services."
    },
    {
      q: "How do I choose the right AI agent for my needs?",
      a: "Identify your specific bottleneck (e.g., support volume, data entry). Look for agents with tools specific to that domain and integration capabilities with your tech stack."
    },
    {
      q: "Can AI agents handle complex tasks?",
      a: "Yes, by breaking them down into sub-tasks (Chain-of-Thought) and using external tools (browsing, code execution) to solve each part sequentially."
    },
    {
      q: "How do businesses integrate AI agents into their existing systems?",
      a: "Most agents offer APIs or webhooks. Integration usually involves connecting the agent to your CRM, database, or communication channels like Slack/Teams."
    },
    {
      q: "What are the limitations of AI agents?",
      a: "They can hallucinate (make up facts), get stuck in loops, or struggle with highly ambiguous instructions that require human intuition."
    },
    {
      q: "How is the future landscape of AI agents evolving?",
      a: "We are moving towards multi-modal agents (vision/voice) and 'Agentic Workflows' where teams of agents collaborate to run entire business departments."
    },
    {
      q: "How do AI Agents compare to traditional automation tools?",
      a: "Traditional automation (RPA) requires strict rules. AI Agents are flexible and can handle unstructured data and unexpected variations in the workflow."
    },
    {
      q: "What programming languages are used to build AI Agents?",
      a: "Python is the dominant language due to its rich AI ecosystem (LangChain, PyTorch), followed by TypeScript/JavaScript for web-based implementations."
    },
    {
      q: "What's the difference between AI Agents and autonomous agents?",
      a: "The terms are often used interchangeably, but 'autonomous' emphasizes the ability to operate for long periods without any human prompt after the initial goal setting."
    },
    {
      q: "How secure are AI Agents when handling sensitive data?",
      a: "Security depends on the deployment. Enterprise solutions offer on-premise hosting or SOC2 compliance to ensure data doesn't train public models."
    },
    {
      q: "What is agentic AI and how does it relate to AI Agents?",
      a: "Agentic AI refers to the broader capability of AI systems to demonstrate agency—making choices and acting in the world—which is the core function of an AI Agent."
    },
  ]
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left transition-all hover:bg-gray-50/50 px-4 sm:px-0"
      >
        <span className={`text-[15px] text-gray-700 ${isOpen ? 'font-semibold text-gray-900' : 'font-medium'}`}>
          {question}
        </span>
        <span className="ml-4 flex-shrink-0 text-gray-400">
          {/* Icon Chevron giống trong ảnh */}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'
          }`}
      >
        <div className="overflow-hidden text-sm text-gray-500 leading-relaxed pr-8 pl-4 sm:pl-0">
          {answer}
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-6 pt-16  text-left border-x border-b border-gray-200">

        {/* --- HEADER --- */}
        <div className="mx-auto max-w-6xl text-center mb-16">
          {/* Badge FAQ */}
          <div className="mb-6">
            <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-200">
              <span className="w-2 h-2 bg-gray-600 rounded-full mr-2 inline-block"></span>
              Faq
            </Badge>
          </div>

          {/* Title: "Frequently Asked Questions About AI Agents" */}
          <h2 className="text-5xl font-normal text-gray-900 tracking-tight mb-4">
            Frequently Asked Questions About{' '}
            <span className="relative inline-block font-bold">
              AI Agents
              {/* Gạch chân màu xanh nõn chuối #bef264 */}
              <span className="absolute bottom-1 left-0 w-full h-3 bg-[#bef264] -z-10 transform -rotate-1"></span>
            </span>{' '}

          </h2>

          <p className="text-gray-500 mt-4 text-lg font-light">
            Everything you need to know about our AI agents and how they can transform your workflow.
          </p>
        </div>

        {/* --- GRID LAYOUT --- */}
        {/* Chia làm 2 cột riêng biệt trên desktop để giống hệt ảnh */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-0 border-t border-gray-200">

          {/* Cột Trái */}
          <div className="flex flex-col">
            {faqData[0].map((item, index) => (
              <FAQItem key={`left-${index}`} question={item.q} answer={item.a} />
            ))}
          </div>

          {/* Cột Phải */}
          <div className="flex flex-col lg:border-l lg:border-gray-200 lg:pl-12">
            {faqData[1].map((item, index) => (
              <FAQItem key={`right-${index}`} question={item.q} answer={item.a} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}