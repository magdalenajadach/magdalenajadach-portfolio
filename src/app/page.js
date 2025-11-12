"use client";

import { useRef } from "react";
import Image from "next/image";
import ProjectSection from "./components/ProjectsSection/ProjectsSection";
import ConsultingSection from "./components/ConsultingSection/ConsultingSection";
import ContactSection from "./components/ContactSection/ContactSection";
import SectionDivider from "./components/SectionDivider/SectionDivider";
import Footer from "./components/Footer/Footer"

export default function Home() {
  const projectsRef = useRef(null);
  const consultingRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToConsulting = () => {
    if (consultingRef.current) {
      consultingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
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
          <nav className="text-seasalt flex flex-col sm:flex-row gap-4" aria-label="Main navigation">
            <button
              onClick={scrollToConsulting}
              className="hover:text-carrot-orange hover:underline transition-colors duration-300"
              aria-label="Scroll to consulting section"
            >
              <span className="text-xl font-semibold">Consulting</span>
            </button>
            <button
              onClick={scrollToProjects}
              className="hover:text-carrot-orange hover:underline transition-colors duration-300"
              aria-label="Scroll to projects section"
            >
              <span className="text-xl font-semibold">Projects</span>
            </button>
            <button
              onClick={scrollToContact}
              className="hover:text-carrot-orange hover:underline transition-colors duration-300"
              aria-label="Scroll to contact section"
            >
              <span className="text-xl font-semibold">Contact</span>
            </button>
          </nav>
        </header>
      </main>
      <section
        ref={consultingRef}
        className="min-h-screen flex justify-center items-center w-full"
      >
        <ConsultingSection />
      </section>
      <SectionDivider />
      <section
        ref={projectsRef}
        className="min-h-screen flex justify-center items-center"
      >
        <ProjectSection />
      </section>
      <SectionDivider />
      <section
        ref={contactRef}
        className="min-h-screen flex justify-center items-center w-full"
      >
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
}
