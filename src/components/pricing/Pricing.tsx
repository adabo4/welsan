import React from "react";
import PricingSummary from "./PricingSummary";
import MainPricingCard from "./MainPricingCard";
import VirtualClassroom from "./VirtualClassroom";
import PricingBottomItems from "./PricingBottomItems";

export default function Pricing() {
  return (
    <>
      <PricingSummary></PricingSummary>
      <MainPricingCard></MainPricingCard>
      <VirtualClassroom></VirtualClassroom>
      <PricingBottomItems></PricingBottomItems>
    </>
  );
}
