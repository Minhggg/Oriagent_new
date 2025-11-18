// src/components/Roating-icon.tsx
"use client"

import { useEffect, useState } from "react"

// Vòng 1 (Inner-most)
const innermostIcons = [
  { name: "Facebook", color: "bg-blue-600", icon: "/facebook.png" },
  { name: "TikTok", color: "bg-black", icon: "/tiktok.png" },
  { name: "Instagram", color: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400", icon: "/instagram.png" },
  { name: "WhatsApp", color: "bg-green-500", icon: "/whatsapp.png" },
]

// Vòng 2 (Middle)
const middleIcons = [
  { name: "Shopee", color: "bg-orange-500", icon: "/google.png" },
  { name: "Line", color: "bg-green-500", icon: "/line.png" },
  { name: "Telegram", color: "bg-blue-400", icon: "/telegram.png" },
  { name: "Google", color: "bg-white", icon: "/google.png" },
]

// Vòng 3 (Outer-most)
const outermostIcons = [
  { name: "Twitter", color: "bg-blue-300", icon: "/google.png" },
  { name: "Youtube", color: "bg-red-600", icon: "/google.png" },
  { name: "LinkedIn", color: "bg-blue-700", icon: "/google.png" },
  { name: "Pinterest", color: "bg-red-700", icon: "/google.png" },
  { name: "Viber", "color": "bg-purple-600", "icon": "/google.png" },
]


// --- BÁN KÍNH VÀ KÍCH THƯỚC (Giảm 1/4, còn lại 75%) ---
const CONTAINER_MAX_SIZE = 525 // (700 * 0.75)
const MOBILE_CONTAINER_SIZE = 225 // (300 * 0.75)

const RADIUS_CONFIG = {
  INNERMOST: { MOBILE: 60, SM: 75, MD: 105, LG: 128 },
  MIDDLE: { MOBILE: 98, SM: 120, MD: 165, LG: 195 },
  OUTERMOST: { MOBILE: 128, SM: 158, MD: 210, LG: 255 },
};

type RingType = 'INNERMOST' | 'MIDDLE' | 'OUTERMOST';

const getRadius = (ringType: RingType) => {
  if (typeof window === 'undefined') {
    return RADIUS_CONFIG[ringType].MOBILE;
  }

  const width = window.innerWidth;
  const config = RADIUS_CONFIG[ringType];

  if (width >= 1024) return config.LG; // lg
  if (width >= 768) return config.MD; // md
  if (width >= 640) return config.SM; // sm
  return config.MOBILE; // default (mobile)
};


export default function RotatingIcons() {
  const [rotation, setRotation] = useState(0)
  const [outerRotation, setOuterRotation] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const interval = setInterval(() => {
      // GIẢM TỐC ĐỘ QUAY: Đổi từ 0.5 thành 0.1
      setRotation((prev) => (prev + 0.1) % 360)

      // Vòng ngoài cùng quay chậm hơn
      setOuterRotation((prev) => (prev + 0.03) % 360) // <--- Cập nhật mới

    }, 30) // Giữ 30ms cho độ mượt mà của animation CSS
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    }
  }, [])

  if (!isClient) {
    return (
      <div className="mx-auto max-w-2xl flex items-center justify-center">
        <div className={`relative w-[${MOBILE_CONTAINER_SIZE}px] h-[${MOBILE_CONTAINER_SIZE}px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[${CONTAINER_MAX_SIZE}px] lg:h-[${CONTAINER_MAX_SIZE}px] flex items-center justify-center`}>
        </div>
      </div>
    )
  }

  const innermostRadius = getRadius('INNERMOST');
  const middleRadius = getRadius('MIDDLE');
  const outermostRadius = getRadius('OUTERMOST');

  const maxContainerSize = outermostRadius * 2 + 50;

  const ICON_SIZE_CLASSES = "w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16";
  const ICON_IMAGE_SIZE_CLASSES = "w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12";

  // Class cho hiệu ứng hiện dần (opacity và scale)
  const fadeInClass = (delayMs: number) =>
    `transition-all duration-700 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'} ${delayMs > 0 ? `delay-[${delayMs}ms]` : ''}`;

  // Class cho vòng quay (chỉ áp dụng cho transform rotation)
  const rotationTransitionClass = "transition-[transform] duration-[30ms] linear";

  return (
    // Đảm bảo nền của body hoặc container gốc là màu trắng nếu chưa có
    <div className="mx-auto max-w-2xl flex items-center justify-center overflow-hidden py-10 bg-white">
      {/* Container chính, Z-50 để luôn nằm trên cùng */}
      <div
        className="relative flex items-center justify-center z-10"
        style={{ width: `${maxContainerSize}px`, height: `${maxContainerSize}px` }}
      >
        {/* Center Logo - Đứng yên tuyệt đối (delay-0) */}
        <div className={`relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-2xl flex items-center justify-center 
                        transition-all duration-500 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
          <img src="/logo.svg" className="w-14 h-14 sm:w-16 sm:h-16 object-contain" />
        </div>

        {/* Inner-most circle ring (Vòng 1 - Vành trong cùng) */}
        {/* Đã điều chỉnh màu border nhẹ hơn để giống hình ảnh */}
        <div className={`absolute rounded-full border-2 border-gray-200/50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${fadeInClass(100)}`}
          style={{ width: `${innermostRadius * 2}px`, height: `${innermostRadius * 2}px` }}
        />

        {/* Inner-most icons container (Vòng 1: Quay NGƯỢC kim đồng hồ) */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${rotationTransitionClass} ${fadeInClass(100)}`}
          style={{
            width: `${innermostRadius * 2}px`,
            height: `${innermostRadius * 2}px`,
            transform: `rotate(-${rotation}deg)`, // NGƯỢC KIM ĐỒNG HỒ
          }}
        >
          {innermostIcons.map((social, index) => {
            const angle = (index * 360) / innermostIcons.length
            const radian = (angle * Math.PI) / 180

            const x = Math.cos(radian) * innermostRadius
            const y = Math.sin(radian) * innermostRadius

            return (
              <div
                key={social.name}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${rotation}deg)`,
                }}
              >
                {/* Nền icon giữ trắng, bóng đổ nhẹ */}
                <div className={`${ICON_SIZE_CLASSES} rounded-xl sm:rounded-2xl bg-white shadow-sm flex items-center justify-center hover:scale-110 transition-transform`}>
                  <img src={social.icon} alt={social.name} className={`${ICON_IMAGE_SIZE_CLASSES} object-contain`} />
                </div>
              </div>
            )
          })}
        </div>

        {/* Middle circle ring (Vòng 2 - Vành giữa) */}
        {/* Đã điều chỉnh màu border nhẹ hơn để giống hình ảnh */}
        <div className={`absolute rounded-full border-2 border-gray-200/60 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${fadeInClass(300)}`}
          style={{ width: `${middleRadius * 2}px`, height: `${middleRadius * 2}px` }}
        />

        {/* Middle icons container (Vòng 2: Quay THUẬN chiều kim đồng hồ) */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${rotationTransitionClass} ${fadeInClass(300)}`}
          style={{
            width: `${middleRadius * 2}px`,
            height: `${middleRadius * 2}px`,
            transform: `rotate(${rotation}deg)`, // THUẬN KIM ĐỒNG HỒ
          }}
        >
          {middleIcons.map((social, index) => {
            const angle = (index * 360) / middleIcons.length + 45
            const radian = (angle * Math.PI) / 180

            const x = Math.cos(radian) * middleRadius
            const y = Math.sin(radian) * middleRadius

            return (
              <div
                key={social.name}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(-${rotation}deg)`,
                }}
              >
                {/* Nền icon giữ trắng, bóng đổ nhẹ */}
                <div className={`${ICON_SIZE_CLASSES} rounded-xl sm:rounded-2xl bg-white shadow-sm flex items-center justify-center hover:scale-110 transition-transform`}>
                  <img src={social.icon} alt={social.name} className={`${ICON_IMAGE_SIZE_CLASSES} object-contain`} />
                </div>
              </div>
            )
          })}
        </div>

        {/* Outer-most circle ring (Vòng 3 - Vành ngoài cùng) */}
        {/* Đã điều chỉnh màu border nhẹ hơn để giống hình ảnh */}
        <div className={`absolute rounded-full border-2 border-gray-200/80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${fadeInClass(500)}`}
          style={{ width: `${outermostRadius * 2}px`, height: `${outermostRadius * 2}px` }}
        />

        {/* Outer-most icons container (Vòng 3: Quay NGƯỢC chiều kim đồng hồ) */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${rotationTransitionClass} ${fadeInClass(500)}`}
          style={{
            width: `${outermostRadius * 2}px`,
            height: `${outermostRadius * 2}px`,
            transform: `rotate(-${outerRotation}deg)` // NGƯỢC KIM ĐỒNG HỒ
          }}
        >
          {outermostIcons.map((social, index) => {
            const angle = (index * 360) / outermostIcons.length - 15
            const radian = (angle * Math.PI) / 180

            const x = Math.cos(radian) * outermostRadius
            const y = Math.sin(radian) * outermostRadius

            return (
              <div
                key={social.name}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${rotation}deg)`,
                }}
              >
                {/* Nền icon giữ trắng, bóng đổ nhẹ */}
                <div className={`${ICON_SIZE_CLASSES} rounded-xl sm:rounded-2xl bg-white shadow-sm flex items-center justify-center hover:scale-110 transition-transform`}>
                  <img src={social.icon} alt={social.name} className={`${ICON_IMAGE_SIZE_CLASSES} object-contain`} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}