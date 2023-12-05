export const Footer = () => {
  return (
    <footer className="w-full h-20 flex justify-center items-end gap-2">
      <span>&reg;Creado por MattDev:</span>
      <span>
        <a
          href="https://www.linkedin.com/in/matias-dev-web/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cGreen underline cursor-pointer"
        >
          LinkedIn
        </a>
      </span>
      <span>
        <a
          href="https://github.com/MatiSanchezDev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cGreen underline cursor-pointer"
        >
          Github
        </a>
      </span>
    </footer>
  );
};
