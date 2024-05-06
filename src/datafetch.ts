import { error } from "console";
import { StaticImageData } from "next/image";
import { client } from "@/../sanity/lib/client";

export interface Iproducts {
 
  pColor: string;
  _id:string;
  pPrice: number;
  pName: string;
  pCategories: string;
  pDescription: string;
  pImage: any;
}
export const datafetch = async () => {
  const data = await client.fetch(
    '*[_type=="product"]{_id,pName,pCategories,pPrice,pDescription,pColor,pImage}',
    {},
    { cache: "no-cache" }
  );
 
 
  return data;
};


