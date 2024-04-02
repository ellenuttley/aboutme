import Image from "next/image";
// import Navbar from "@/components/Navbar";
import ColorPalette from "@/components/ColourPalette";
import { HoverTextImpressive, HoverTextAutism } from "@/components/HoverText";

export default function Home() {
  let ott = "over the top ";
  let impressive = "impressive";

  return (
    <main className="flex min-h-screen flex-col items-center overflow-auto p-16 text-tBlack *:mt-4">
      <div
        className="page first-letter:float-left first-letter:mr-1
  first-letter:text-5xl "
      >
        <h2>Greetings, Tailwind hiring personnel!</h2>
      </div>

      <div className="page ">
        <h2>
          Get ready for an extremely...
          <HoverTextImpressive />
          <br />
          application for the role of Design Engineer
        </h2>
      </div>
      {/* <ColorPalette /> */}

      <h1 className="blackHeader page text-5xl text-tPrimary hover:border-transparent hover:bg-transparent hover:shadow-transparent">
        About Me
      </h1>
      <div className="flex flex-row ">
        <figure>
          <Image
            className="rounded-lg border border-tTransition shadow-sm shadow-tBlack"
            src="/ellen.png"
            width={250}
            height={500}
            alt="Portait picture of Ellen"
          ></Image>
          <figcaption>
            {" "}
            Well, for starters... I don't really look like that
          </figcaption>
        </figure>

        <div className="page flex flex-row items-center justify-evenly whitespace-break-spaces">
          My name is{" "}
          <h1 className="flex flex-grow whitespace-break-spaces"> Ellen</h1>
        </div>
      </div>

      <section id="home" className="h-screen bg-blue-500">
        <h1 className="mt-20 text-4xl text-white">Home</h1>
      </section>
      <section id="read-my-cv" className="h-screen bg-green-500">
        <h1 className="mt-20 text-4xl text-white">Read My CV</h1>
        {/* CV content goes here */}
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
