"use client"

import { Check } from "lucide-react"
import type * as React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export interface PricingPlan {
  slug: string
  flatPrice: string
  isEnterprisePlan: boolean
  description: string
  features: string[]
  cta: string
  currency: string
  billingPeriod: string
}

export interface PricingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  plan: PricingPlan
  isPopular: boolean
}

export function PricingCard({
  plan,
  isPopular,
  className,
  ...props
}: PricingCardProps) {
  const currentPrice = plan.flatPrice

  return (
    <Card
      className={cn(
        "flex flex-col",
        isPopular && "border-primary shadow-lg relative",
        className
      )}
      style={
        isPopular
          ? {
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            }
          : {}
      }
      {...props}
    >
          {isPopular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <span
            className="text-sm font-medium py-1 px-3 rounded-full bg-primary text-primary-foreground"
          >
            Recommended
          </span>
        </div>
      )}
      <CardHeader>
        <CardTitle>{plan.slug}</CardTitle>
        <div className="mt-2">
          {!plan.isEnterprisePlan && (
            <div className="flex items-baseline">
              <span className="text-3xl font-bold">{currentPrice}</span>
              <span className="text-muted-foreground ml-1">/{plan.billingPeriod}</span>
            </div>
          )}
        </div>
        <CardDescription className="mt-2 line-clamp-2">{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-center">
              <Check
                className="h-4 w-4 mr-2 flex-shrink-0 text-primary"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className={cn("w-full", isPopular && "bg-primary text-primary-foreground")}
          variant={isPopular ? "default" : "outline"}
        >
          {plan.cta}
        </Button>
      </CardFooter>
    </Card>
  )
}
