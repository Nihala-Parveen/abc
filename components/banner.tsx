import Image from "next/image";
import Header from "@/components/header";
import Footer from "./footer";

export default function Banner() {
  return (
    <div className="text text-black w-full items-center justify-center font-sans h-[550px]">
      <div className="grid grid-cols-2 items-center justify-center">
        <div className="items-center justify-center space-y-4 px-28 mt-20">
          <h1 className="text text-5xl font-bold font-[Consolas]">
            <span className=""> Psychotherapy</span> <br />
            <span className="text-blue-300">for your needs</span>
          </h1>
          <p className="text-slate-400">
            Psychology is the science of mind and behavior. It <br /> includes
            the study of conscious and unconscious <br /> phenomena, as well as
            feeling and thought.
          </p>
        </div>
        <div className="">
          <div className="relative w-full h-[500px] flex items-center justify-center">
            <div className="absolute top-0 right-0 bg-slate-100 h-[500px] w-[500px] flex justify-end">
              <Image
                className="object-cover mt-20 right-0 "
                alt="Banner Image 1"
                width={100}
                height={100}
                src="/images/banner2.jpg"
                style={{ width: "350px", height: "420px" }}
              />
            </div>
            <div className="top-0 right-0 bg-slate-100 h-[500px] w-[50px] ">
              <Image
                className="absolute top-50 left-50 z-20 "
                alt="Banner Image 1"
                width={400}
                height={800}
                src="/images/banner3.jpg"
                style={{height : "370px"}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
