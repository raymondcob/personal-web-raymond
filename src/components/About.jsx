import { motion } from "framer-motion"
import { styles } from "../style"
import { fadeIn, textVariant } from "../Utils/motion"
import { SectionWrapper } from "../hoc"
import profilePic from "../assets/Profile-Pic.png"

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mb-20">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center justify-between  gap-8 lg:gap-16 overflow-hidden">
        {/* Profile Image with Stacked Cards Effect */}
        <motion.div 
          variants={fadeIn("right", "", 0.1, 1)} 
          className="w-full lg:w-1/2 flex justify-center mb-6 sm:mb-0 md:mb-6 relative"
        >
          {/* Stacked Cards Effect - Add padding to contain negative margins */}
          <div className="relative pt-6 pl-6">
            {/* Card 3 - Bottom */}
            <div className="absolute top-6 -left-6 w-64 h-64 md:w-96 md:h-96 bg-[#1e123d] rounded-xl rotate-6 shadow-xl z-[1]"></div>

            {/* Card 2 - Middle */}
            <div className="absolute top-3 -left-3 w-64 h-64 md:w-96 md:h-96 bg-[#271a4a] rounded-xl rotate-3 shadow-xl z-[2]"></div>

            {/* Card 1 - Top with Image */}
            <div className="relative w-64 h-64 md:w-96 md:h-96 bg-[#2a1b4d] rounded-xl shadow-2xl overflow-hidden border border-[#915eff]/30 z-[3]">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#915eff]/20 z-[4]"></div>

              {/* Image */}
              <img
                src={profilePic}
                alt="Raymond's profile"
                className="w-full h-full object-cover z-[3]"
              />

              {/* Bottom Info Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-3 z-[5]">
                <p className="text-white text-sm font-medium">Raymond Cob</p>
                <p className="text-[#915eff] text-xs">Frontend Developer</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* About Text Content */}
        <motion.div
          variants={fadeIn("left", "", 0.1, 1)}
          className="w-full lg:w-1/2 bg-[#151030] p-6 rounded-xl shadow-lg border border-[#915eff]/10"
        >
          <p className="text-gray-300 text-[17px] leading-[30px] mb-4">
            I'm a <span className="text-[#915eff] font-medium">passionate Frontend Developer</span> who loves creating
            clean and creative user interfaces that deliver exceptional user experiences.
          </p>

          <p className="text-gray-300 text-[17px] leading-[30px] mb-4">
            My journey in web development is driven by the joy of transforming ideas into functional, visually engaging
            code. As someone relatively new to the field, I bring fresh perspectives and an insatiable eagerness to
            learn and grow.
          </p>

          <p className="text-gray-300 text-[17px] leading-[30px] mb-4">
            I adapt quickly to any frontend tech stack—whether traditional or modern—and I'm constantly exploring better
            ways to build. Currently, I enjoy creating web applications using:
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {["React", "Tailwind CSS", "Firebase"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-[#2a1b4d] text-white rounded-full text-sm border border-[#915eff]/30"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-gray-300 text-[17px] leading-[30px]">
            For me, frontend development transcends mere coding—it's about crafting experiences that people genuinely
            enjoy interacting with.
          </p>
        </motion.div>
      </div>
    </>
  )
}

export default SectionWrapper(About, "About")
