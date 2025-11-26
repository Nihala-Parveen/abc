import Image from "next/image";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";

export default function Footer() {
  return (
    <div className="bg-blue-100 h-[350px] mt-20">
      <div className="px-8 py-8 text-black w-full">
        <div className="grid grid-cols-5">
          <div className="font-bold text-3xl">MindWell</div>
          <div className="">
            <ul>
              <p className="font-bold text-sm">We Help With</p>
              <li>Depression</li>
              <li>Anxiety</li>
              <li>Stress</li>
            </ul>
          </div>
          <div className="">
            <ul>
              <p className="font-bold text-sm">For Therapists</p>   
              <li>Join as Therapist</li>
              <li>Therapist Login</li>
            </ul>
          </div>
          <div>
            <ul>
              <p className="font-bold text-sm">For Organizations</p>   
              <li>Partner with us</li>
              <li>Organization Login</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-black border-t border-black/20 py-3 flex flex-col items-center justify-center">
        <div className="flex space-x-4 mr-5 text-xl" >
          <CiFacebook  />
          <CiTwitter />
          <FaInstagram />
          <TbBrandLinkedin />
        </div>
        <div className="text-sm pt-3">
          © Copyright.All rights reserved.
        </div>
      </div>
    </div>
  );
}