import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../Utils/motion";
import { IconExternalLink } from "@tabler/icons-react";
import { IconBrandGithub } from "@tabler/icons-react";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#151030] rounded-2xl w-full lg:w-[480px] shadow-lg"
        style={{ boxShadow: "0px 35px 120px -15px #211e35" }}
      >
        <div className="relative w-full h-[250px] ">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="mt-2 p-4">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-6 text-[#aaa6c3] text-[15px] ">{description}</p>
        </div>

        <div className="mt-1 flex flex-wrap gap-2 pl-2">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className="px-3 py-1 bg-[#2a1b4d] text-white rounded-full text-sm border border-[#915eff]/30"
            >
              {tag.name}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-center mt-3 p-2">
          <div className="flex justify-between w-full gap-4 p-3">
            {/* Live demo Link  */}
            <a
              href={live_demo_link}
              target="_blank"
              className="flex items-center font-medium gap-2 cursor-pointer hover:text-gray-300 "
            >
              <span className="flex justify-center items-center rounded-full bg-blue-950 w-9 h-9 p-2">
                <IconExternalLink />
              </span>
              Live Demo
            </a>
            {/* Divider */}
            <div className="w-[1px] h-10 bg-blue-950" />
            {/* Source Code Link  */}
            <a
              href={source_code_link}
              target="_blank"
              className="flex items-center font-medium gap-2 cursor-pointer hover:text-gray-300 "
            >
              <span className="flex justify-center items-center rounded-full bg-gray-600 w-9 h-9 p-2">
                <IconBrandGithub />
              </span>
              View Code
            </a>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work </p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-gray-400 text-[17px] max-w-3xl leading-[30px]"
        >
          I have worked on a variety of projects, showcasing my skills in web
          development and design. Here are some of my notable works.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap lg:justify-between justify-center gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "Work");
