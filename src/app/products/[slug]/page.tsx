import React from "react";
import { client } from "@/../sanity/lib/client";

import { Any } from "next-sanity";
import Image from "next/image";
import { Iproducts } from "@/datafetch";
import { urlForImage } from "@/../sanity/lib/image";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  ShoppingCart,
  Star,
  Twitter,
  Youtube,
} from "lucide-react";

const Product = async ({ params }: { params: { slug: any } }) => {
  const data = await client.fetch(
    `*[_type =='product'&& _id=='${params.slug}']`
  );

  return (
    <div>
      {data.map((item: Iproducts) => {
        return (
          <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <Image
                  alt={item.pName}
                  height={600}
                  width={600}
                  className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                  src={urlForImage(item.pImage)}
                />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">
                    {item.pCategories}
                  </h2>
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                    {item.pName}
                  </h1>
                  <div className="flex mb-4">
                    <span className="flex items-center">
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <span className="text-gray-600 ml-3">4 Reviews</span>
                    </span>
                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s text-slate-600 gap-2">
                      <Linkedin className="hover:text-gray-300" />
                      <Facebook className="hover:text-gray-300" />
                      <Instagram className="hover:text-gray-300" />
                      <Youtube className="hover:text-gray-300" />
                      <Twitter className="hover:text-gray-300" />
                    </span>
                  </div>
                  <p className="leading-relaxed">{item.pDescription}</p>
                  <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                    <div className="flex">
                      <span className="mr-3">Color</span>
                      <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
                      <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none" />
                      <button className="border-2 border-gray-300 ml-1 bg-red-900 rounded-full w-6 h-6 focus:outline-none" />
                    </div>
                    <div className="flex ml-6 items-center">
                      <span className="mr-3">Size</span>
                      <div className="relative">
                        <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                          <option>SM</option>
                          <option>M</option>
                          <option>L</option>
                          <option>XL</option>
                        </select>
                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                          <ChevronDown />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-around">
                    <span className="title-font font-medium text-2xl text-gray-900">
                      PKR {item.pPrice}
                    </span>
                    <Button className="flex justify-center items-center gap-2">
                      <ShoppingCart />
                      Add to cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Product;
