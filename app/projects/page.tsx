"use client";
import { PageTransition } from "@/components/page-transition";
import { ArrowRightIcon, BookOpen, Github } from "lucide-react";
import { useState } from "react";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      name: "Percel Tracker API Demo",
      description:
        "The demo focuses on providing a glimpse into the essential features designed to streamline the currently used handwritten parcel order tracking and verification process at Me Me Cosmetics, aiming for faster and more efficient operations through robust management tools and insightful data analysis.",
      technologies: ["Node.js", "MongoDB", "Express.js"],
      buttonLink: "https://github.com/AungThuyeinHein/parcel_tracker_api_demo",
      tab: ["nodejs", "mongodb", "expressjs"],
      link: "https://parcel-tracker-api-demo.onrender.com/api-docs/",
    },
  ];

  const [activeProject, setActiveProject] = useState(0);

  const handleActiveProject = (id: number) => {
    if (activeProject === id) {
      setActiveProject(0);
    } else {
      setActiveProject(id);
    }
  };

  return (
    <PageTransition>
      <section className="py-8 min-h-[calc(100vh-180px)]">
        <h2 className="text-4xl font-light text-gray-800 dark:text-white mb-8">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Project Card */}

          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleActiveProject(project.id)}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow bg-white dark:bg-gray-800 cursor-pointer"
            >
              <h3 className="text-xl font-medium mb-2 dark:text-white">
                {project.name}
              </h3>
              <p
                className={`text-gray-600 dark:text-gray-300 mb-4 ${
                  activeProject === project.id
                    ? "line-clamp-none"
                    : "line-clamp-3"
                }`}
              >
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tab.map((tab) => (
                  <span className="px-3 py-1 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                    {tab}
                  </span>
                ))}
              </div>
              <div className="text-center w-full flex space-x-4 mt-4">
                <a
                  href={project.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold mt-4 rounded-xl inline-flex items-center px-4 py-2 bg-gray-800/90 hover:bg-gray-700 dark:bg-black dark:hover:bg-white/50 text-white dark:text-white border-0 backdrop-blur-sm"
                >
                  Git Hub
                  <Github className="w-5 h-5 ml-2" />
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold mt-4 rounded-xl inline-flex items-center px-4 py-1 bg-gray-800/90 hover:bg-gray-700 dark:bg-white dark:hover:bg-white/50 text-white dark:text-black border-0 backdrop-blur-sm"
                >
                  API Doc
                  <BookOpen className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
