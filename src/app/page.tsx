import Image from "next/image";
// import Navbar from "@/components/Navbar";
import AboutMe from "@/app/AboutMe";
import { HoverTextImpressive, HoverTextAutism } from "@/components/HoverText";

export default function Home() {
  return (
    <main className="main">
      <section id="home">
        <div className="mb-3 gap-2">
          <h2
            className="page size-fit first-letter:float-left 
  first-letter:text-5xl "
          >
            Greetings, Tailwind hiring personnel!
          </h2>
        </div>

        <div className="page ">
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
      <section id="my-code" className="h-screen bg-red-500">
        <h1 className="mt-20 text-4xl text-white">See My Work</h1>
        {/* Work content goes here */}
      </section>
      <section id="my-design" className="h-screen bg-yellow-500">
        <h1 className="mt-20 text-4xl text-white">I love design</h1>
        {/* Content for the 'I love design' section goes here */}
      </section>

      <h1>
        {/*         
        <HoverTextAutism /> */}
      </h1>
    </main>
  );
}
