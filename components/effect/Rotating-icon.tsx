"use client";

import React, { useEffect, useState } from "react";

// --- 1. CẤU HÌNH TỈ LỆ SIZE (Individual Size) ---
const SIZE_MULTIPLIERS: Record<string, number> = {
  small: 0.7,   // Nhỏ hơn 30%
  medium: 1,    // Mặc định
  large: 1.3,   // To hơn 30%
  xl: 1.6       // Rất to
};

// --- 2. DATA ICONS ---
// Vòng 1 (Inner-most)
const innermostIcons = [
  { name: "Facebook", color: "bg-blue-100", icon: "/twitter.png" }, // Lưu ý: Icon path đang là twitter, bạn check lại ảnh nhé
  { name: "TikTok", color: "bg-gray-100", icon: "/tiktok.png", size: "large" },
  { name: "Instagram", color: "bg-orange-100", icon: "/instagram.png" },
  { name: "WhatsApp", color: "bg-green-100", icon: "/whatsapp.png", size: "large" }, // Ví dụ size to
];

// Vòng 2 (Middle)
const middleIcons = [
  { name: "Viber", color: "bg-purple-100", icon: "/viber.png" },
  { name: "Line", color: "bg-green-100", icon: "/line.png", size: "medium" },
  { name: "Telegram", color: "bg-blue-100", icon: "/telegram.png" },
  { name: "Google", color: "bg-purple-100", icon: "/google.png" },
];

// Vòng 3 (Outer-most)
const outermostIcons = [
  { name: "Twitter", color: "bg-blue-100", icon: "/twitter.png" },
  { name: "Youtube", color: "bg-red-100", icon: "/youtube.png" },
  { name: "LinkedIn", color: "bg-blue-100", icon: "/linkedin2.png", size: "medium" },
  { name: "Notion", color: "bg-gray-100", icon: "/notion.png" },
  { name: "OpenAI", color: "bg-purple-100", icon: "/chat-gpt.png" },
];

// --- 3. CẤU HÌNH BÁN KÍNH (Đã căn chỉnh đều) ---

const RADIUS_CONFIG = {
  INNERMOST: { MOBILE: 115, SM: 95, MD: 115, LG: 128 },
  MIDDLE: { MOBILE: 155, SM: 135, MD: 155, LG: 195 },
  OUTERMOST: { MOBILE: 195, SM: 185, MD: 215, LG: 255 },
};


// --- 4. CẤU HÌNH TỐC ĐỘ QUAY (Giây/vòng) ---
// Số càng LỚN = quay càng CHẬM
const SPEED_CONFIG = {
  INNERMOST: { MOBILE: 20, DESKTOP: 30 }, 
  MIDDLE:    { MOBILE: 30, DESKTOP: 45 },
  OUTERMOST: { MOBILE: 40, DESKTOP: 60 },
};

