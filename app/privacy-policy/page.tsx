import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { PrivacyPolicyContent } from "@/components/privacy-policy/privacy-policy-content";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Banner */}
      <PageBanner
        title="Privacy Policy"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
        imageSrc="/images/extra-banner-image.webp"
      />

      {/* Content */}
      <main className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <PrivacyPolicyContent />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
