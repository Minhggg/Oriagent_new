export default function AnalyticsVideoDemo() {
  return (
    <div className="w-full h-full flex flex-col bg-gray-50 rounded-lg border border-gray-200 p-8">
      <div className="text-center mb-6">
        <h3 className="font-bold text-lg">Instant Insight Reporting</h3>
        <p className="text-sm text-gray-600 mt-2">
          Transform raw data into actionable intelligence with advanced analytics and detailed reporting.
        </p>
      </div>

      {/* Simple Chart Visualization */}
      <div className="flex-1 flex items-end justify-center gap-2 h-32">
        {[40, 60, 45, 75, 55, 65].map((height, index) => (
          <div
            key={index}
            className="bg-gradient-to-t from-yellow-400 to-yellow-300 rounded-t"
            style={{
              width: '24px',
              height: `${height}%`,
            }}
          />
        ))}
      </div>

      {/* Chat bubble overlay */}
      <div className="mt-4 p-3 bg-yellow-300 rounded-lg text-center">
        <p className="text-sm font-semibold text-gray-900">Your insights are ready!</p>
      </div>
    </div>
  );
}
