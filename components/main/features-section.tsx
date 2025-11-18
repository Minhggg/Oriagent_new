'use client';

export function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: 'Your Personal Knowledge Ecosystem',
      description: 'Transform the way you store and access information with an elegantly designed knowledge base that adapts to your workflow. Organize your data with intuitive precision.',
      illustration: '/knowledge.svg',
    },
    {
      id: 2,
      title: 'Beautifully Transparent Process',
      description: 'Experience unprecedented clarity with our immersive visualization tools. Watch your AI agent work in real-time, putting you in complete control.',
      illustration: '/process.svg',
    },
    {
      id: 3,
      title: 'Effortlessly Powerful. No Code Needed.',
      description: 'Revolutionary simplicity meets sophisticated technology. Create powerful AI workflows with intuitive commands—no programming required.',
      illustration: '/simple.svg',
    },
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="border-l border-r border-b border-gray-200 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-x divide-gray-200">
            {features.map((feature) => (
              <div key={feature.id} className="flex flex-col">
                {/* Image Section */}
                <div className="h-72 overflow-hidden bg-gray-50 flex items-center justify-center border-b border-gray-200">
                  <img
                    src={feature.illustration || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-40 h-40 object-cover"
                  />
                </div>

                {/* Text Section */}
                <div className="flex-1 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
