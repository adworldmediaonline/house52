import { ContactInfoItem, SocialMediaItem } from "./contact-info";
import type { ContactPageContent } from "./contact-page-content";

interface ContactPageInfoProps {
  content: ContactPageContent;
}

export function ContactPageInfo({ content }: ContactPageInfoProps) {
  const { label, title, brandInfo, description, contactInfo, socialMediaLabel, socialMediaLinks } = content;

  return (
    <div className="space-y-8">
      {/* Label */}
      <div className="space-y-2">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          {label}
        </p>
        <div className="w-12 h-0.5 bg-accent rounded-full" />
      </div>

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground uppercase tracking-tight leading-[1.1]">
        {title}
      </h2>

      {/* Brand Info */}
      <p className="text-sm sm:text-base text-muted-foreground italic">
        {brandInfo}
      </p>

      {/* Description */}
      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Contact Info */}
      <div className="space-y-4 pt-4">
        {contactInfo.map((info) => (
          <ContactInfoItem key={info.label} info={info} />
        ))}
      </div>

      {/* Social Media */}
      <div className="space-y-4 pt-4">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          {socialMediaLabel}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          {socialMediaLinks.map((link) => (
            <SocialMediaItem key={link.platform} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
}
