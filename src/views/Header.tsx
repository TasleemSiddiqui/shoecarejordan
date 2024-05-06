import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Menu } from "lucide-react";
import ToggleMenu from "@/components/toggle-menu";
import { Iproducts, datafetch } from "@/datafetch";


const Header = async () => {
  const data:Iproducts[] =await datafetch();
  const uniqueLinks = Array.from(new Set(data.map((item:any) => item.pCategories)));
  
  return (
    <header className="text-gray-600 body-font">
      <div className=" top-0  bg-white grid grid-cols-2 justify-between  mx-auto md:flex md:flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Image src={logo} alt="shoe care Jordan" height={70} />
        </Link>
        <Input className="hidden md:flex w-300" placeholder="search" />

        <nav className=" hidden md:ml-auto md:flex flex-wrap items-center text-base justify-center">
          <Link href={"/"} className="mr-5 hover:text-blue-400 text-gray-700">
            Home
          </Link>
          
        {uniqueLinks.map((item:any,index)=>{
          
          return(<Link key={index} className="mr-5 hover:text-blue-400 text-gray-700" href={`/categories/${item}`}>{item}</Link>)
        })}
        
          <Link href={"/products"} className="mr-5 hover:text-blue-400 text-gray-700">
            All Products
          </Link>
          <Link href={"/about"} className="mr-5 hover:text-blue-400 text-gray-700">
            About
          </Link>

          <Link href={"/help"} className="mr-5 hover:text-blue-400 text-gray-700">
            Help
          </Link>
        </nav>
        <div className="hidden md:flex justify-center items-center rounded-full p-3 bg-slate-950 text-white hover:bg-slate-600">
          <ShoppingCart />
        </div>

        <ToggleMenu />
      </div>
    </header>
  );
};

export default Header;
