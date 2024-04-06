import Image from "next/image";
import AboutYou from "./AboutYou";
// import Navbar from "@/components/Navbar";
import MyCode from "@/app/MyCode";
import MyDesign from "@/app/MyDesign";
import AboutMe from "@/app/AboutMe";
import { HoverTextImpressive, HoverTextAutism } from "@/components/HoverText";

export default function Home() {
  return (
    <main className="main">
      <section id="home">
        <div className="mb-3 gap-2">
          <h2 className="box size-fit  first-letter:float-left  first-letter:text-5xl md:first-letter:text-6xl  ">
            Greetings, Tailwind hiring personnel!
          </h2>
        </div>

        <div className="page text-left">
          <h2>
            Get ready for an extremely...
            <HoverTextImpressive />
            <br />
            application for the role of Design Engineer
          </h2>
        </div>
      </section>

      <section id="about-me" className="section ">
        <AboutMe />
      </section>

      <section id="my-code" className="section">
        <h1 className="rounded-lg border-b-8 border-l-4 border-t-8 border-tBlack border-b-transparent border-t-transparent bg-transparent pl-5 underline decoration-embossed decoration-4 embossed">
          My Projects
        </h1>
        <MyCode />
      </section>

      <section id="about-you" className="section ">
        <AboutYou />
      </section>

      {/* <section id="my-design" className="section">
        <h1> I love design</h1>
        <MyDesign />
      </section> */}

      <h1>
        {/*         
        <HoverTextAutism /> */}
      </h1>
    </main>
  );
}
