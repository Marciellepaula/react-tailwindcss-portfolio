import { useState, createContext } from "react";
import { projectData as projectDataJson } from "../data/projectData";

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
  const [singleProjectData, setSingleProjectData] = useState(
    projectDataJson[0]
  );

  const handleProjectClick = (projectId) => {
    const selectedProject = projectDataJson.find(
      (project) => project.id === projectId
    );
    setSingleProjectData(selectedProject);
  };

  return (
    <SingleProjectContext.Provider
      value={{ singleProjectData, setSingleProjectData, handleProjectClick }}
    >
      {children}
    </SingleProjectContext.Provider>
  );
};

export { SingleProjectContext };
