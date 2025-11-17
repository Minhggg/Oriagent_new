// components/footer.tsx

import Link from "next/link";
import React from "react";

// Định nghĩa dữ liệu cho các cột liên kết trong Footer
const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Updates", href: "/changelog" },
      { label: "Integrations", href: "/integrations" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Settings", href: "/cookies" }
    ]
  },
];

export function Footer() {
  return (
    // Footer: có đường viền trên, padding và nền xám nhạt
    <footer className="border-t py-12 bg-gray-50 mt-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Lưới (Grid) chính của Footer */}
        {/* Chia thành 5 cột trên màn hình lớn: 1 (Logo) + 3 (Menu) + 1 (Trống/Tùy chọn) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

          {/* Cột 1: Logo và Mô tả */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">✨ AI Agent</h3>
            <p className="text-sm text-gray-600">
              Get more done without doing more.
            </p>
          </div>

          {/* Các cột liên kết (Sử dụng vòng lặp map) */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4 text-black">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-black transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bản quyền (Copyright) */}
        <div className="mt-12 pt-6 border-t text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} AI Agent. All rights reserved.
        </div>
      </div>
    </footer>
  );
}