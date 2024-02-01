import React from "react";
import companies from "../data/myData";
import Image from "next/image";

const SecondSection = () => {
  return (
    <div className="mt-28 flex gap-24 w-full">
      <div className="flex flex-col gap-8 items-center justify-between ">
        <div className="flex gap-4">
          <Image src="/cloudfare.svg" alt="test" width={100} height={100} />
          <Image src="/ableton.svg" alt="test" width={100} height={100} />
          <Image src="/puma.svg" alt="test" width={100} height={100} />
          <Image src="/figma.svg" alt="test" width={100} height={100} />
        </div>
        <div className="flex gap-4">
          <Image src="/linear.svg" alt="test" width={100} height={100} />
          <Image src="/skims.svg" alt="test" width={100} height={100} />
          <Image src="/loom.svg" alt="test" width={100} height={100} />
          <Image src="/shopify.svg" alt="test" width={100} height={100} />
        </div>
      </div>
      <div className="flex flex-col gap-8 items-center justify-between">
        <div className="flex gap-4">
          <Image src="/nike.svg" alt="test" width={100} height={100} />
          <Image src="/codenast.svg" alt="test" width={100} height={100} />
          <Image src="/flex.svg" alt="test" width={100} height={100} />
          <Image src="/netlify.svg" alt="test" width={100} height={100} />
        </div>
        <div className="flex gap-4">
          <Image src="/sonos.svg" alt="test" width={100} height={100} />
          <Image src="/amplitude.svg" alt="test" width={100} height={100} />
          <Image src="/remarkable.svg" alt="test" width={100} height={100} />
          <Image src="/brex.svg" alt="test" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};
// {companies.map((company) => (
//   <Image
//     src={company.href}
//     alt={company.title}
//     key={company.title}
//     width={100}
//     height={100}
//   />
// ))}

export default SecondSection;
