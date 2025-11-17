// components/ModeToggle.tsx

"use client" // Quan trọng vì nó sử dụng hooks

import * as React from "react"
import { useTheme } from "next-themes"
// Thay Monitor bằng các icon Light/Dark cụ thể
import { Sun, Moon, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button" // Giả sử bạn dùng Button của shadcn/ui

export function ModeToggle() {
    const { theme, setTheme } = useTheme()

    // Icon hiện tại là Sun, tức là đang ở chế độ Light
    const isLight = theme === 'light' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: light)').matches);

    // Icon hiện tại là Moon, tức là đang ở chế độ Dark
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    const handleClick = () => {
        // Nếu đang là Dark hoặc System đang là Dark, chuyển sang Light
        if (isDark || (theme === 'system' && isDark)) {
            setTheme('light');
        }
        // Nếu đang là Light hoặc System đang là Light, chuyển sang Dark
        else {
            setTheme('dark');
        }
        // Hoặc đơn giản hơn: setTheme(theme === "light" ? "dark" : "light")
    }

    // Sử dụng useEffect để tránh lỗi hydration (dành cho Next.js)
    const [mounted, setMounted] = React.useState(false)
    React.useEffect(() => setMounted(true), [])

    if (!mounted) {
        // Nếu chưa mount xong, hiển thị icon mặc định (Monitor)
        return <Monitor className="h-5 w-5 text-gray-600" />
    }

    return (
        // Button này sẽ thay thế cho Monitor cũ của bạn
        <Button
            variant="ghost" // Dùng button dạng icon (nếu bạn có component Button)
            size="icon"
            onClick={handleClick}
        >
            {/* Hiển thị icon Sun nếu theme hiện tại là Light, Moon nếu là Dark */}
            {isDark ? (
                <Sun className="h-5 w-5 text-gray-600 hover:text-black transition-colors" />
            ) : (
                <Moon className="h-5 w-5 text-gray-600 hover:text-black transition-colors" />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}