import Benefits from "@/components/Benefits";
import Corporate from "@/components/corporate/Corporate";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PricingCta from "@/components/PricingTca";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <Benefits></Benefits>
      <Corporate></Corporate>
      <PricingCta />
      <Footer></Footer>
    </main>
  );
}
