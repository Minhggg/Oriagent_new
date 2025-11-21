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
  Moon,
  Laptop, // Thêm icon cho System mode
  LucideIcon // [FIX] Import thêm type này
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

// --- TYPES ---
interface DropdownLink {
  href: string;
  label: string;
  description: string;
  icon: LucideIcon;
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
type Theme = 'light' | 'dark' | 'system';

// --- COMPONENT CHÍNH ---
export function MainNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [theme, setTheme] = useState<Theme>('system'); // State cho theme

  // Logic quản lý theme cơ bản
  useEffect(() => {
    // 1. Lấy theme từ localStorage (nếu có) hoặc mặc định là 'system'
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    // 2. Áp dụng theme và lưu vào localStorage
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  // Khóa cuộn trang khi mở menu mobile
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Khóa cuộn trang chính
      document.body.style.overflow = 'hidden';
    } else {
      // Mở lại cuộn khi đóng menu
      document.body.style.overflow = 'unset';
    }

    // Cleanup function để đảm bảo mở lại cuộn khi component unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Dữ liệu menu
  const navItems: NavItem[] = [
    {
      label: "Solutions",
      dropdown: true,
      links: [
        { href: "/ai-agents", label: "AI Agents", description: "Tự động hóa tác vụ", icon: Bot },
        { href: "/done-for-you", label: "Done-for-You", description: "Giải pháp trọn gói", icon: Handshake },
      ]
    },
    {
      label: "Content",
      dropdown: true,
      links: [
        { href: "/blog", label: "Blog", description: "Bài viết chuyên sâu", icon: BookOpen },
        { href: "/use-case", label: "Use Cases", description: "Ví dụ ứng dụng thực tế", icon: Target },
        { href: "/templates", label: "Template", description: "Các mẫu sẵn có", icon: LayoutTemplate },
        { href: "/", label: "AAA", description: "Tin tức đầu tư", icon: Bitcoin },
        { href: "/legal", label: "Legal", description: "Thông tin pháp lý", icon: ShieldCheck },
      ]
    },
    { label: "Change log", dropdown: false, href: "/changelog" },
    { label: "Pricing", dropdown: false, href: "/pricing" },
  ];
  
  // Icon hiện tại dựa trên theme
  const ThemeIcon = theme === 'light' ? Sun : theme === 'dark' ? Moon : Laptop;

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    // Có thể đóng mobile menu nếu thay đổi theme từ mobile
    if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* --- NAVBAR CHÍNH --- */}
      {/* Thêm dark: class cho nền và border */}
      <div className="sticky top-0 z-40 w-full bg-white border-b border-gray-100 dark:bg-zinc-900 dark:border-zinc-800">
        <div className="flex h-20 items-center justify-between px-6 lg:px-8 lg:pl-16">

          {/* Logo - Cập nhật màu text để hỗ trợ Dark Mode */}
          <Link href="/" className="flex items-center  gap-2 z-50">
            <div className="flex text-black dark:text-white text-2xl font-bold tracking-tighter">
              <img src="/logo-oriagent.svg" alt="Oriagent Logo" className="h-8 w-auto mr-2" />
            </div>
          </Link>

