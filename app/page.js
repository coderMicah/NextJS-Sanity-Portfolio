
//components
import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

//helper fn
import {
  fetchExperience,
  fetchPageInfo,
  fetchProjects,
  fetchSkills,
  fetchSocials,
} from "@/utilis/helper";

//revalidate the page after 60 sec
// export const revalidate = 10;

export default async function Home() {
  const socials = await fetchSocials();
  const pageInfo = await fetchPageInfo();
  const experiences = await fetchExperience();
  const skills = await fetchSkills();
  const projects = await fetchProjects();


  return (
    <>
      <Header socials={socials} /> 
      <main className="snap-y snap-mandatory overflow-hidden z-0 scrollbar scrollbar-track-400/20">
        <section id="hero" className="snap-start">
          <Hero pageInfo={pageInfo} />
        </section>

        <section id="about" className="snap-center">
          <About pageInfo={pageInfo} />
        </section>

        <section id="experience" className="snap-center">
          <Experiences experiences={experiences} />
        </section>

        <section id="skills" className="snap-start">
          <Skills skills={skills} />
        </section>

        {/* <section id="projects" className="snap-start">
          <Projects projects={projects} />
        </section> */}

       <div className="h-screen mb-10">
       <section id="contact" className="snap-start">
          <Contact />
        </section>
       </div>

        <footer className="h-[30vh] w-full cursor-pointer">
          <div className="flex justify-center items-center">
            {/* <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0"
              src="https://i.imgur.com/e2yvD6A.png"
              alt=""
            /> */}
          </div>
        </footer>
      </main> 
    </>
  );
}
