import React from "react";
import PricingSummary from "./pricing/PricingSummary";
import MainPricingCard from "./pricing/MainPricingCard";
import PricingBottomItems from "./pricing/PricingBottomItems";

export default function Pricing() {
  return (
    <section id="cennik">
      <PricingSummary></PricingSummary>
      <MainPricingCard></MainPricingCard>
      <PricingBottomItems></PricingBottomItems>
    </section>
  );
}
