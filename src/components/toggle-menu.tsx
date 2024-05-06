import React from 'react'
import { Menu } from "lucide-react";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
import { datafetch } from '@/datafetch';
  
const ToggleMenu = async () => {
  const data =await datafetch();
  const uniqueLinks = Array.from(new Set(data.map((item:any) => item.pCategories)));
  return (
    <div><div className="flex md:hidden flex-row-reverse">
    {" "}
    <Sheet>
      <SheetTrigger><Menu/></SheetTrigger>
      <SheetContent>
      <nav className="flex flex-col gap-5">
   

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
 
       
      </SheetContent>
    </Sheet>
  </div></div>
  )
}

export default ToggleMenu