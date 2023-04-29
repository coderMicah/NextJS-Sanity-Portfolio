"use client";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity";

const About = ({ pageInfo }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className=" flex flex-col md:h-screen relative text-center max-w-6xl mx-auto mt-10 px-10 justify-evenly items-center md:text-left md:flex-row"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        alt={`Image of ${pageInfo.name}`}
        src={urlFor(pageInfo?.profilePic).url()}
        className="mt-[180px] flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[450px]"
      />

      <div className="space-y-10 mt-5 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-lg">{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
};

export default About;
