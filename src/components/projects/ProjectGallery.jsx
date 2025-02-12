import { useContext } from "react";

import { SingleProjectContext } from "../../context/SingleProjectContext"; // Named import

// Now you can use SingleProjectContext in your component
const ProjectGallery = ({ projectImages }) => {
  // Destructure projectImages properly
  console.log(projectImages, "ry");
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
      {projectImages?.map((project) => {
        return (
          <div className="mb-10 sm:mb-0" key={project.id}>
            <img
              src={project.img}
              className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
              alt={project.title}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectGallery;
