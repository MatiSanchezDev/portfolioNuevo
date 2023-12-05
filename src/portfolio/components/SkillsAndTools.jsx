import { SvgArrow } from "./componentIcons/SvgArrow";

export const SkillsAndTools = ({ skillsAndTools }) => {
  return (
    <section className="w-full h-auto">
      {skillsAndTools.map((skill) => (
        <a
          href={skill.link}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-cGreen/20 dark:border-cWhite/50 rounded-md w-full flex relative group cursor-pointer hover:bg-cGreen/20 my-2"
          key={skill.id}
        >
          <span className="hidden group-hover:block absolute right-2 top-2 group-hover:animate-wiggle group-hover:animate-infinite">
            <SvgArrow />
          </span>
          <div className="w-1/3">
            <img src={`../../../public/${skill.img}`} alt={skill.title} />
          </div>
          <div className="w-2/3 sm:px-3">
            <h3 className="pt-4 sm:pt-6  sm:text-md">{skill.title}</h3>
            <span className="text-[10px] sm:text-sm text-cGreen">
              {skill.desc}
            </span>
          </div>
        </a>
      ))}
    </section>
  );
};
