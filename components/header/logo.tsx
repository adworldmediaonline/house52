import Image from "next/image";
import logo from "../../public/house-52-logo.webp";
export function Logo() {
  return (
    <div className="relative overflow-hidden w-[70px] h-[70px] sm:w-[100px] sm:h-[100px]">
      <Image
        src={logo}
        alt="House 52"
        className="object-cover"
        priority
        sizes="(max-width: 768px) 120px, 150px"
      />
    </div>
  );
}
