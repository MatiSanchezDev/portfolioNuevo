import imgPerfil from "../../assets/img/perfilMatiBGNone.png";
import cv from "../../assets/CV-Matías-N-Sanchez.pdf";
import { SvgCV, SvgGithub, SvgLinkedin } from "./componentIcons";

export const SobreMi = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="w-auto md:w-1/3">
        <div className="w-44 h-44 md:w-56 md:h-56 bg-cWhite dark:bg-cGreen border-4 md:border-8 dark:border-cWhite border-cBlack rounded-full overflow-hidden shadow-[0_15px_50px_-25px] hover:animate-wiggle hover:animate-infinite cursor-pointer">
          <img
            className="object-cover w-full h-full pl-1"
            src={imgPerfil}
            alt="Foto perfil"
            loading="lazy"
            title="Perfil"
          />
        </div>
      </div>
      <div className="w-auto md:w-2/3 pt-4 animate-fade-left animate-ease-in-out">
        <div className="text-center">
          <h1 className="text-2xl sm:text-4xl font-bold" title="MattDev">
            Matias N. Sanchez
          </h1>
          <h2 className="text-sm sm:text-lg pl-2 font-semibold text-cGreen">
            - Frontend Developer -
          </h2>
        </div>
        <p className="text-center pl-2 pt-2 text-[14px] sm:text-lg">
          Soy un apasionado del desarrollo web y del diseño UI/UX.
        </p>
        <div className="flex justify-center items-center pt-3 gap-4">
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            download="CV-MatiasNahuelSanchez"
            className="hover:text-cGreen"
            title="CV"
          >
            <SvgCV />
          </a>
          <a
            href="https://www.linkedin.com/in/matias-dev-web/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cGreen"
            title="LinkedIn"
          >
            <SvgLinkedin />
          </a>
          <a
            href="https://github.com/MatiSanchezDev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cGreen"
            title="Github"
          >
            <SvgGithub />
          </a>
        </div>
      </div>
    </section>
  );
};
