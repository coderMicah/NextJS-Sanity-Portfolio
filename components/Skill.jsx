import { urlFor } from "@/sanity";
import { motion } from "framer-motion";
import React from "react";

const Skill = ({ skill,directionLeft }) => {
  return (
    <motion.div className="group relative flex cursor-pointer">
      <motion.img
        src={urlFor(skill?.image).url()}
        alt={`Image of ${skill.title}`}
        initial={{ opacity: 0, x: directionLeft ? -200 : 200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="rounded-full border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute w-24 h-24 xl:w-32 xl:h-32 rounded-full z-0 opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white ">
        <div className="flex items-center justify-center h-full ">
          <p className="text-black text-3xl font-bold opacity-100">{skill.progress}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
