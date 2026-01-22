import Link from "next/link";
import Image from "next/image";
import logo from "../../public/house-52-logo.webp";

export function FooterLogo() {
  return (
    <Link
      href="/"
      className="relative h-10 w-auto transition-opacity hover:opacity-80"
      aria-label="House 52 Home"
    >
      <Image
        src={logo}
        alt="House 52"
        className="object-contain max-w-[120px]"
        sizes="(max-width: 768px) 150px, 180px"
      />
    </Link>
  );
}
