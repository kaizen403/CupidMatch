import SparklesCore from "@/components/ui/Particles";
import React from "react";
import { Bad_Script } from "next/font/google";
import { Button } from "@/components/ui/Movingborder";
import Link from "next/link";

import { redirect } from "next/navigation";
const badscript = Bad_Script({
  weight: "400",
  style: "normal",
  display: "swap",
  subsets: ["latin"],
});

export default function SparklesPreview() {
  return (
    <div
      className="relative w-full flex flex-col items-center bg-grid-white/[0.1] justify-center overflow-hidden rounded-md"
      style={{ height: "100vh" }} // Ensures this is the lowest layer by using a negative z-index
    >
      <div
        className="absolute inset-0 w-full"
        style={{ height: "100vh", zIndex: 5 }}
      >
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={2}
          particleDensity={60}
          className="w-full h-full"
          particleColor="#FF0000"
        />
      </div>
      <div className="flex flex-col z-50 -mt-72">
        <h1 className="md:text-7xl text-5xl tracking-normal lg:text-6xl font-bold text-center text-white relative z-10">
          Cupid Match
        </h1>

        <div>
          <div className="inset-x-20 top-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-[2px] w-full blur-sm" />
          <div className="inset-x-20 top-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-px w-full" />
          <div className="inset-x-60 top-0 bg-gradient-to-r from-transparent via-red-600 to-transparent h-[5px] w-full blur-sm" />
          <div className="inset-x-60 top-0 bg-gradient-to-r from-transparent via-red-600 to-transparent h-px w-full" />
        </div>
        <p
          className="my-3 p-3 text-center tracking-wide text-lg"
          style={{ fontFamily: badscript.style.fontFamily }}
        >
          A dating app for college students that matches singles with their
          soulmates using an innovative matching algorithm.
        </p>

        <div
          className="self-center
         mt-20 z-50"
        >
          <Link href="/login">
            <div>
              <Button
                borderRadius="2px"
                className="bg-black text-white text-lg dark:bg-slate-900  dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Start Maching
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
