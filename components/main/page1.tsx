'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
// IMPORT BIỂU TƯỢNG
import { Mail, PhoneCall } from "lucide-react";
export function MainPage() {
  return (
    <section className="border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-16   text-left border-x border-gray-200">

        {/* Badge */}
        <div className="mb-6">
          <Badge variant="outline" className="bg-purple-100 text-purple-700 border-purple-200">
            <span className="w-2 h-2 bg-purple-600 rounded-full mr-2 inline-block"></span>
            Done for you AI automation
          </Badge>
        </div>

        {/* Main Headline */}
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-4 text-black">
            Get more done without doing more.
          </h1>

          <p className="text-xl sm:text-2xl text-gray-500 leading-relaxed">
            Imagine your best teammates, multiplied.
            <br />
            Working <span className="text-purple-600 font-semibold underline underline-offset-1 decoration-purple-600">Smarter</span>,
            <span className="text-orange-500 font-semibold"> Faster</span>,
            and <span className="text-green-600 font-semibold">Stronger</span>.

            <br />
            Taking care of the busywork—<br />
            so you can do your best work.
          </p>
        </div>

        {/* Bullet list */}
        <ul className="text-gray-700 space-y-3 mb-10 text-base">
          <li className="flex items-start gap-2">
            <span>🧩</span> Create a team of AI agents that handle real work
          </li>
          <li className="flex items-start gap-2">
            <span>⚙️</span> Automate repetitive tasks — no training needed
          </li>
          <li className="flex items-start gap-2">
            <span>🔌</span> Plug into tools you already use
          </li>
          <li className="flex items-start gap-2">
            <span>📄</span> Train AI agents on your existing docs
          </li>
        </ul>

        {/* CTA Buttons */}
        <div className="flex gap-4 mb-12">
          <Button size="lg" className="bg-black text-white hover:bg-gray-800 rounded-4xl">
            <span className="mr-2"><PhoneCall /></span>
            Launch your AI Team
          </Button>

          <div className="flex items-center">
            <Avatar className="w-6 h-6 border-2 border-white -ml-2 first:ml-0 flex-shrink-0">
              <AvatarImage src="/person1.png" />
            </Avatar>
            <Avatar className="w-6 h-6 border-2 border-white -ml-2 flex-shrink-0">
              <AvatarImage src="/person2.png" />
            </Avatar>
            <Avatar className="w-6 h-6 border-2 border-white -ml-2 flex-shrink-0">
              <AvatarImage src="/person3.png" />
            </Avatar>
            <Avatar className="w-6 h-6 border-2 border-white -ml-2 flex-shrink-0">
              <AvatarImage src="/person4.png" />
            </Avatar>
            <Avatar className="w-6 h-6 border-2 border-white -ml-2 flex-shrink-0">
              <AvatarImage src="/person5.png" />
            </Avatar>
          </div>

          <div className="text-xs">
            <p className="font-semibold text-gray-900">47,000+</p>
            <p className="text-gray-600">Loved by users</p>
          </div>
        </div>

      </div>
    </section>

  )
}
