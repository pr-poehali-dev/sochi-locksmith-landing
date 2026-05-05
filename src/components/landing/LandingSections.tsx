import { HeroSection, WhyMasterSection } from "./HeroSection";
import { ServicesSection, DocumentsSection, GuaranteesSection } from "./InfoSections";
import { ServiceZonesSection, ReviewsSection } from "./ZonesAndReviews";
import { OrderFormSection } from "./OrderFormSection";

function Divider() {
  return <div className="section-divider mx-8" />;
}

export default function LandingSections() {
  return (
    <>
      <HeroSection />
      <WhyMasterSection />
      <Divider />
      <ServicesSection />
      <Divider />
      <DocumentsSection />
      <Divider />
      <GuaranteesSection />
      <Divider />
      <ServiceZonesSection />
      <Divider />
      <ReviewsSection />
      <Divider />
      <OrderFormSection />
    </>
  );
}
