import React from "react";
import Banner from "@/../public/Banner.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveRight, ShoppingBasket } from "lucide-react";

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-5 items-center justify-center flex-col">
          <Image
            className="lg:w-full md:w-full  w-full mb-10 h-1/3 object-cover object-center rounded"
            alt="hero"
            src={Banner}
         
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-slate-950 uppercase">
              fly with jordan fam
            </h1>
            <p className="mb-8 leading-relaxed">
              "Welcome to <span className="text-slate-900 font-semibold uppercase">Shoe care jordan</span>, your go-to destination for expert
              Jordan shoe care. We're here to ensure your Jordans stay fresh and
              pristine with our comprehensive care tips and top-quality
              products. Discover our step-by-step guides covering everything
              from cleaning to storage, tailored specifically for Jordan
              sneakers. Our curated collection of cleaning products and
              accessories is designed to tackle dirt, stains, and scuffs
              effectively while maintaining your shoes' integrity. Join our
              community of sneaker enthusiasts and elevate your shoe care
              routine to new heights. With our guidance and premium products,
              your Jordans will always stand out in any crowd. Experience the
              difference with Shoe care jordan. Because every Jordan deserves
              the best care possible."
            </p>
            <div className="flex justify-center gap-4">
              <Button className=" gap-2">
                Shop now
                <ShoppingBasket />
              </Button>
              <Button className=" bg-transparent text-gray-800 hover:bg-slate-100 gap-2">
                Learn more
                <MoveRight />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div></div>
    </div>
  );
};

export default Hero;
