import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { ContactPageInfo } from "@/components/contact-page";
import { ContactForm } from "@/components/contact-page";
import { contactPageContent } from "@/components/contact-page";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Banner */}
      <PageBanner
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
        imageSrc="/images/extra-banner-image.webp"
      />

      {/* Content */}
      <main className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Info */}
            <div>
              <ContactPageInfo content={contactPageContent} />
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="p-8 rounded-2xl bg-card border border-border/50">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
