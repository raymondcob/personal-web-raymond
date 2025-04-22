import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 px-6 sm:px-16">
        {/* Ball and Line Container */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-4 h-4 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Hero Introduction */}
        <div className="pl-5">
          <h1 className={`${styles.heroHeadText} text-white text-[40px]`}>
            Hi, I'm <span className="text-[#915eff]">Raymond</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Frontend Developer passionate about building user-friendly interfaces.
            <br className="sm:block hidden" />
            Always learning and working with modern tools and frameworks.
          </p>
        </div>
      </div>

      {/* Computer Canvas */}
      <div className="absolute inset-0 pl-[5%]">
        <ComputersCanvas />
      </div>

      <div className="absolute sm:bottom-10 bottom-5 w-full flex justify-center items-center">
        <a href="#About">
          <div className="w-[30px] h-[52px] rounded-3xl border-4 border-gray-400 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
