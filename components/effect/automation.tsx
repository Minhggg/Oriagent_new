'use client';

import React from 'react';
import {
  BarChart,
  LinearYAxis,
  LinearYAxisTickSeries,
  LinearYAxisTickLabel,
  LinearXAxis,
  LinearXAxisTickSeries,
  BarSeries,
  Bar,
  GridlineSeries,
  Gridline,
} from 'reaviz'; // Bỏ LinearXAxisTickLabel ở đây

interface ChartCategoryData {
  key: string;
  data: number | null;
}

const categoryDataRaw: ChartCategoryData[] = [
  { key: 'Landing Page', data: 85 },
  { key: 'Add Feature X', data: 70 },
  { key: 'Bug Fixing', data: 95 },
  { key: 'Deploy Update', data: 60 },
];

const validatedCategoryData = categoryDataRaw.map(item => ({
  ...item,
  data: (typeof item.data === 'number' && !isNaN(item.data)) ? item.data : 0,
}));

const chartColors = ['#4C86FF', '#40E5D1', '#40D3F4', '#9152EE'];
const xTickValues = [0, 20, 40, 60, 80, 100, 120, 140];

// --- SỬA LỖI: Tự tạo component nhãn cho trục X ---
// Component này nhận props từ Reaviz (x, y, data) và render thẻ text SVG
const CustomXAxisTickLabel = (props: any) => {
  return (
    <text
      x={props.x}
      y={props.y + 15} // Đẩy xuống dưới một chút để không dính vào trục
      textAnchor="middle" // Căn giữa text
      fill="#9ca3af"
      fontSize={10}
      fontFamily="monospace"
    >
      {props.data}
    </text>
  );
};

function IncidentSummaryCard(): React.ReactNode {
  return (
    <div className="w-full max-w-[800px] p-6 bg-white rounded-3xl shadow-sm border border-gray-100 ">

      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Smart Automation</h3>
        <p className="text-sm text-gray-500 mt-1">
          Set it, forget it. Your AI Agent tackles repetitive tasks so you can focus on strategy, innovation, and growth.
        </p>
      </div>

      <div className="h-[350px] w-full flex items-center justify-center">
        <BarChart
          id="horizontal-incident-summary-chart"
          data={validatedCategoryData}
          yAxis={
            <LinearYAxis
              type="category"
              tickSeries={
                <LinearYAxisTickSeries
                  label={
                    <LinearYAxisTickLabel
                      padding={10}
                      format={(text: string) => (text.length > 8 ? `${text.slice(0, 8)}...` : text)}
                      fill="#9ca3af"
                      fontSize={12}
                    />
                  }
                  line={null}
                />
              }
            />
          }
          xAxis={
            <LinearXAxis
              type="value"
              // Bỏ tickValues vì nó không ăn, ta xử lý bằng CustomLabel
              axisLine={undefined}
              tickSeries={
                <LinearXAxisTickSeries
                  // Dùng component đã sửa logic lọc số
                  label={<CustomXAxisTickLabel />}
                  line={undefined}
                />
              }
            />
          }
          series={
            <BarSeries
              layout="horizontal"
              bar={
                <Bar
                  rx={4}
                  ry={4}
                  gradient={undefined}
                />
              }
              colorScheme={chartColors}
              padding={0.4}
            />
          }
          // Ẩn lưới dọc (vertical gridlines) để đỡ bị rối mắt vì vạch chia quá dày
          gridlines={null}
        />
      </div>
    </div>
  );
}

export default IncidentSummaryCard;