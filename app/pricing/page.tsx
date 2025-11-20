import { Check, Minus } from "lucide-react"
import { PricingPlans } from "@/components/pricing/pricing-plans"
import { CreditPacks } from "@/components/pricing/credit-packs"
import { Testimonials } from "@/components/pricing/testimonials"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <PricingPlans />
      <CreditPacks />
      <Testimonials />
    </div>
  )
}

function CheckIcon() {
  return (
    <div className="w-6 h-6 rounded-full bg-[#ccf381] flex items-center justify-center">
      <Check className="w-3.5 h-3.5 text-black" strokeWidth={3} />
    </div>
  )
}

function MinusIcon() {
  return (
    <div className="w-6 h-6 flex items-center justify-center">
      <Minus className="w-4 h-4 text-gray-300" />
    </div>
  )
}
