import { SvgArrow } from "./componentIcons/SvgArrow";

export const SkillsAndTools = ({ skillsAndTools }) => {
  return (
    <section className="w-full h-auto">
      {skillsAndTools.map((skill) => (
        <a
          href={skill.link}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-cGreen/20 dark:border-cWhite/50 rounded-md w-full flex relative group cursor-pointer hover:bg-cGreen/20 my-2 h-28 sm:h-40 items-center"
          key={skill.id}
          title={skill.title}
        >
          <span
            className="hidden group-hover:block absolute right-2 top-2 group-hover:animate-wiggle group-hover:animate-infinite"
            title="Ir"
          >
            <SvgArrow />
          </span>
          <div className="w-1/3">
            <img
              className="w-28 h-20 sm:w-48 sm:h-36 "
              src={`${skill.img}`}
              alt={skill.title}
              loading="lazy"
            />
          </div>
          <div className="w-2/3">
            <h3 className="sm:text-md font-bold">{skill.title}</h3>
            <span className="text-[10px] sm:text-sm text-cGreen">
              {skill.desc}
            </span>
          </div>
        </a>
      ))}
    </section>
  );
};
