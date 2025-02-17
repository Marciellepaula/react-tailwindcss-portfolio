import React from "react";

const EducationItem = React.memo(({ curso, instituicao, conclusao }) => {
  return (
    <article className="border rounded-lg p-5 shadow-md bg-white dark:bg-gray-800 transition-transform transform hover:scale-105">
      <h3 className="text-lg font-semibold text-primary-dark dark:text-primary-light">
        {curso}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
        {instituicao}
      </p>
      <p> {conclusao}</p>
    </article>
  );
});
export default EducationItem;
