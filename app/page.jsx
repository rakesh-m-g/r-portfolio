import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Social from "@/components/ui/Social";
import Photo from "@/components/ui/Photo";
import Stats from "@/components/ui/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="pr-5 text-xl text-white font-secondary font-bold animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-transparent ">
              Fullstack Developer
            </h1>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Rakesh MG</span>
            </h1>
            <p className=" max-w-[500px] mb-9 text-white/80 ">
              Crafting innovative full stack solutions for seamless digital
              experiences.
            </p>
            {/*btn and socials */}

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/RakeshMG.pdf"
                download="RakeshMG.pdf"
                className="inline-block display-hidden"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        {/* <Stats /> */}
      </div>
    </section>
  );
};

export default Home;
