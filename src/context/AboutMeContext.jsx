import { useState, createContext } from "react";
import { aboutMeData } from "../data/aboutMeData";
import { clientsHeading as clientsPageHeading } from "../data/esperienceData";
import { experienceData as clientsDataJson } from "../data/esperienceData";
import { formationData as educationDataJson } from "../data/formationData";
const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
  const [aboutMe, setAboutMe] = useState(aboutMeData);
  const clientsHeading = clientsPageHeading;
  const [clientsData, setClientsData] = useState(clientsDataJson);
  const [formationData1, setEducationData] = useState(educationDataJson);

  return (
    <AboutMeContext.Provider
      value={{
        aboutMe,
        setAboutMe,
        clientsHeading,
        clientsData,
        setClientsData,
        formationData1,
        setEducationData,
      }}
    >
      {children}
    </AboutMeContext.Provider>
  );
};

export default AboutMeContext;
