import Image from "next/image";

export default function Header() {
  return (
    // <div className=  "bg-blue-100 fixed w-full top-0 left-0 shadow-md z-10">
    <div className=  "absolute top-0 left-0 w-full z-50 bg-blue-100 shadow-md">
      <div className="px-8 py-3 text-black/50">
        <div className="flex items-center justify-between">
        <div className="font-bold">MindWell</div>
        <nav className="space-x-10">
          <a>Home</a>
          <a>Services</a>
          <a>For Clinicals</a>
          <a>For organizations</a>
        </nav>
        <div className="rounded-full border border-blue-500 px-4 py-1 text-blue-500 hover:bg-blue-500 hover:text-white">
          <a href="" className="text text-sm">Find a Therapist</a>
        </div>
      </div>
      </div>
    </div>
  );
}