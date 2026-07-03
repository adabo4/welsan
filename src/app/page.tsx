import Benefits from "@/components/Benefits";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import PricingCta from "@/components/PricingTca";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <Header></Header>
      <Benefits></Benefits>
      <PricingCta />
    </main>
  );
}
