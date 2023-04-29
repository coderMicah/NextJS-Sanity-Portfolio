import { urlFor } from "@/sanity";
import { motion } from "framer-motion";
import Image from "next/image";

const ExperienceCard = ({ experience }) => {
  return (
    <article className="flex flex-col flex-shrink-0 rounded-lg items-center space-y-7 w-[375px] md:w-[600px] xl:w-[700px] snap-center bg-[#292929] p-10 opacity-100 hover:opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        src={urlFor(experience?.companyImage).url()}
        className="h-32 w-32 rounded-full object-center xl:w-[200px] xl:h-[200px] object-cover "
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.company}</h4>
        <p className="text-2xl font-bold mt-1">{experience.jobtitle}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((tech) => (
            <img
              key={tech._id}
              alt={`Image of ${tech.title}`}
              src={urlFor(tech.image).url()}
              className="h-5 w-5 rounded-full"
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -  {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {experience.points.map((point,i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
