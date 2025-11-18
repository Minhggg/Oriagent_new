// src/components/ChatWidget.tsx

"use client"

import { useState, useRef, useEffect } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { User, Bot } from "lucide-react"
interface Message {
  id: number
  type: "customer" | "agent"
  content: string
  image?: string
}

const conversationScript: (Message & { delay: number })[] = [
  { id: 1, type: "customer", content: "Hey, I need help with content strategy for my website. Can you suggest some SEO-friendly blog topics based on keyword research?", delay: 1000 },
  { id: 2, type: "agent", content: "Based on my keyword research analysis, I recommend creating SEO blog content around \"sustainable gardening tips\" and \"indoor plant care\". These keywords have high search volume with moderate", delay: 1500 },

];

function TypingIndicator() {
  return (
    <div className="flex gap-2 justify-start">
      <Avatar className="h-8 w-8 bg-black/10 flex-shrink-0">
        <AvatarFallback className="bg-black/5 text-black text-xs">AI</AvatarFallback>
      </Avatar>
      <div className="bg-gray-200 rounded-lg p-3 flex items-center gap-1.5">
        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
      </div>
    </div>
  )
}

export default function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    const container = messagesEndRef.current
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  useEffect(() => {
    if (currentMessageIndex >= conversationScript.length) {
      const restartTimer = setTimeout(() => {
        setMessages([])
        setCurrentMessageIndex(0)
      }, 30000)

      return () => clearTimeout(restartTimer)
    }

    const currentMsg = conversationScript[currentMessageIndex]
    const timer = setTimeout(() => {
      if (currentMsg.type === "agent") {
        setIsTyping(true)
        setTimeout(() => {
          setIsTyping(false)
          setMessages((prev) => [...prev, currentMsg])
          setCurrentMessageIndex((prev) => prev + 1)
        }, 1500)
      } else {
        setMessages((prev) => [...prev, currentMsg])
        setCurrentMessageIndex((prev) => prev + 1)
      }
    }, currentMsg.delay)

    return () => clearTimeout(timer)
  }, [currentMessageIndex])

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage: Message = { id: Date.now(), type: "customer", content: inputValue }
      setMessages([...messages, newMessage])
      setInputValue("")
    }
  }

  return (
    // CẬP NHẬT CLASS TẠI ĐÂY:
    // w-full max-w-md: Giới hạn chiều rộng (khoảng 450px), thay đổi thành max-w-lg nếu muốn rộng hơn chút
    // mx-auto: Căn giữa màn hình
    // px-4: Padding đều 2 bên (thay vì pl-3)
    // shadow-lg border rounded-xl: Tạo khung cho đẹp
    <div className="w-full max-w-md mx-auto h-full pt-10 px-4 flex flex-col overflow-hidden bg-white relative shadow-lg border-x border-gray-100">

      {/* Thêm relative z-5 để nằm dưới lớp thông báo */}
      <div className="flex-1 overflow-y-auto  space-y-4 scroll-hide relative z-1 pb-4" ref={messagesEndRef}>
        {
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-2 ${message.type === "customer" ? "justify-end" : "justify-start"
                } animate-in fade-in slide-in-from-bottom-2 duration-300`}
            >
              {/* Logo AI (Agent) */}
              {message.type === "agent" && (
                <Avatar className="h-10 w-10 bg-black/10 flex-shrink-0">
                  <AvatarFallback className="bg-black/5 text-black text-xs"><Bot /></AvatarFallback>
                </Avatar>
              )}

              <div
                className={`max-w-[70%] rounded-lg p-3  leading-relaxed shadow-sm ${
                  // Sửa màu chữ cho độ tương phản
                  message.type === "customer" ? "bg-pink-300/80 text-gray-800 text-sm" : "bg-gray-100 text-gray-700 text-lg"
                  }`}
              >
                {message.image && (
                  <div className="mb-2 rounded overflow-hidden">
                    <img src={message.image || "/placeholder.svg"} alt="Product" className="w-full h-auto" />
                  </div>
                )}
                {message.content && <p className="whitespace-pre-line">{message.content}</p>}
              </div>

              {/* Logo Khách hàng (Customer) */}
              {message.type === "customer" && (
                <Avatar className="h-9 w-9 bg-pink-200 flex-shrink-0">
                  <AvatarFallback className="bg-pink-300 text-white text-xs"><User className="text-pink-500" /></AvatarFallback>
                </Avatar>
              )}
            </div>
          ))
        }
        {isTyping && <TypingIndicator />}

      </div>
    </div>
  )
}