          {/* Desktop Nav (Ẩn trên mobile) - Cập nhật màu text */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <DropdownMenu>
                    {/* Cập nhật màu text và hover */}
                    <DropdownMenuTrigger className="group flex items-center gap-1 text-gray-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors outline-none focus:ring-0">
                      {item.label}
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </DropdownMenuTrigger>
                    {/* Cập nhật DropdownMenuContent để hỗ trợ Dark Mode */}
                    <DropdownMenuContent 
                        align="start" 
                        sideOffset={15} 
                        className="w-[600px] p-4 bg-white rounded-xl shadow-lg border border-gray-100 dark:bg-zinc-800 dark:border-zinc-700 dark:shadow-xl"
                    >
                      <div className="grid grid-cols-2 gap-2">
                        {item.links.map((link) => (
                          <DropdownMenuItem key={link.href} asChild>
                            {/* Cập nhật màu hover và text bên trong */}
                            <Link href={link.href} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors cursor-pointer outline-none select-none">
                              {/* Icon */}
                              <div className="mt-0.5 text-gray-500 dark:text-zinc-400">
                                <link.icon className="h-5 w-5" strokeWidth={1.5} />
                              </div>
                              <div>
                                {/* Label */}
                                <div className="text-sm font-semibold text-gray-900 dark:text-zinc-100">{link.label}</div>
                                {/* Description */}
                                <p className="text-xs text-gray-500 dark:text-zinc-400 mt-0.5 font-normal leading-snug">{link.description || link.label}</p>
                              </div>
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  // Cập nhật màu text và hover
                  <Link href={item.href} className="text-gray-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions (Bao gồm Theme Toggle) */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle cho Desktop */}
            


            {/* Nút Sign In */}
            <Button
              variant="outline"
              // Cập nhật màu border, text và hover cho Dark Mode
              className="bg-transparent border-zinc-400 text-zinc-800 hover:bg-zinc-900 hover:text-white dark:border-zinc-500 dark:text-zinc-100 dark:hover:bg-white dark:hover:text-black rounded-full px-6 h-9 text-sm font-normal transition-all"
              onClick={() => setShowSignIn(true)}
            >
              Sign In
            </Button>
          </div>

          <SignInModal open={showSignIn} onOpenChange={setShowSignIn} />

          {/* Mobile Menu Trigger - Cập nhật màu text */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-black dark:text-zinc-400 dark:hover:text-white z-50"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      
      {/* --- MOBILE MENU OVERLAY (Slide từ phải sang) --- */}
      {isMobileMenuOpen && (
        // WRAPPER CHÍNH: z-index cực cao để đè lên tất cả Header/Banner
        <div className="fixed inset-0 z-[9999] flex justify-end h-[100dvh]">

          {/* 1. LỚP NỀN TỐI (Overlay) 
              - bg-black/60: Đậm hơn chút để che nội dung dưới
              - backdrop-blur: Làm mờ nội dung dưới
          */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* 2. BẢNG MENU (Drawer) 
              - h-[100dvh]: Chiều cao full màn hình thiết bị (tránh lỗi thanh địa chỉ trên iOS/Android)
              - overflow-y-auto: Chỉ cho phép cuộn nội dung TRONG menu này
          */}
          <div className="relative flex flex-col w-[85%] max-w-[350px] h-[100dvh] bg-white dark:bg-zinc-900 shadow-2xl animate-in slide-in-from-right duration-300 overflow-y-auto">

            {/* Nút Đóng (X) - Giữ cố định hoặc cuộn theo tùy ý, ở đây cho cuộn theo */}
            <div className="flex justify-end p-5 pt-6 shrink-0">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="group rounded-full border border-gray-300 dark:border-zinc-700 p-1.5 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <X className="h-6 w-6 text-gray-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white" strokeWidth={1.5} />
              </button>
            </div>

            {/* Nội dung Menu */}
            <div className="flex-1 px-8 pb-2">
              <div className="space-y-6">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.dropdown ? (
                      <div className="space-y-4">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-zinc-400 uppercase tracking-wider">
                          {item.label}
                        </h3>
                        <div className="space-y-5 pl-2 dark:border-zinc-800 ml-1">
                          {item.links.map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center gap-4 text-[16px] font-normal text-gray-800 hover:text-primary dark:text-zinc-200 dark:hover:text-white transition-colors"
                            >
                              <link.icon className="h-5 w-5 text-gray-500 dark:text-zinc-400" strokeWidth={1.5} />
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="pt-0 mb-3">
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-lg font-medium text-gray-900 hover:text-black dark:text-white dark:hover:text-gray-200"
                        >
                          {item.label}
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* === FOOTER (Theme Toggle + Sign In) === 
                Dùng mt-auto để đẩy xuống đáy nếu nội dung ngắn, 
                nhưng vẫn nằm trong dòng chảy flex nếu nội dung dài 
            */}
            <div className="mt-auto shrink-0 px-8 pb-8 pt-6 border-t border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <Button
                className="w-full rounded-full border border-gray-200 bg-white text-black hover:bg-gray-50 h-12 text-base font-normal shadow-sm flex items-center justify-center gap-2 
                          dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700 transition-all"
                variant="outline"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setShowSignIn(true);
                }}
              >
                <User className="h-4 w-4" strokeWidth={1.5} />
                Sign In
              </Button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
