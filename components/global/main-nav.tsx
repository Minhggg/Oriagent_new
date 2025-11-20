// components/main-nav.tsx
'use client';

import { SignInModal } from "@/components/sign-in-modal"
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Monitor,
  ChevronDown,
  BookOpen,
  Target,
  LayoutTemplate,
  Bitcoin,
  ShieldCheck,
  Bot,
  Handshake,
  Menu,
  X,
  User,
  Sun,
  FileText,
  CreditCard,
  LucideIcon // [FIX] Import thêm type này
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// --- TYPES ---
interface DropdownLink {
  href: string;
  label: string;
  description: string;
  icon: LucideIcon; // [FIX] Dùng LucideIcon thay vì React.ElementType để nhận đúng props
}

interface NavItemWithDropdown {
  label: string;
  dropdown: true;
  links: DropdownLink[];
}

interface NavItemWithLink {
  label: string;
  dropdown: false;
  href: string;
}

type NavItem = NavItemWithDropdown | NavItemWithLink;

export function MainNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  // Khóa cuộn trang khi mở menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Dữ liệu menu
  const navItems: NavItem[] = [
    {
      label: "Solutions",
      dropdown: true,
      links: [
        { href: "/ai-agents", label: "AI Agents", description: "", icon: Bot },
        { href: "/done-for-you", label: "Done-for-You", description: "", icon: Handshake },
      ]
    },
    {
      label: "Content",
      dropdown: true,
      links: [
        { href: "/blog", label: "Blog", description: "", icon: BookOpen },
        { href: "/use-case", label: "Use Cases", description: "", icon: Target },
        { href: "/templates", label: "Template", description: "", icon: LayoutTemplate },
        { href: "/aaa", label: "AAA", description: "", icon: Bitcoin },
        { href: "/legal", label: "Legal", description: "", icon: ShieldCheck },
      ]
    },
    { label: "Change log", dropdown: false, href: "/changelog" },
    { label: "Pricing", dropdown: false, href: "/pricing" },
  ];

  return (
    <>
      {/* --- NAVBAR CHÍNH --- */}
      <div className="sticky top-0 z-40 w-full bg-white border-b">
        <div className="flex h-20 items-center justify-between px-6 lg:px-8">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50">
            <div className="flex text-black text-2xl font-bold tracking-tighter">
              ✦✦
            </div>
          </Link>

          {/* Desktop Nav (Ẩn trên mobile) */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="group flex items-center gap-1 text-gray-600 hover:text-black transition-colors outline-none focus:ring-0">
                      {item.label}
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" sideOffset={15} className="w-[600px] p-4 bg-white rounded-xl shadow-lg border border-gray-100">
                      <div className="grid grid-cols-2 gap-2">
                        {item.links.map((link) => (
                          <DropdownMenuItem key={link.href} asChild>
                            <Link href={link.href} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer outline-none select-none">
                              <div className="mt-0.5 text-gray-500">
                                <link.icon className="h-5 w-5" strokeWidth={1.5} />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-gray-900">{link.label}</div>
                                <p className="text-xs text-gray-500 mt-0.5 font-normal leading-snug">{link.description || link.label}</p>
                              </div>
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link href={item.href} className="text-gray-600 hover:text-black transition-colors">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-zinc-900 hover:text-black transition-colors">
              <Sun className="w-5 h-5" />
            </button>
            <Button
              variant="outline"
              className="bg-transparent border-zinc-400 text-zinc-800 hover:bg-zinc-900 hover:text-white rounded-full px-6 h-9 text-sm font-normal"
              onClick={() => setShowSignIn(true)}
            >
              Sign In
            </Button>
          </div>

          <SignInModal open={showSignIn} onOpenChange={setShowSignIn} />

          {/* Mobile Menu Trigger */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-black z-50"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY (Slide từ phải sang) --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end">

          {/* 1. LỚP NỀN TỐI (Overlay) */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* 2. BẢNG MENU (Drawer) */}
          <div className="relative flex flex-col w-[85%] max-w-[350px] h-full bg-white shadow-2xl animate-in slide-in-from-right duration-300">

            {/* Nút Đóng (X) */}
            <div className="flex justify-end p-5 pt-6">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="group rounded-full border border-gray-300 p-1.5 hover:bg-gray-100 transition-colors"
              >
                <X className="h-5 w-5 text-gray-600 group-hover:text-black" strokeWidth={1.5} />
              </button>
            </div>

            {/* Nội dung cuộn */}
            <div className="flex-1 overflow-y-auto px-8 pb-6">
              <div className="space-y-8">

                {/* === PHẦN MENU CHÍNH === */}
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.dropdown ? (
                      <div className="space-y-4">
                        <h3 className="text-sm font-medium text-gray-500">
                          {item.label}
                        </h3>
                        <div className="space-y-5 pl-2">
                          {item.links.map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center gap-4 text-[16px] font-normal text-gray-800 hover:text-black"
                            >
                              <link.icon className="h-5 w-5 text-gray-900" strokeWidth={1.5} />
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="pt-2">
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-[16px] font-normal text-gray-800 hover:text-black"
                        >
                          {item.label}
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* === FOOTER (Light Mode + Sign In) === */}
            <div className="p-6 px-8 border-t border-gray-100 bg-white">
              <div className="space-y-6">
                {/* Light Mode Toggle */}
                <button className="flex items-center gap-3 text-gray-800 font-normal text-base hover:text-black">
                  <Monitor className="h-5 w-5" strokeWidth={1.5} />
                  Light Mode
                </button>

                {/* Sign In Button */}
                <Button
                  className="w-full rounded-full border border-gray-200 bg-white text-black hover:bg-gray-50 h-12 text-base font-normal shadow-sm flex items-center justify-center gap-2"
                  variant="outline"
                  onClick={() => {
                    setIsMobileMenuOpen(false); // Close menu first
                    setShowSignIn(true); // Open modal
                  }}
                >
                  <User className="h-4 w-4" strokeWidth={1.5} />
                  Sign In
                </Button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}