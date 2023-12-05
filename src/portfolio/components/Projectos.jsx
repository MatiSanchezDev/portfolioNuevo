import { useState } from "react";
import { ButtonsList } from "./ButtonsList";
import { SkillsAndTools } from "./SkillsAndTools";
import { data } from "../helpers/data";

export const Projectos = () => {
  const allCategories = [
    "todas",
    "react",
    "redux toolkit",
    "tailwind",
    "framer motion",
    "react query",
  ];
  const [categories, setCategories] = useState(allCategories);

  const [skillsAndTools, setSkillsAndTools] = useState(data);

  const filterCategory = (category) => {
    if (category === "todas") return setSkillsAndTools(data);

    const filterData = data.filter((skill) =>
      skill.categories.includes(category)
    );
    setSkillsAndTools(filterData);
  };

  return (
    <section className="w-full my-4 animate-fade-left animate-ease-in ">
      <h3 className="text-center text-2xl font-bold text-cDark dark:text-cWhite">
        Skills /<span className="text-cGreen"> Tools</span>
      </h3>

      <ButtonsList categories={categories} filterCategory={filterCategory} />

      <SkillsAndTools skillsAndTools={skillsAndTools} />
    </section>
  );
};
