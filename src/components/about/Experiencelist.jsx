import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";
import ExperienceItem from "./ExperienceItem";

const ExperienceList = () => {
  const { clientsData, clientsHeading } = useContext(AboutMeContext);

  return (
    <section className="mt-10 sm:mt-20">
      <h2 className="font-general-medium text-2xl sm:text-3xl text-center text-primary-dark dark:text-primary-light">
        {clientsHeading}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 sm:mt-14 gap-4">
        {clientsData.map(({ id, cargo, empresa, periodo, funcoes = [] }) => (
          <ExperienceItem
            key={id}
            cargo={cargo}
            empresa={empresa}
            periodo={periodo}
            funcoes={funcoes}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceList;
