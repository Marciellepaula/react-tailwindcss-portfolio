import React from "react";

const ExperienceItem = React.memo(({ cargo, empresa, periodo, funcoes }) => {
  return (
    <article className="border rounded-lg p-5 shadow-md bg-white dark:bg-gray-800 transition-transform transform hover:scale-105">
      <h3 className="text-lg font-semibold text-primary-dark dark:text-primary-light">
        {cargo}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
        {empresa} • {periodo}
      </p>
      {funcoes.length > 0 ? (
        <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300 text-sm">
          {funcoes.map((funcao, index) => (
            <li key={index}>{funcao}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Nenhuma função disponível
        </p>
      )}
    </article>
  );
});

export default ExperienceItem;
