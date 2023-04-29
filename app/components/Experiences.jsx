"use client";
import ExperienceCard from "./ExperienceCard";

import { motion } from "framer-motion";
const Experiences = ({ experiences }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className=" relative px-10 overflow-hidden flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center">
        Experience
      </h3>

      <div className="mt-28 flex w-full space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-rounded-lg scrollbar-track-gray-400/20 scrollbar-thumb-[#fa7b0a]/80">
        {experiences.map((experience) => (
          <ExperienceCard experience={experience} key={experience._id} />
        ))}
      </div>
    </motion.div>
  );
};

export default Experiences;
