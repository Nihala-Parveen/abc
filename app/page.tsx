import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Service from "@/components/service";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="fixed top-0 w-full">
        <Header />
      </div>
      <Banner />
      <Service />
      <Footer />
    </div>
  );
}
