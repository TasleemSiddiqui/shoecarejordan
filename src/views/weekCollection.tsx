import React from 'react'
import Image from "next/image";
import G1 from "@/../public/wc(4).jpg";
import G2 from "@/../public/wc(3).jpg";
import G3 from "@/../public/wc(5).jpg"
import { Button } from '@/components/ui/button';

const WeekCollection = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center p-10 gap-5 '>
            <h1 className='text-4xl text-slate-800 font-extrabold font-sans'>
                New This Week
            </h1>
            <div className='flex gap-3'>
            <Button className='rounded-3xl  py-3'>Shop women's new arrivals</Button>
            <Button className='rounded-3xl   py-3'>Shop men's new arrivals</Button>
            
            </div>
            

        </div>
        <div className='grid grid-cols-3 justify-center items-center md:max-w-full max-w-xs py-6 md:gap-3'>
            <Image src={G1} alt='img' className='max-h-28 md:max-h-80 '/>
            <Image src={G3} alt='img' className='max-h-28 md:max-h-80 '/>
            <Image src={G2} alt='img' className='max-h-28 md:max-h-80 '/>

        </div>

    </div>

  )
}

export default WeekCollection