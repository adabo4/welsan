import React from "react";
import PricingSummary from "./pricing/PricingSummary";
import MainPricingCard from "./pricing/MainPricingCard";
import PricingBottomItems from "./pricing/PricingBottomItems";

export default function Pricing() {
  return (
    <>
      <PricingSummary></PricingSummary>
      <MainPricingCard></MainPricingCard>
      <PricingBottomItems></PricingBottomItems>
    </>
  );
}
