import { SectionHeader } from "@/components/sectionHeader";
import Hero from "@/views/Hero";
import { Features } from "@/views/features";
import Members from "@/views/members";
import ShopByClassic from "@/views/shopByClassic";
import WeekCollection from "@/views/weekCollection";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <div className=" ">
    <Hero/>
   <SectionHeader mainHeading={"Feature"} subHeading={"Gallery"}/>
   <Features/>
   <SectionHeader mainHeading={"Week"} subHeading={"Collection"}/>
   <WeekCollection/>
   <ShopByClassic/>
   <SectionHeader mainHeading={"Our"} subHeading={"Members"}/>
   <Members/>
   </div>
   
   </>
  );
}
