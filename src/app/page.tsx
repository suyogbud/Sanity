import Image from "next/image";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import SecondSection from "@/components/SecondSection";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto max-w-4xl flex flex-col items-center justify-center">
        <h1 className="mt-20 text-7xl text-center">
          Make <span className="bg-orange-400 text-white">content</span> your{" "}
          <span className="mt-2 text-7xl font-bold flex flex-col">
            competitive advantage
          </span>
        </h1>
        <p className="mt-3 max-w-prose text-center text-xl">
          <span>Treat content as data—actionable and scalable across your</span>
          <span>business—with the Sanity Composable Content Cloud.</span>
        </p>
        <div className="mt-6 flex items-center justify-center w-full gap-2">
          <Button>Start building.</Button>
          <Button variant={"outline"} className="border border-orange-400">
            Explore the demo
          </Button>
        </div>
        <p className="mt-4">
          <span className="text-blue-500 text-bold text-center">$ </span> npm
          create sanity@latest
        </p>
        <SecondSection />
        <h1 className="mt-24 text-3xl">
          A headless CMS <span className="font-bold">and so much more</span>
        </h1>
        <p className="mt-10 max-w-prose text-center">
          Sanity delivers content anywhere (just like a headless CMS). Beyond
          that, Sanity gives you total composability. A fully decoupled,
          real-time content back end. Entirely customizable content workspaces.
          Be ready for what's next.
        </p>
      </div>
    </MaxWidthWrapper>
  );
}
