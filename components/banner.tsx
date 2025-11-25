import Image from "next/image";
import Header from "@/components/header";
import Footer from "./footer";

export default function Banner() {
  return (
      <div className="relative w-full items-center justify-center bg-zinc-50 font-sans dark:bg-black h-[80svh]">
        <Image
          className="object-cover w-full h-full"
          alt="Banner Image"
          width={500}
          height={100}
          src="/images/banner.png"
        />
      </div>
  );
}
