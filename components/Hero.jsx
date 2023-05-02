"use client";
import { urlFor } from "@/sanity";
import Image from "next/image";
import Link from "next/link";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = ({pageInfo}) => {

  const [text, count] = useTypewriter({
    words: [
      // `Hi The Name's ${pageInfo?.name}`,
      `Hi The Name's Micah`,
      "Guy Who Loves Coffee.tsx",
      "But Loves Code More !!!",
    ],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 50,
    typeSpeed: 70,
  });

  return (
    <section className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <Image
        alt={`Image of ${pageInfo.name}`}
        src={urlFor(pageInfo?.heroImage).url()}
        width={200}
        height={200}
        className="rounded-full object-left"
      />
      <div>
        <h2 className="pb-2 text-sm text-gray-400 uppercase tracking-[15px] ">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span>
            {text}
            <Cursor cursorColor="yellow" />
          </span>
        </h1>
      </div>

      <div className="p-5">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#experience">
          <button className="heroButton">Experience</button>
        </Link>
        <Link href="#skills">
          {" "}
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#projects">
          {" "}
          <button className="heroButton">Projects</button>
        </Link>
        <Link href="#contact">
          <button className="heroButton">Contact</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
