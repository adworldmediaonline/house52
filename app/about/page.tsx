import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { WhoWeAreSection } from "@/components/who-we-are-section";
import { Contact } from "@/components/contact";

export default function AboutPage() {

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Banner */}
      <PageBanner
        title="About Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
        imageSrc="/images/extra-banner-image.webp"
      />

      {/* Content */}
      <main>


        {/* Who We Are Section */}
        <WhoWeAreSection />

        {/* Contact Section */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
