import { Iproducts, datafetch } from "@/datafetch";
import Image from 'next/image';
import Link from "next/link";

import React from "react";
import { urlForImage } from "@/../sanity/lib/image";

const Products = async () => {
    const data =await datafetch();
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {
            data.map((item:Iproducts)=>{
                return(<div key={item._id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link href={`products/${item._id}`} className="block relative h-48 rounded overflow-hidden">
                  <Image
                  height={428}
                  width={268}
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={urlForImage(item.pImage)}
                  />
                </Link>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {item.pCategories}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {item.pName}
                  </h2>
                  <p className="mt-1">PKR {item.pPrice}</p>
                </div>
              </div>)
            })
            }
          
        </div>
      </div>
    </section>
  );
};

export default Products;
