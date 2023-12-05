import { Navbar, SobreMi, Projectos } from "./portfolio/components/";

export const App = () => {
  return (
    <main className="h-full bg-cWhite text-cBlack flex justify-center font font-Neon justify-content-center dark:bg-cBlack dark:text-cWhite">
      <div className="w-full md:w-[750px] py-6 px-9">
        <Navbar />
        <SobreMi />
        <hr className="my-6" />
        <Projectos />
      </div>
    </main>
  );
};