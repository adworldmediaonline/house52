import Link from "next/link";
import {
  MapPinIcon,
  ClockIcon,
  PhoneIcon,
  MailIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  TwitterIcon,
} from "lucide-react";
import type { ContactInfo, SocialMediaLink } from "./contact-page-content";

interface ContactInfoProps {
  info: ContactInfo;
}

const iconMap = {
  location: MapPinIcon,
  clock: ClockIcon,
  phone: PhoneIcon,
  email: MailIcon,
};

export function ContactInfoItem({ info }: ContactInfoProps) {
  const Icon = iconMap[info.icon];
  const isClickable = info.icon === "phone" || info.icon === "email";

  const content = (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 p-2.5 rounded-full bg-accent/10 border border-accent/20">
        <Icon className="size-5 text-accent" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-base font-semibold text-foreground mb-1">
          {info.label}
        </h4>
        <p className="text-sm text-muted-foreground">{info.value}</p>
      </div>
    </div>
  );

  if (isClickable) {
    const href = info.icon === "phone" ? `tel:${info.value}` : `mailto:${info.value}`;
    return (
      <Link
        href={href}
        className="block p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="p-4 rounded-xl bg-card border border-border/50">
      {content}
    </div>
  );
}

interface SocialMediaItemProps {
  link: SocialMediaLink;
}

const socialIconMap = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  pinterest: ({ className }: { className?: string }) => (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  ),
  youtube: YoutubeIcon,
  twitter: TwitterIcon,
};

export function SocialMediaItem({ link }: SocialMediaItemProps) {
  const Icon = socialIconMap[link.icon];

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 border border-accent/20 hover:bg-accent/20 hover:border-accent/30 transition-colors"
      aria-label={link.platform}
    >
      <Icon className="size-5 text-accent" />
    </a>
  );
}
