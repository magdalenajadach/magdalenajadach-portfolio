"use client";

import { useRef } from "react";
import Image from "next/image";
import ProjectSection from "./components/ProjectsSection/ProjectsSection";

export default function Home() {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-raisin-black flex flex-col justify-center items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center text-center min-h-screen">
        <header className="flex flex-col items-center gap-5">
          <Image
            className="dark:invert"
            src="/memo-software.PNG"
            alt="Magdalena Jadach memoji"
            width={240}
            height={80}
            priority
          />
          <h1 className="text-seasalt text-5xl font-bold pb-5">Hello, I'm Magda</h1>
          <h2 className="text-zomp text-2xl font-semibold pb-4">
            I like computers and mud
          </h2>
          <div className="text-seasalt flex gap-4">
            <a
              aria-label="Navigate to Github portfolio"
              href="https://github.com/magdalenajadach"
              className="hover:text-carrot-orange hover:underline"
            >
              <span className="text-xl font-semibold">Github</span>
            </a>
            <a
              aria-label="Navigate to Linkedin prpfile"
              href="https://www.linkedin.com/in/magdalenajadach/"
              className="hover:text-carrot-orange hover:underline"
            >
              <span className="text-xl font-semibold">Linkedin</span>
            </a>
            <button
              onClick={scrollToProjects}
              className="hover:text-carrot-orange hover:underline"
            >
              <span className="text-xl font-semibold">Projects</span>
            </button>
          </div>
        </header>
      </main>
      <section
        ref={projectsRef}
        className="min-h-screen flex justify-center items-center"
      >
        <ProjectSection />
      </section>
    </div>
  );
}
