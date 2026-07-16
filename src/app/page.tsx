import Benefits from "@/components/Benefits";
import CompanyCourses from "@/components/CompanyCourses";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PricingCta from "@/components/PricingTca";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <Benefits></Benefits>
      <CompanyCourses></CompanyCourses>
      <PricingCta />
      <Footer></Footer>
    </main>
  );
}
