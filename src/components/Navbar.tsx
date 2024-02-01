"use client";
import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { NavigationMenuDemo } from "./Menu";
import RightNav from "./RightNav";

const Navbar = () => {
  return (
    <>
      <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200">
        <MaxWidthWrapper>
          <div className="flex items-center m-2 text-center gap-8 ">
            <Image
              src="/logo.svg"
              alt="logo"
              width={150}
              height={150}
              className="text-orange-600"
            />
            <NavigationMenuDemo />
            <RightNav />
          </div>
        </MaxWidthWrapper>
      </nav>
    </>
  );
};

export default Navbar;
