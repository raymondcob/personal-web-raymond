import { BallCanvas } from "./canvas"
import { technologies } from "../constants"
import { SectionWrapper } from "../hoc"
import { styles } from "../style"
import { motion } from "framer-motion"
import { textVariant } from "../utils/motion"

const Tech = () => {
  return (
    <>
      
      <motion.div variants={textVariant()} className="mb-14">
        <p className={styles.sectionSubText}>What I Know </p>
        <h2 className={styles.sectionHeadText}>My Skills.</h2>
      </motion.div> 
      
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech) => (
          <div className="w-28 h-28" key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "Skills")
