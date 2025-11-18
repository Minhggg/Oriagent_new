export default function AutomationVideoDemo() {
  const steps = ['Input', 'Process', 'Analyze', 'Output'];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 rounded-lg border border-gray-200 p-8">
      <div className="text-center mb-6">
        <h3 className="font-bold text-lg">Smart Automation</h3>
        <p className="text-sm text-gray-600 mt-2">
          Set it & forget it: Intelligent automation that works for your workflow.
        </p>
      </div>

      {/* Automation Flow */}
      <div className="flex items-center gap-2 mb-6">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center">
            <div className="w-10 h-10 bg-yellow-300 rounded-full flex items-center justify-center text-sm font-bold text-gray-900">
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <div className="w-8 h-0.5 bg-gray-300 mx-2" />
            )}
          </div>
        ))}
      </div>

      {/* Status message */}
      <div className="p-3 bg-green-100 text-green-800 rounded-lg text-sm font-medium text-center">
        ✓ Automation running smoothly
      </div>
    </div>
  );
}
