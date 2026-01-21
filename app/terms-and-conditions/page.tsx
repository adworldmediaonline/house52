import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { TermsAndConditionsContent } from "@/components/terms-and-conditions/terms-and-conditions-content";

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Banner */}
      <PageBanner
        title="Terms and Conditions"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms and Conditions" },
        ]}
        imageSrc="/images/extra-banner-image.webp"
      />

      {/* Content */}
      <main className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <TermsAndConditionsContent />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
