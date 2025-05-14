import * as React from "react"
import { OpenInV0Button } from "@/components/open-in-v0-button"
import { PricingTable } from "@/registry/basic/pricing-table/components/pricing-table"

const plans = [
  {
    slug: "BASIC",
    description: "Essential features for individuals and small teams",
    features: ["1 user", "5 projects", "5GB storage", "Basic support", "48-hour response time"],
    cta: "Get Started",
    popular: false,
    flatPrice: "9",
    isEnterprisePlan: false,
    currency: "USD",
    billingPeriod: "month",
  },
  {
    slug: "PRO",
    description: "Advanced features for growing teams",
    features: [
      "5 users",
      "20 projects",
      "50GB storage",
      "Priority support",
      "24-hour response time",
      "Advanced analytics",
      "Custom domains",
    ],
    cta: "Get Started",
    popular: true,
    flatPrice: "29",
    isEnterprisePlan: false,
    currency: "USD",
    billingPeriod: "month",
  },
  {
    slug: "ENTERPRISE",
    description: "Complete solution for businesses",
    features: [
      "Unlimited users",
      "Unlimited projects",
      "500GB storage",
      "24/7 dedicated support",
      "1-hour response time",
      "Advanced analytics",
      "Custom domains",
      "SSO authentication",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    popular: false,
    flatPrice: "99",
    isEnterprisePlan: true,
    currency: "USD",
    billingPeriod: "month",
  },
]

// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Custom Registry</h1>
        <p className="text-muted-foreground">
          A custom registry for distributing code using shadcn.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A pricing table component.
            </h2>
            <OpenInV0Button name="pricing-table" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <PricingTable plans={plans} popularPlan="PRO" />
          </div>
        </div>
      </main>
    </div>
  )
}
