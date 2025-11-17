// components/main-nav.tsx

import Link from "next/link";
import { Monitor, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/ModeToggle";

// --- ĐỊNH NGHĨA KIỂU DỮ LIỆU (TYPESCRIPT) ---

// 1. Định nghĩa kiểu cho các liên kết con trong Dropdown
interface DropdownLink {
  href: string;
  label: string;
}

// 2. Định nghĩa kiểu cho mục Menu có Dropdown
interface NavItemWithDropdown {
  label: string;
  dropdown: true; // Bắt buộc phải là true
  links: DropdownLink[]; // Bắt buộc phải có thuộc tính links
}

// 3. Định nghĩa kiểu cho mục Menu Đơn (chỉ có link)
interface NavItemWithLink {
  label: string;
  dropdown: false; // Bắt buộc phải là false
  href: string; // Bắt buộc phải có thuộc tính href
}

// Type chính: Một mục menu CÓ THỂ là Dropdown HOẶC là Link Đơn
type NavItem = NavItemWithDropdown | NavItemWithLink;


export function MainNav() {
  // Gán kiểu dữ liệu đã định nghĩa cho mảng navItems
  const navItems: NavItem[] = [
    {
      label: "Solutions", dropdown: true, links: [
        { href: "/done-for-you", label: "Done For You" },
        { href: "/templates", label: "Templates" },
      ]
    },
    { label: "Content", dropdown: false, href: "/content" },
    { label: "Change log", dropdown: false, href: "/changelog" },
    { label: "Pricing", dropdown: false, href: "/pricing" },
  ];

  return (
    <div className="flex sticky top-0 z-50 bg-white items-center justify-between h-20 px-8 border-b">
      {/* Logo/Tên Thương hiệu */}
      <Link href="/" className="flex items-center space-x-2 p-0 lg:p-10">
        <span className="text-xl font-bold">✨ Oriagent</span>
      </Link>

      {/* Các liên kết chính giữa */}
      <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
        {/* Lặp qua từng mục trong mảng navItems */}
        {navItems.map((item) => (
          <div key={item.label}>
            {/* KIỂM TRA: Nếu là dropdown, render DropdownMenu */}
            {item.dropdown ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-gray-600 hover:text-black transition-colors outline-none focus:ring-0">
                  {item.label} <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {/* Bây giờ TypeScript biết item.links chắc chắn tồn tại */}
                  {item.links.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <Link href={link.href}>{link.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              /* NGƯỢC LẠI: Render Link đơn */
              <Link
                // TypeScript biết item.href chắc chắn tồn tại vì item.dropdown là false
                href={item.href}
                className="text-gray-600 hover:text-black transition-colors"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* Nút Đăng nhập/Menu bên phải */}
      <div className="flex items-center space-x-4">
        {/* Icon Monitor (Biểu tượng mới) */}
        {/* <ModeToggle className="h-5 w-5 text-gray-600 cursor-pointer hover:text-black transition-colors" /> */}
        <Monitor className="h-5 w-5 text-gray-600 cursor-pointer hover:text-black transition-colors" />

        {/* Nút Sign In (Kiểu Outline) */}
        <Button
          variant="outline"
          size="sm"
          className="rounded-full text-sm font-medium h-9 px-4"
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}