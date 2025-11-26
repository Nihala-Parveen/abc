import Image from "next/image";
import Header from "@/components/header";
import Footer from "./footer";

export default function Service() {
  return (
    <div className="text text-black w-full items-center justify-center bg-zinc-50 font-sans pt-10">
      <div className="grid grid-cols-2">
        <div className="flex items-center justify-center"> 
          <Image  
            alt="Service Image"
            height={500}
            width={500}
            src="/images/banner2.jpg"
            style={{ width:"350px",  height:"300px"}}
          />
        </div>
        <div className="pt-20 ">
            <h1 className="text text-4xl font-bold font-[Consolas] pb-10">My <span className="text-blue-400">Services</span> </h1>
            <p className="text-slate-400">We create smart and agile tests for Experience <br /> Management, <span className="text-black">Market Research & Education.</span>We have 20+ <br /> years of experience in academic</p>
        </div>
      </div>
    </div>
  );
}
