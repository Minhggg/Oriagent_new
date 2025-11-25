'use client'
import { useState, useEffect } from "react";

// Đảm bảo các import này hoạt động trong dự án của bạn

import { Badge } from '@/components/ui/badge'

interface TrustFeature {
  icon: string
  title: string
  description: string
}

interface TrustSectionProps {
  leftTitle?: string
  leftDescription?: string
  rightTitle?: string
  rightDescription?: string
  features?: TrustFeature[]
  ctaText?: string
}

const defaultFeatures: TrustFeature[] = [
  {
    icon: '🔒',
    title: 'End-to-End Security for Every Automated Task',
    description:
      'Your AI Agents operate in a secure, encrypted environment. From task execution to data handling, every step is protected by default encryption. Security is no afterthought here.',
  },
  {
    icon: '🌍',
    title: 'AI Agents That Scale With Your Team',
    description:
      'Whether you\'re a 5-person startup, 50-person agency, or 500-person enterprise, our AI Agents adapt to your workflows. Collaborate across teams, departments, regions, and grow predictably. The results? 5x faster delivery, 10x fewer errors, and peace of mind.',
  },
]

// Component chính được xuất (đã sửa từ Banner thành TrustSection và thêm logic state)
export default function TrustSection({
  leftTitle = 'End-to-End Security for Every Automated Task',
  leftDescription = 'Your AI Agents operate in a secure, encrypted environment. From task execution to data handling, every step is protected by default encryption. Security is no afterthought here.',
  rightTitle = 'AI Agents That Scale With Your Team',
  rightDescription = 'Whether you\'re a 5-person startup, 50-person agency, or 500-person enterprise, our AI Agents adapt to your workflows. Collaborate across teams, departments, regions, and grow predictably. The results? 5x faster delivery, 10x fewer errors, and peace of mind.',
  features = defaultFeatures, // Prop features vẫn được giữ nhưng không được dùng trong JSX hiện tại
  ctaText = 'Work with us to make it right.', // Prop ctaText vẫn được giữ nhưng không được dùng trong JSX hiện tại
}: TrustSectionProps) {

  // Logic xoay chữ (chuyển từ component Banner cũ vào đây)
  const words = ["right.", "True."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2000); // đổi chữ mỗi 2 giây

    // Cleanup function để dừng timer khi component unmount
    return () => clearInterval(timer);
  }, [words.length]); // Thêm words.length vào dependencies

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="text-center mb-8">
          <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-200">
            Security
          </Badge>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Built for Trust.
        </h2>
        <h3 className="text-3xl md:text-4xl text-center text-gray-700 mb-6">
          Backed by Enterprise-Grade Security.
        </h3>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Every AI Agent task is encrypted, isolated, and protected — on your workflows made safe, without ever risking your data, team, or reputation.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Feature */}
          <div className="flex flex-col justify-center space-y-4">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🔒</div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {leftTitle}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {leftDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Right Feature with Rotating Globe */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-64 h-64 mb-6 flex items-center justify-center bg-gray-50 rounded-lg">
              
            </div>
            <div className="text-center space-y-3">
              <h4 className="text-xl font-bold text-gray-900">
                {rightTitle}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {rightDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-700 rounded-2xl p-12 md:p-20 text-center min-h-[450px] flex items-center justify-center">
        <h3 className="text-3xl md:text-4xl font-bold text-white">
          Work with us to make it{" "}
          <span
            className="bg-lime-400 text-gray-900 px-3 py-1 rounded font-bold transition-opacity duration-500"
            style={{ opacity: 1 }}
          >
            {words[index]} {/* Sử dụng state index đã được định nghĩa trong component này */}
          </span>
        </h3>
      </div>
    </section>
  )
}