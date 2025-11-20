export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <article className="container mx-auto px-4 max-w-3xl">
        <div className="mb-12">
          <span className="text-lg text-gray-600 block mb-2">Privacy Policy</span>
          <span className="text-sm text-gray-400 block">Last updated: April 01, 2023</span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4 uppercase tracking-tight">PRIVACY POLICY</h1>

        <p className="text-lg font-bold text-gray-900 mb-16">Last updated April 01, 2023</p>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase">PRIVACY NOTICE</h2>

          <p className="mb-6">
            This privacy notice for <span className="font-bold text-gray-900">AiAgent.app</span> ('
            <span className="font-bold text-gray-900">Company</span>', '
            <span className="font-bold text-gray-900">we</span>', '<span className="font-bold text-gray-900">us</span>',
            or '<span className="font-bold text-gray-900">our</span>'), describes how and why we might collect, store,
            use, and/or share ('<span className="font-bold text-gray-900">process</span>') your information when you use
            our services ('<span className="font-bold text-gray-900">Services</span>'), such as when you:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              Visit our website at{" "}
              <a href="#" className="text-blue-500 hover:underline">
                aiagent.app
              </a>
              , or any website of ours that links to this privacy notice
            </li>
            <li>Engage with us in other related ways, including any sales, marketing, or events</li>
          </ul>

          <p className="mb-6">
            <span className="font-bold text-gray-900">Questions or concerns?</span> Reading this privacy notice will
            help you understand your privacy rights and choices. If you do not agree with our policies and practices,
            please do not use our Services. If you still have any questions or concerns, please contact us at{" "}
            <a href="mailto:hello@aiagent.app" className="text-blue-500 hover:underline">
              hello@aiagent.app
            </a>
            .
          </p>
        </div>
      </article>
    </div>
  )
}
