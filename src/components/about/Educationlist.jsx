import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";
import EducationItem from "./EducationItem";

const Educationlist = () => {
  const { formationData1 } = useContext(AboutMeContext);

  return (
    <section className="mt-10 sm:mt-20">
      <h2 className="font-general-medium text-2xl sm:text-3xl text-center text-primary-dark dark:text-primary-light">
        Educação
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 sm:mt-14 gap-4">
        {formationData1.map(({ id, curso, instituicao, conclusao }) => (
          <EducationItem
            key={id}
            curso={curso}
            instituicao={instituicao}
            conclusao={conclusao}
          />
        ))}
      </div>
    </section>
  );
};

export default Educationlist;
