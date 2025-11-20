import React from 'react';
import { Scale, FileText, Shield, ArrowRight, ChevronRight } from 'lucide-react';

export default function LegalDocsList() {
  
  // Định nghĩa dữ liệu để dễ quản lý và render
  const documents = [
    {
      title: "Terms of Use",
      description: "Terms of Use for AiAgent.app services",
      icon: Scale,
      colorClass: "text-blue-600",
      bgHoverClass: "hover:bg-blue-50 rounded-2xl",
      borderClass: "group-hover:border-blue-200",
      href: "/legal/terms-of-use"
    },
    {
      title: "Cookie Policy",
      description: "How we use cookies on our website",
      icon: FileText,
      colorClass: "text-orange-500",
      bgHoverClass: "hover:bg-orange-50",
      borderClass: "group-hover:border-orange-200",
      href: "/legal/cookie-policy"
    },
    {
      title: "Privacy Policy",
      description: "Privacy Policy for AiAgent.app services",
      icon: Shield,
      colorClass: "text-green-500",
      bgHoverClass: "hover:bg-green-50 rounded-2xl",
      borderClass: "group-hover:border-green-200",
      href: "/legal/privacy-policy"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 underline underline-offset-4 decoration-gray-700">Legal Center</h1>
          <p className="text-gray-500 mt-2">Review our policies and terms regarding your usage.</p>
        </div>

        {/* Container chính */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-2xl"> 
          {documents.map((doc, index) => {
            const Icon = doc.icon;
            
            return (
              <a 
                key={index}
                href={doc.href}
                className={`
                  group block w-full text-left transition-all duration-200 ease-in-out
                  border-b last:border-b-0 border-gray-100
                  ${doc.bgHoverClass}
                  p-6 sm:p-8 cursor-pointer
                  relative overflow-hidden
                `}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    {/* Icon Container */}
                    <div className={`
                      flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-gray-50 
                      group-hover:bg-white group-hover:shadow-sm transition-all duration-200
                    `}>
                      <Icon className={`w-6 h-6 ${doc.colorClass}`} strokeWidth={1.5} />
                    </div>

                    {/* Text Content */}
                    <div>
                      <h2 className={`text-lg font-bold text-gray-900 group-hover:${doc.colorClass} transition-colors`}>
                        {doc.title}
                      </h2>
                      <p className="text-gray-500 text-sm sm:text-base mt-1">
                        {doc.description}
                      </p>
                    </div>
                  </div>

                  {/* Action Area (Hidden on mobile if crowded, or just arrow) */}
                  <div className="flex items-center text-gray-400 pl-4">
                    <span className="hidden sm:inline-block text-sm font-medium mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 transform translate-x-2 group-hover:translate-x-0">
                      Read Document
                    </span>
                    <ChevronRight className={`w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200 ${doc.colorClass}`} />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          Last updated: November 2024
        </p>
      </div>
    </div>
  );
}