import SiteHeader from "@/components/landing/SiteHeader";
import LandingSections from "@/components/landing/LandingSections";
import SiteFooter from "@/components/landing/SiteFooter";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader />
      <div className="pt-16">
        <LandingSections />
        <SiteFooter />
      </div>
    </div>
  );
}
