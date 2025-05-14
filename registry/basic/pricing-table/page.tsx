import { PricingTable } from "@/registry/basic/pricing-table/components/pricing-table"
import { unprice } from "@/registry/basic/pricing-table/lib/unprice"

export default async function Page() {
  const {
    result: plansUnprice,
    error,
  } = await unprice.plans.listPlanVersions({
    onlyPublished: true,
    onlyLatest: true,
    currency: "EUR",
  })

  if (error) {
    return <div>Error fetching plans</div>
  }

  // Transform Unprice plans to match our PricingPlan interface
  const plans = plansUnprice.planVersions.map((version) => {
    // Get features from plan features
    const features = version.planFeatures.filter(feature => !feature.hidden).map(feature => {
      return feature.displayFeatureText
    }) || []

    return {
      slug: version.plan.slug,
      flatPrice: version.flatPrice,
      currency: version.currency,
      description: version.description || "No description available",
      features,
      cta: version.plan.enterprisePlan ? "Contact Us" : "Get Started",
      isEnterprisePlan: version.plan.enterprisePlan || false,
      billingPeriod: version.billingConfig.billingInterval,
    }
  }) || []

  return (
    <main className="container mx-auto">
      <PricingTable plans={plans} popularPlan="PRO" />
    </main>
  )
}
