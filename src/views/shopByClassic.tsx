import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionHeader } from "@/components/sectionHeader";
import { Iproducts, datafetch } from "@/datafetch";
import { Slice } from "lucide-react";
import { urlForImage } from "@/../sanity/lib/image";


const ShopByClassic =async () => {
  const data =await datafetch();

  const sliceData=data.slice(0,6) ;
 
  
  return (
    <div>
        <div className="">
        <SectionHeader mainHeading={"Shop by:"} subHeading={"Classic"}/>
        </div>
        <div className="md:px-32 md:max-w-full max-w-60 mx-14 flex justify-around">
        <Carousel
        opts={{
          align: "start",
        }}
        className="w-full "
      >
        <CarouselContent>
          {sliceData.map((item:any) => (
            <CarouselItem key={item._id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                   <Link href={`/products/${item._id}`}> <Image alt={item.pName} height={400} width={400} src={urlForImage(item.pImage)}/></Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

        </div>
         </div>
  );
};

export default ShopByClassic;
