import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import logo from "@/../public/logo.png";
import Image from "next/image";
import {
  Copyright,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import { client } from "@/../sanity/lib/client";
import { set } from "sanity";

const Footer = async () => {
  return (
    <footer>
      <div className="md:grid grid-cols-5 gap-5 py-7 mx-auto w-full flex-wrap bg-slate-800 ">
        <div>
          <h1 className="text-xs font-extrabold text-white flex justify-center items-center">
            RESOURCES
          </h1>
          <ul className="flex flex-col justify-center items-center text-wrap text-xs text-white leading-5">
            <li>GIFT CARDS</li>

            <li>FIND A STORE</li>
            <li>BECOME A MEMBER</li>
            <li>NIKE X NBA</li>
            <li>NIKE JOURNAL</li>
            <li>Site Feedback</li>
          </ul>
        </div>

        <div>
          <h1 className="text-xs font-semibold text-white flex justify-center items-center">
            Help
          </h1>
          <ul className="flex flex-col justify-center items-center text-xs text-gray-400 leading-5">
            <li>Order Status</li>
            <li>Shipping and Delivery</li>
            <li>Returns</li>
            <li>Order Cancellation</li>
            <li>Payment OptionsL</li>
            <li>Gift Card Balance</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xs font-semibold text-white flex justify-center items-center">
            COMPANY
          </h1>
          <ul className="flex flex-col justify-center items-center text-xs text-gray-400 leading-5">
            <li>About Nike</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Purpose</li>
            <li>Sustainability</li>
          </ul>
        </div>

        <div>
          <h1 className="text-xs font-semibold text-white flex justify-center items-center">
            PROMOTIONS & DISCOUNTS
          </h1>
          <ul className="flex flex-col justify-center items-center text-xs text-gray-400  leading-5">
            <li>Student</li>
            <li>Military</li>
            <li>Teacher</li>
            <li>First Responders & Medical Professionals</li>
            <li>Birthday</li>
          </ul>
        </div>
        <div className="flex gap-3 text-gray-400 justify-center items-center ">
          <Linkedin className="hover:text-white" />
          <Facebook className="hover:text-white" />
          <Instagram className="hover:text-white" />
          <Youtube className="hover:text-white" />
          <Twitter className="hover:text-white" />
        </div>
      </div>
      <div className="bg-slate-900">
        <blockquote className="flex text-xs text-gray-400 items-center justify-center ">
          <Copyright />
          all rights reserved for shoe care jordan
        </blockquote>
      </div>
    </footer>
  );
};

export default Footer;
