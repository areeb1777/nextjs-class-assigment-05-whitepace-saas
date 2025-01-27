import Hero from "@/app/components/Hero";
import ProjectManagement from "@/app/components/ProjectManagement";
import WorkTogether from "@/app/components/WorkTogather";
import Extension from "@/app/components/Extension";
import Customize from "@/app/components/Customize";
import PricingPlans from "@/app/components/PricingPlans";
import YourWork from "@/app/components/YourWork";
import YourData from "@/app/components/YourData";
import Sponsors from "@/app/components/Sponsors";
import CustomComponent from "@/app/components/Custom";
import ClientTestimonials from "@/app/components/ClientTestimonials";
import TryWhitepace from "@/app/components/TryWhitepace";

export default function Home() {
  return (
    <>
    <Hero />
    <ProjectManagement />
    <WorkTogether />
    <Extension />
    <Customize />
    <PricingPlans />
    <YourWork />
    <YourData />
    <Sponsors />
    <CustomComponent />
    <ClientTestimonials />
    <TryWhitepace />
    </>
  );
}
