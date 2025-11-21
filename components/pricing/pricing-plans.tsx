"use client"

import { useState } from "react"
import { CheckCircle, Sparkles, Star, Zap, } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"

export function PricingPlans() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-lime-50 px-3 py-1 text-xs font-bold tracking-wide text-lime-700 uppercase border border-lime-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
              </span>
              Pricing
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-medium mb-4">Choose the plan that's right for you</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We offer a variety of plans to fit from startups to large enterprises. Join 40,000+ users boosting their
            productivity today.
          </p>

          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={!isYearly ? "font-medium" : "text-muted-foreground"}>Monthly</span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} />
            <span className={isYearly ? "font-medium" : "text-muted-foreground"}>Yearly</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 px-3 py-1 text-xs font-bold tracking-wide text-purple-700 uppercase border border-purple-200">
              
              2 months free
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border rounded-3xl overflow-hidden bg-white shadow-sm">
          {/* Starter Plan */}
          <div className="p-8 flex flex-col h-full">
            <div className="mb-8">
              <h3 className="text-2xl font-medium mb-2">Starter</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Get started with AI agents that automate your basic tasks and workflows, saving hours of manual work
                each week.
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-medium">${isYearly ? "24" : "29"}</span>
                <span className="text-muted-foreground">/ month</span>
              </div>
            </div>
            <Button variant="outline" className="w-full rounded-2xl mb-8 h-12 text-base bg-gray-300 border-0 hover:bg-gray-100">
              Sign In
            </Button>
            <div className="space-y-4 flex-1">
              <div className="text-lg font-medium text-muted-foreground mb-4 text-red-600">Access</div>
              <div className="flex items-center gap-3 text-sm">
                <Zap className="w-4 h-4 text-muted-foreground" />
                <span>Fast models</span>
                <CheckCircle className="w-4 h-4 text-[#a4c521]  ml-auto" />
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Star className="w-4 h-4" />
                <span>Premium models</span>
                <span className="ml-auto">—</span>
              </div>
              <div className="text-lg font-medium text-muted-foreground mt-6 mb-4 text-orange-500">Credits</div>
              <div className="flex items-center justify-between text-sm">
                <span>Monthly Credits</span>
                <span>50</span>
              </div>
              <div className="text-lg font-medium text-muted-foreground mt-6 mb-4 text-purple-500">Capacity</div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-muted-foreground" /> Premium-model chats/mo
                  </span>
                  <span>50</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-muted-foreground" /> Agent runs/mo
                  </span>
                  <span>25</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">Content-planner calls/mo</span>
                  <span>5</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">Full SEO articles/mo</span>
                  <span>3</span>
                </div>
              </div>
              <div className="text-lg font-medium text-muted-foreground mt-6 mb-4 text-pink-500">Features</div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span>Enhanced Search</span>
                  <CheckCircle className="w-4 h-4 font-bold text-[#a4c521] " />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Custom Agents</span>
                  <CheckCircle className="w-4 h-4 text-[#a4c521] " />
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Early Access</span>
                  <span>—</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="p-8 flex flex-col h-full relative bg-gray-50/50">
            <div className="absolute top-4 right-4">
              <Badge className="bg-[#ccff00] text-black hover:bg-[#b3e600] border-0">Most Popular</Badge>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-medium mb-2">Pro</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Step up your productivity with more powerful AI agents that handle complex tasks and integrate across
                your favourite tools.
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-medium">${isYearly ? "82" : "99"}</span>
                <span className="text-muted-foreground">/ month</span>
              </div>
            </div>
            <Button className="w-full rounded-2xl mb-8 h-12 text-base bg-[#d5ee71] text-black hover:bg-[#b3e600]">Sign In</Button>
            <div className="space-y-4 flex-1">
              <div className="text-lg font-medium text-muted-foreground mb-4 text-red-600">Access</div>
              <div className="flex items-center gap-3 text-sm">
                <Zap className="w-4 h-4 text-muted-foreground" />
                <span>Fast models</span>
                <CheckCircle className="w-4 h-4 text-[#a4c521]  ml-auto" />
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Star className="w-4 h-4 text-muted-foreground" />
                <span>Premium models</span>
                <CheckCircle className="w-4 h-4 text-[#a4c521]  ml-auto" />
              </div>
              <div className="text-lg font-medium text-muted-foreground mt-6 mb-4 text-orange-500">Credits</div>
              <div className="flex items-center justify-between text-sm">
                <span>Monthly Credits</span>
                <span>500</span>
              </div>
              <div className="text-lg font-medium text-muted-foreground mt-6 mb-4 text-purple-500">Capacity</div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-muted-foreground" /> Premium-model chats/mo
                  </span>
                  <span>500</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-muted-foreground" /> Agent runs/mo
                  </span>
                  <span>250</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">Content-planner calls/mo</span>
                  <span>25</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">Full SEO articles/mo</span>
                  <span>26</span>
                </div>
              </div>
              <div className="text-lg font-medium text-muted-foreground mt-6 mb-4 text-pink-500">Features</div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span>Enhanced Search</span>
                  <CheckCircle className="w-4 h-4 text-[#a4c521] " />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Custom Agents</span>
                  <CheckCircle className="w-4 h-4 text-[#a4c521] " />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Early Access</span>
                  <CheckCircle className="w-4 h-4 text-[#a4c521] " />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Unlimited Tasks per Agent</span>
                  <CheckCircle className="w-4 h-4 text-[#a4c521] " />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Analytics Dashboard</span>
                  <CheckCircle className="w-4 h-4 text-[#a4c521] " />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>API & Webhooks</span>
                  <CheckCircle className="w-4 h-4 text-[#a4c521] " />
                </div>
              </div>
            </div>
          </div>

          {/* Elite Plan */}
          <div className="p-8 flex flex-col h-full">
            <div className="mb-8">
              <h3 className="text-2xl font-medium mb-2">Elite</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Unlock maximum automation potential with advanced AI agents that learn your business needs and handle
                sophisticated workflows.
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-medium">${isYearly ? "207" : "249"}</span>
                <span className="text-muted-foreground">/ month</span>
              </div>
            </div>
            <Button className="w-full rounded-2xl mb-8 h-12 text-base bg-black text-white hover:bg-gray-700">Sign In</Button>
            <div className="space-y-4 flex-1">
              <div className="text-lg font-medium text-muted-foreground mb-4 text-red-600">Access</div>
              <div className="flex items-center gap-3 text-sm">
                <Zap className="w-4 h-4 text-muted-foreground" />
                <span>Fast models</span>
                <CheckCircle className="w-4 h-4 text-[#a4c521]  ml-auto" />
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Star className="w-4 h-4 text-muted-foreground" />
                <span>Premium models</span>
                <CheckCircle className="w-4 h-4 text-[#a4c521]  ml-auto" />
              </div>
              <div className="text-lg font-medium text-muted-foreground mt-6 mb-4 text-orange-500">Credits</div>
              <div className="flex items-center justify-between text-sm">
                <span>Monthly Credits</span>
                <span>2000</span>
              </div>
              <div className="text-lg font-medium text-muted-foreground mt-6 mb-4 text-purple-500">Capacity</div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-muted-foreground" /> Premium-model chats/mo
                  </span>
                  <span>2000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-muted-foreground" /> Agent runs/mo
                  </span>
                  <span>1000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">Content-planner calls/mo</span>
                  <span>100</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">Full SEO articles/mo</span>
                  <span>105</span>
                </div>
              </div>
              <div className="text-lg font-medium text-muted-foreground mt-6 mb-4 text-pink-500">Features</div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span>Enhanced Search</span>
                  <CheckCircle className="w-4 h-4 text-[#a4c521] " />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Custom Agents</span>
                  <CheckCircle className="w-4 h-4 text-[#a4c521] " />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Early Access</span>
                  <CheckCircle className="w-4 h-4 text-[#a4c521] " />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Unlimited Tasks per Agent</span>
                  <CheckCircle className="w-4 h-4 text-[#a4c521] " />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Analytics Dashboard</span>
                  <CheckCircle className="w-4 h-4 text-[#a4c521] " />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>API & Webhooks</span>
                  <CheckCircle className="w-4 h-4 text-[#a4c521] " />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Priority Support</span>
                  <CheckCircle className="w-4 h-4 text-[#a4c521] " />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Plans */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Free Plan */}
          <div className="border rounded-3xl p-8 shadow-sm bg-gradient-to-r from-[#F3F5D4] to-[#D9F9C3]">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Free Option</h3>
              <p className="text-gray-700 text-sm">
                Experience basic AI automation with limited agents. Perfect for individuals just exploring task
                automation.
              </p>
            </div>
            <div className="flex items-baseline justify-center gap-1 mb-8">
              <span className="text-4xl font-medium">$0</span>
              <span className="text-muted-foreground">/ month</span>
            </div>
            <Button  className="w-full rounded-2xl mb-8 h-12 text-white text-lg bg-black hover:bg-green-400">
              Sign In
            </Button>
            <div className="space-y-4">
              <div className="text-lg font-bold text-muted-foreground mb-4 text-black">Access</div>
              <div className="flex items-center gap-3 text-sm">
                <Zap className="w-4 h-4 " />
                <span className="">Fast models</span>
                <CheckCircle className="w-4 h-4 text-[#a4c521]  ml-auto" />
              </div>
              <div className="flex items-center gap-3 text-sm ">
                <Star className="w-4 h-4" />
                <span>Premium models</span>
                <span className="ml-auto">—</span>
              </div>
              <div className="text-lg font-bold text-muted-foreground mt-6 mb-4">Credits</div>
              <div className="flex items-center justify-between text-sm">
                <span>Monthly Credits</span>
                <span>50</span>
              </div>
              <div className="text-lg font-bold text-muted-foreground mt-6 mb-4">Capacity</div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 " /> Premium-model chats/mo
                  </span>
                  <span>50</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 " /> Agent runs/mo
                  </span>
                  <span>25</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">Content-planner calls/mo</span>
                  <span>5</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">Full SEO articles/mo</span>
                  <span>3</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="border rounded-3xl p-8 bg-black text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-medium mb-2">Enterprise</h3>
              <p className="text-gray-400 text-sm">
                Custom AI agent solutions designed for your organization's unique automation needs, with dedicated
                support and unlimited scalability.
              </p>
            </div>
            <div className="flex items-baseline justify-center gap-1 mb-8">
              <span className="text-4xl font-medium">$$$</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Button className="w-full rounded-2xl h-12 text-base bg-white text-black hover:bg-gray-300">Email Us</Button>
              <Button className="w-full rounded-2xl h-12 text-base bg-white text-black hover:bg-gray-300">Book a Call</Button>
            </div>
            <div className="space-y-4">
              <div className="text-lg font-bold text-gray-400 mb-4">Access</div>
              <div className="flex items-center gap-3 text-sm">
                <Zap className="w-4 h-4 text-gray-400" />
                <span>Fast models</span>
                <CheckCircle className="w-4 h-4 text-[#a4c521]  ml-auto" />
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Star className="w-4 h-4 text-gray-400" />
                <span>Premium models</span>
                <CheckCircle className="w-4 h-4 text-[#a4c521]  ml-auto" />
              </div>
              <div className="text-lg font-bold text-gray-400 mt-6 mb-4">Credits</div>
              <div className="flex items-center justify-between text-sm">
                <span>Monthly Credits</span>
                <span>Custom</span>
              </div>
              <div className="text-lg font-bold text-gray-400 mt-6 mb-4">Capacity</div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-gray-400" /> Premium-model chats/mo
                  </span>
                  <span>Custom</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-gray-400" /> Agent runs/mo
                  </span>
                  <span>Custom</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">Content-planner calls/mo</span>
                  <span>Custom</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">Full SEO articles/mo</span>
                  <span>Custom</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
