import ProjectGallery from "../components/projects/ProjectGallery";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectInfo from "../components/projects/ProjectInfo";
import ProjectRelatedProjects from "../components/projects/ProjectRelatedProjects";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { projectData as projectDataJson } from "../data/projectData";

const ProjectSingle = () => {
  const { id } = useParams();
  const project = projectDataJson.find(
    (project) => project.id === parseInt(id)
  );

  if (!project || !Array.isArray(project.ProjectImages)) {
    return <div>Project not found or images are unavailable!</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.6,
        delay: 0.15,
      }}
      className="container mx-auto mt-5 sm:mt-10"
    >
      <ProjectHeader projectHeader={project.ProjectHeader} />
      <ProjectGallery projectImages={project.ProjectImages} />
      <ProjectInfo projectInfo={project.ProjectInfo} />
      <ProjectRelatedProjects relatedProject={project.RelatedProject} />
    </motion.div>
  );
};
export default ProjectSingle;
