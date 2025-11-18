'use client';

import { useState } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: string;
}

export default function ChatVideoDemo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Based on my request research analysis, I recommend...',
      sender: 'agent',
      timestamp: '10:23 AM',
    },
    {
      id: '2',
      text: 'Great! Please show me the available options',
      sender: 'user',
      timestamp: '10:24 AM',
    },
    {
      id: '3',
      text: 'I found 3 solutions that match your requirements.',
      sender: 'agent',
      timestamp: '10:24 AM',
    },
  ]);

  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage: Message = {
        id: String(messages.length + 1),
        text: input,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };
      setMessages([...messages, newMessage]);
      setInput('');

      // Simulate agent response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: String(prev.length + 1),
            text: 'I understand. Let me process your request and get back to you with more details.',
            sender: 'agent',
            timestamp: new Date().toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            }),
          },
        ]);
      }, 800);
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-gray-50 rounded-lg border border-gray-200">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 bg-white">
        <h3 className="font-bold text-lg">Real-time Collaboration</h3>
        <p className="text-sm text-gray-600">Experience real-time assistance, receive 24-7 support from AI agents, and collaborate seamlessly.</p>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-3 py-2 rounded-lg ${message.sender === 'user'
                ? 'bg-yellow-300 text-gray-900'
                : 'bg-gray-200 text-gray-900'
                }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className="text-xs mt-1 opacity-70">{message.timestamp}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