export default function RotatingIcons() {
  // --- STATE ---
  const [mounted, setMounted] = useState(false);
  const [breakpoint, setBreakpoint] = useState<"MOBILE" | "SM" | "MD" | "LG">("MOBILE");
  const [baseIconSize, setBaseIconSize] = useState(40); // Kích thước cơ sở

  // --- EFFECT: XỬ LÝ RESPONSIVE ---
  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) setBreakpoint("LG");
      else if (width >= 768) setBreakpoint("MD");
      else if (width >= 640) setBreakpoint("SM");
      else setBreakpoint("MOBILE");
      
      // Tự động chỉnh size icon ban đầu cho hợp lý
      if (width < 640) setBaseIconSize(35); 
      else setBaseIconSize(50);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Placeholder khi chưa mount để tránh lỗi Hydration
  if (!mounted) return <div className="min-h-[500px] flex items-center justify-center bg-white"></div>;

  // --- TÍNH TOÁN THÔNG SỐ ---
  const innerRadius = RADIUS_CONFIG.INNERMOST[breakpoint];
  const middleRadius = RADIUS_CONFIG.MIDDLE[breakpoint];
  const outerRadius = RADIUS_CONFIG.OUTERMOST[breakpoint];
  
  const isMobile = breakpoint === 'MOBILE';
  
  // Tốc độ quay dựa trên thiết bị
  const speeds = {
    inner: isMobile ? SPEED_CONFIG.INNERMOST.MOBILE : SPEED_CONFIG.INNERMOST.DESKTOP,
    middle: isMobile ? SPEED_CONFIG.MIDDLE.MOBILE : SPEED_CONFIG.MIDDLE.DESKTOP,
    outer: isMobile ? SPEED_CONFIG.OUTERMOST.MOBILE : SPEED_CONFIG.OUTERMOST.DESKTOP,
  };

  // Kích thước khung bao (padding thêm 100px để icon không bị cắt)
  const maxContainerSize = outerRadius * 2 + 100; 

  // --- COMPONENT CON: VẼ TỪNG VÒNG (Helper) ---
  // --- COMPONENT CON: VẼ TỪNG VÒNG (Helper) ---
  const RenderRing = ({ 
    radius, 
    icons, 
    direction = "normal", 
    duration 
  }: { radius: number, icons: any[], direction?: "normal" | "reverse", duration: number }) => {
    
    return (
      <>
        {/* 1. Đường viền vòng tròn (Visual Ring) - ĐÃ THÊM SHADOW TẠI ĐÂY */}
        <div
          className="absolute rounded-full border border-gray-200 shadow-[0_0_40px_rgba(0,0,0,0.1)]" 
          style={{ 
            width: `${radius * 2}px`, 
            height: `${radius * 2}px`,
            // Thêm hiệu ứng bóng mờ nhẹ (Glow) để tạo chiều sâu
            boxShadow: '0 0 40px rgba(0,0,0,0.08), inset 0 0 20px rgba(0,0,0,0.02)' 
          }}
        />

        {/* 2. Trục quay (Spinning Container) */}
        <div
          className="absolute flex items-center justify-center rounded-full"
          style={{
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
            animation: `spin ${duration}s linear infinite ${direction}`,
          }}
        >
          {icons.map((item, index) => {
            const angle = (360 / icons.length) * index;
            
            // Logic size riêng lẻ
            const scaleFactor = SIZE_MULTIPLIERS[item.size] || 1;
            const currentItemSize = baseIconSize * scaleFactor;

            return (
              <div
                key={index}
                className="absolute"
                style={{
                  transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                }}
              >
                {/* 3. Icon Wrapper */}
                <div
                    style={{
                        animation: `spin ${duration}s linear infinite ${direction === 'normal' ? 'reverse' : 'normal'}`,
                    }}
                >
                    {/* Đã tăng shadow cho từng icon luôn cho nổi */}
                    <div
                      className={`rounded-full ${item.color} shadow-[0_4px_15px_rgba(0,0,0,0.15)] flex items-center justify-center border border-white/80 overflow-hidden hover:scale-110 transition-transform cursor-pointer`}
                      style={{
                        width: `${currentItemSize}px`,
                        height: `${currentItemSize}px`,
                      }}
                    >
                      <img 
                        src={item.icon} 
                        alt={item.name} 
                        className="object-contain"
                        style={{
                            width: `${currentItemSize * 0.6}px`,
                            height: `${currentItemSize * 0.6}px`,
                        }}
                      />
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white overflow-hidden py-10">
      
      {/* --- CONTROL PANEL (Góc phải) --- */}
      <div className="absolute top-4 right-4 z-50 bg-white/80 backdrop-blur border border-gray-200 p-3 rounded-xl shadow-lg flex flex-col items-end transition-opacity duration-300 hover:opacity-100 opacity-60">
         <span className="text-[10px] font-mono text-gray-400 uppercase mb-1">{breakpoint} VIEW</span>
         <label className="text-xs font-bold text-gray-600 mb-1">Size: {baseIconSize}px</label>
         <input 
            type="range" 
            min="20" max="80" 
            value={baseIconSize} 
            onChange={(e) => setBaseIconSize(Number(e.target.value))}
            className="w-28 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
         />
      </div>

      {/* --- MAIN CONTAINER --- */}
      <div 
        className="relative flex items-center justify-center transition-all duration-500"
        style={{ width: `${maxContainerSize}px`, height: `${maxContainerSize}px` }}
      >
        {/* LOGO TRUNG TÂM */}
        <div className="absolute z-30 bg-white w-20 h-20 sm:w-28 sm:h-28 rounded-full shadow-lg flex items-center justify-center border border-gray-100 animate-fade-in">
            <img src="/logo.svg" className="w-12 h-12 sm:w-16 sm:h-16 object-contain" alt="Logo" />
        </div>

        {/* --- RENDER CÁC VÒNG --- */}
        
        {/* Vòng 1: Ngược chiều kim đồng hồ */}
        <RenderRing 
            radius={innerRadius} 
            icons={innermostIcons} 
            direction="reverse" 
            duration={speeds.inner} 
        />

        {/* Vòng 2: Thuận chiều kim đồng hồ */}
        <RenderRing 
            radius={middleRadius} 
            icons={middleIcons} 
            direction="normal" 
            duration={speeds.middle} 
        />

        {/* Vòng 3: Ngược chiều kim đồng hồ */}
        <RenderRing 
            radius={outerRadius} 
            icons={outermostIcons} 
            direction="reverse" 
            duration={speeds.outer} 
        />

      </div>

      {/* CSS GLOBAL ANIMATION */}
      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fade-in {
            animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.8); }
            to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}