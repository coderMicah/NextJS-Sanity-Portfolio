"use client";
import { urlFor } from "@/sanity";
import { motion } from "framer-motion";

const Projects = ({ projects }) => {
  console.log(projects?.technologies);
  // const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden text-left md:text-center md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center">
        projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-rounded-lg scrollbar-track-gray-400/20 scrollbar-thumb-[#fa7b0a]/80 ">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen mt-24 flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt={project?.title}
              className="w-[200px]"
            />
            <div className="space-y-5 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl lg:text-3xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  {/* Case Study {i + 1} of {projects.length}:{" "} */}
                </span>
                {project?.title}
              </h4>

              <div className="flex items-center space-x-2 justify-center">
              {project?.technologies.map((tech) => (
                <img
                  key={tech._id}
                  src={urlFor(tech.image).url()}
                  alt={tech.name}
                  className="h-8 w-8 rounded-full"
                />
              ))}
              </div>

              <p className="text-lg text-center mx-auto">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
