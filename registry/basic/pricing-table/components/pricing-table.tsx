"use client"

import type * as React from "react"
import { cn } from "@/lib/utils"
import { PricingCard, type PricingPlan } from "./pricing-card"

export interface PricingTableProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: string
  plans: PricingPlan[]
  yearlyDiscount?: number
  discountLabel?: string
  popularPlan: string
}

export function PricingTable({
  title = "Simple, Transparent Pricing",
  subtitle = "Choose the plan that's right for you",
  plans,
  discountLabel = "Save",
  className,
  popularPlan,
  ...props
}: PricingTableProps) {
  return (
    <div className={cn("w-full py-10", className)} {...props}>
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        <p className="text-muted-foreground mt-2">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <PricingCard
            key={plan.slug}
            plan={plan}
            isPopular={plan.slug.toLowerCase() === popularPlan.toLowerCase()}
          />
        ))}
      </div>
    </div>
  )
}
