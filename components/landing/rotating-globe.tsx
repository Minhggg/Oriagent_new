import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Component chứa mô hình 3D của Quả Cầu Phong Cách Vẽ Tay.
 * Sử dụng MeshLambertMaterial để tạo ánh sáng khuếch tán, phù hợp với phong cách phẳng.
 */
function HandDrawnGlobe() {
  const globeRef = useRef<THREE.Mesh>(null);

  // Hook useFrame chạy trên mỗi khung hình để tạo chuyển động xoay
  useFrame(() => {
    const rotationSpeed = 0.005;

    // Đảm bảo globeRef.current tồn tại trước khi truy cập thuộc tính
    if (globeRef.current) {
      // Phép toán số học an toàn vì rotation.y là number (THREE.Euler)
      globeRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <group>
      {/* 1. Quả cầu chính - Phong cách vẽ tay/giấy cũ */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshLambertMaterial
          // Chỉ sử dụng màu sắc, không dùng texture
          color={'#8B4513'} // Màu nâu đất hoặc giấy cũ
          flatShading={true} // Tùy chọn: Để có góc cạnh, tạo cảm giác thô hơn
        />
      </mesh>

      {/* 2. Đường viền (Wireframe) - Mô phỏng lưới hoặc nét vẽ mờ */}
      <mesh scale={1.005}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color="black"
          wireframe={true}
          transparent={true}
          opacity={0.05}
        />
      </mesh>
    </group>
  );
}

// --------------------------------------------------------------------------

/**
 * Component chính - Vỏ bọc cho cảnh 3D
 * Không cần Suspense và LoadingOverlay vì không tải file ngoài
 */
export default function RotatingGlobe() {
  return (
    <div className="w-full h-[500px] md:h-[700px] bg-gray-900 rounded-xl shadow-2xl relative overflow-hidden font-sans">

      {/* Tiêu đề hiển thị */}
      <div className="absolute top-4 left-4 text-white text-lg font-bold z-10 p-2 bg-gray-700/60 rounded-lg shadow-md">
        Quả Cầu Vẽ Tay 3D (React/Three.js)
      </div>

      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        className="w-full h-full"
      >
        {/* Ánh sáng cho phong cách vẽ tay */}
        <ambientLight intensity={1} color="#ffffff" />
        <pointLight position={[10, 5, 10]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -5, -10]} intensity={0.2} color="#ffffff" />

        {/* Cho phép người dùng xoay và zoom camera */}
        <OrbitControls enableZoom={true} enablePan={false} />

        {/* Nền Sao */}
        <Stars
          radius={300}
          depth={60}
          count={20000}
          factor={7}
          saturation={0}
          fade={true}
        />

        {/* Mô hình Quả cầu Vẽ tay */}
        <HandDrawnGlobe />

      </Canvas>
    </div>
  );
}