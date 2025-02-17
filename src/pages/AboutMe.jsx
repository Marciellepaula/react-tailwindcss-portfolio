import AboutMeBio from "../components/about/AboutMeBio";
import Experiencelist from "../components/about/Experiencelist";
import Educationlist from "../components/about/Educationlist";
import { AboutMeProvider } from "../context/AboutMeContext";
import { motion } from "framer-motion";

const About = () => {
  return (
    <AboutMeProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto"
      >
        <AboutMeBio />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto"
      >
        <Experiencelist />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto"
      >
        <Educationlist />
      </motion.div>
    </AboutMeProvider>
  );
};

export default About;
