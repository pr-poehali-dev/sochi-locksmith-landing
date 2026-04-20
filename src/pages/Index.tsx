import SiteHeader from "@/components/landing/SiteHeader";
import LandingSections from "@/components/landing/LandingSections";
import SiteFooter from "@/components/landing/SiteFooter";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader />
      <LandingSections />
      <SiteFooter />
    </div>
  );
}
