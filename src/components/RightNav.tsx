import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { Button } from "./ui/button";

const RightNav = () => {
  return (
    <div className="flex items-center gap-6 ml-14">
      <CiSearch />
      <Link href={"/login"}>Login</Link>
      <Button variant="outline" className="border-orange-400">
        Contact Sales
      </Button>
      <Button>Get Started</Button>
    </div>
  );
};

export default RightNav;
