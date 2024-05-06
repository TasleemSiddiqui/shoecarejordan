
import { get } from 'http';
import React from 'react'
import { client} from '@/../sanity/lib/client'
import { StaticImageData } from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { urlForImage } from '@/../sanity/lib/image';
import Image from "next/image";

const getProduct= async()=>{
  const data = await client.fetch(`*[_type=="services"]`);

  return data;
}
interface Iservices{
  tilte:string,
  headline:string,
  description:string,
  image:any,
  id:string;
}

const Members = async () => {
  const data :Iservices[] = await getProduct();
  
 
  return (
    
    <div className='md:flex justify-center items-center gap-10'>

      {data.map((item)=>{
        return( <Card key={item.id}>
          <CardHeader >
            <CardTitle>{item.tilte}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Image alt={item.tilte} src={urlForImage(item.image)} height={350} width={200} />
          </CardContent>
          <CardFooter>
            <p>{item.headline}</p>
          </CardFooter>
        </Card>
        )
      })}
    
  </div>
  )
}

export default Members