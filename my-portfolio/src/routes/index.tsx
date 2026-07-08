import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Services } from "@/components/sections/Services";
import { TechStack } from "@/components/sections/TechStack";
import { Stats } from "@/components/sections/Stats";

import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eddy Yego — Full Stack Developer Portfolio" },
      {
        name: "description",
        content:
          "Eddy Yego is a Full Stack Developer building premium web applications with React, TypeScript, Django and PostgreSQL. Explore projects, services and get in touch.",
      },
      { property: "og:title", content: "Eddy Yego — Full Stack Developer Portfolio" },
      {
        property: "og:description",
        content:
          "Premium portfolio of Eddy Yego — React, TypeScript, Django, PostgreSQL. Modern, performant, beautifully engineered digital experiences.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <TechStack />
        <Stats />
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
