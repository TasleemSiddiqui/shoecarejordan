import * as React from "react"
import Image, { StaticImageData } from "next/image"
import img1 from "@/../public/SI(1).jpg";
import img2 from "@/../public/SI(4).jpg";
import img3 from "@/../public/SI(3).jpg";
import img4 from "@/../public/SI(2).jpg";
import g1 from "@/../public/G(1).jpg";
import g2 from "@/../public/G(2).jpg";
import g3 from "@/../public/G(3).jpg";
import g4 from "@/../public/G(4).jpg";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export interface Artwork {
  artist: string
  art: StaticImageData
}

export const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: img1,
  },
  {
    artist: "Tom Byrom",
    art: img2,
  },
  {
    artist: "Vladimir Malyavko",
    art: img3,
  },
  {
    artist: "Vladimir Malyavko",
    art: img4,
  },
]

export function Features () {
  return (<>
  <div>
  <ScrollArea className="w-full whitespace-nowrap rounded-md border my-10">
      <div className="flex w-max space-x-4 p-4">
        {works.map((artwork) => (
          <figure key={artwork.artist} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <Image
                src={artwork.art}
                alt={`Photo by ${artwork.artist}`}
                className="aspect-[3/4] h-fit w-fit object-cover"
                
                height={400}
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              Photo by{" "}
              <span className="font-semibold text-foreground">
                {artwork.artist}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
    <div className="grid grid-cols-2">
      <div className="">
      <Image src={g1} alt="img2"/>
      
      </div>
      
        
      
      <Image src={g2} alt="img2"></Image>
      <Image src={g3} alt="img2"></Image>
      <Image src={g4} alt="img2"></Image>

    </div>



    </div></>
    
  )
}
