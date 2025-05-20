import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Mail,
  Github,
  Linkedin,
  Instagram,
  FacebookIcon,
} from "lucide-react";
import { PageTransition } from "@/components/page-transition";

export default function HomePage() {
  return (
    <PageTransition>
      <section className="pb-5 grid md:grid-cols-[1fr_300px] md:gap-8 md:py-12 min-h-[calc(100vh-180px)] items-center">
        {/* Profile Info - Now on the left */}
        <div className="space-y-6 order-2 md:order-1 mt-5 md:mt-0">
          <div className="space-y-5">
            <h1 className="text-3xl md:text-5xl font-semibold md:font-light text-gray-800 dark:text-white">
              Aung Thuyein Hein
            </h1>
            <p className="text-md text-gray-600 dark:text-gray-300 mt-10">
              As a backend developer, my goal is to help build resilient and
              scalable systems by tailoring architectural solutions to each
              project's demands.
            </p>
          </div>

          <div className="border-t border-b border-gray-200 dark:border-gray-700 py-3 md:py-6 my-3 md:my-6">
            <p className="text-gray-600 dark:text-gray-300">
              Core competency: I build highly performant backend solutions using
              Node.js (Express, NestJS), Go, and SQL/NoSQL. My focus is on
              applying the right architectural patterns for tailored systems,
              and I'm actively learning AI model training.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-8 justify-center md:justify-start">
            {/* <Link href="#" aria-label="Home">
              <Home className="w-6 h-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white" />
            </Link> */}
            <Link href="mailto:aungthuyeinhein98@gmail.com" aria-label="Email">
              <Mail className="w-6 h-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white" />
            </Link>
            <Link
              href="https://github.com/AungThuyeinHein/"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white" />
            </Link>
            <Link
              href="https://linkedin.com/in/aung-thuyein-hein-295a012b6"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white" />
            </Link>
            <Link
              href="https://facebook.com/share/1998HwaehD/"
              aria-label="Instagram"
            >
              <FacebookIcon className="w-6 h-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white" />
            </Link>
          </div>
        </div>

        {/* Profile Image - Now on the right */}
        <div className="flex justify-center order-1 md:order-2">
          <div className="md:w-64 h-64 w-full md:rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
            <Image
              src="/atyh.jpg"
              alt="Profile"
              width={150}
              height={150}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
