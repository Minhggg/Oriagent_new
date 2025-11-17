import { CheckCheck, X } from "lucide-react"

export function ComparisonSection() {
  const comparisonData = [
    {
      feature: 'Setup',
      generic: 'One-size, confusing configuration',
      aiagent: 'Fully managed by our team — just show us your process',
    },
    {
      feature: 'Customization',
      generic: 'One-size-fits-all templates',
      aiagent: 'Tailored agents trained on your unique workflows',
    },
    {
      feature: 'Time Savings',
      generic: 'Takes weeks to configure and fine-tune',
      aiagent: 'Ready-to-run in under 7 days',
    },
    {
      feature: 'Integration',
      generic: 'Limited app connections',
      aiagent: 'Integrated into your existing tools + stack',
    },
    {
      feature: 'Maintenance',
      generic: "You're on your own",
      aiagent: 'Ongoing monitoring, updates, and optimization',
    },
    {
      feature: 'Expertise',
      generic: 'No strategic input',
      aiagent: 'AI consultants help define the ideal solution',
    },
    {
      feature: 'Scalability',
      generic: 'Built for individuals',
      aiagent: 'Designed for scaling teams + workflows',
    },
    {
      feature: 'Cost Efficiency',
      generic: 'DIY = hidden time and talent costs',
      aiagent: 'Clear pricing. No hiring. No overhead.',
    },
    {
      feature: 'Output Quality',
      generic: 'Inconsistent results',
      aiagent: 'Iterated until your agent works perfectly',
    },
    {
      feature: 'Ownership',
      generic: 'Platform-owned workflows',
      aiagent: 'You fully own the code and IP',
    },
  ]

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
              Compares
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Off-the-Shelf AI Tools Waste Time.
            <br />
            <span className="text-black">We Build Agents That Save It.</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Generic tools give you features. We give you outcomes — by designing, building, and
            optimizing AI agents tailored to workflow.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">

                <th className="px-6 py-4  font-semibold bg-gray-50">
                  <span className="text-black text-xl font-bold flex justify-center items-center gap-2">
                    Feature
                  </span>
                </th>
                <th className="px-6 py-4  font-semibold bg-orange-100">
                  <span className="text-black text-xl font-bold flex justify-center items-center gap-2">

                    Generic AI Tools
                  </span>
                </th>
                <th className="px-6 py-4 text-center font-semibold bg-yellow-50  ">
                  <span className="text-black text-xl font-bold flex justify-center items-center gap-2">

                    OriAgent (Done-For-You)
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-left text-gray-900">{row.feature}</td>
                  <td className="px-6 py-4 bg-orange-100 text-center text-gray-600">{row.generic}</td>
                  <td className="px-6 py-4 bg-yellow-50 text-center text-gray-700">{row.aiagent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
