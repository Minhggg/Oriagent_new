'use client';

import React, { useMemo } from "react";
import {
  AreaChart,
  AreaSeries,
  Area,
  Gradient,
  GradientStop,
  Line,
  LinearXAxis,
  LinearXAxisTickSeries,
  LinearXAxisTickLabel,
  TooltipArea,
  ChartTooltip,
} from "reaviz";

// 1. Định nghĩa Interface cho dữ liệu
interface ChartDataType {
  key: Date;
  data: number;
}

// 2. Hàm tạo dữ liệu "mượt" (Random Walk)
// Giúp biểu đồ đi lên xuống từ từ, không bị giật cục
const generateSmootherData = (days: number): ChartDataType[] => {
  const data: ChartDataType[] = [];
  const today = new Date();

  // Giá trị khởi điểm
  let currentValue = 150;

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);

    // Random biến động nhỏ (từ -20 đến +20 đơn vị)
    const change = Math.floor(Math.random() * 40) - 20;
    currentValue += change;

    // Giới hạn không cho giá trị xuống quá thấp hoặc quá cao để biểu đồ đẹp
    if (currentValue < 50) currentValue = 50 + Math.random() * 10;
    if (currentValue > 300) currentValue = 300 - Math.random() * 10;

    data.push({
      key: date,
      data: currentValue,
    });
  }
  return data;
};

export const InsightChart = () => {
  // Tạo dữ liệu cho 10 ngày để đường biểu đồ thoáng mắt
  const data = useMemo(() => generateSmootherData(10), []);

  // Màu xanh nõn chuối giống ảnh mẫu
  const chartColor = "#84cc16";

  return (
    <div className="w-full max-w-[800px] p-6 bg-white rounded-3xl shadow-sm border border-gray-100 ">
      {/* Header Text */}
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Instant Insight Reporting</h3>
        <p className="text-sm text-gray-500 mt-1">
          Transform raw data into clear insights in seconds. Empower smarter decisions with real-time, always-learning intelligence
        </p>
      </div>

      {/* Chart Container */}
      <div className="h-[350px] w-full">
        <AreaChart
          data={data}
          // Ẩn trục Y và lưới ngang dọc để giao diện sạch như ảnh
          gridlines={undefined}
          yAxis={undefined}
          series={
            <AreaSeries
              colorScheme={chartColor}
              interpolation="smooth" // Làm cong đường biểu đồ
              line={
                <Line
                  strokeWidth={3}
                  style={{ stroke: chartColor }}
                />
              }
              area={
                <Area
                  interpolation="smooth" // Làm cong vùng màu
                  gradient={
                    <Gradient
                      stops={[
                        <GradientStop
                          key="start"
                          offset={0} // TypeScript: dùng số thay vì string "0%"
                          stopOpacity={0.4} // Độ mờ ở đỉnh
                          color={chartColor}
                        />,
                        <GradientStop
                          key="end"
                          offset={1} // TypeScript: dùng số thay vì string "100%"
                          stopOpacity={0} // Trong suốt ở đáy
                          color={chartColor}
                        />,
                      ]}
                    />
                  }
                />
              }
              tooltip={
                <TooltipArea
                  tooltip={
                    <ChartTooltip
                      followCursor={true}
                      // Custom giao diện Tooltip thành viên thuốc màu đen
                      content={(d: { y?: number }) => (
                        <div className="bg-black text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg transform -translate-y-2">
                          {d.y?.toLocaleString()}
                        </div>
                      )}
                    />
                  }
                />
              }
            />
          }
          xAxis={
            <LinearXAxis
              type="time"
              tickSeries={
                <LinearXAxisTickSeries
                  line={null} // Ẩn các vạch kẻ nhỏ trên trục X
                  label={
                    <LinearXAxisTickLabel
                      padding={15}
                      format={(d: Date) =>
                        new Date(d).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })
                      }
                      // Style trực tiếp cho SVG Text để tránh lỗi TS
                      fill="#9ca3af"
                      fontSize={12}
                    />
                  }
                />
              }
            />
          }
        />
      </div>
    </div>
  );
};