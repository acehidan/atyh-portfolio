import Image from "next/image";
import Link from "next/link";
import { Home, Mail, Github, Linkedin, Instagram } from "lucide-react";
import { PageTransition } from "@/components/page-transition";

export default function HomePage() {
  return (
    <PageTransition>
      <section className="grid md:grid-cols-[1fr_300px] gap-8 py-12 min-h-[calc(100vh-180px)] items-center">
        {/* Profile Info - Now on the left */}
        <div className="space-y-6 order-2 md:order-1">
          <div className="space-y-2">
            <h1 className="text-5xl font-light text-gray-800 dark:text-white">
              Aurthor Sologram
            </h1>
            <h2 className="text-xl text-gray-600 dark:text-gray-300">
              Principal Software Developer
            </h2>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-lg">
            I'm a Principal Software Developer specializing in backend
            development. Blockchain really piques my curiosity!
          </p>

          <div className="border-t border-b border-gray-200 dark:border-gray-700 py-6 my-6">
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-medium">Interests:</span> Crypto/blockchain,
              Domain-driven design, Event-driven architecture, Serverless, AWS,
              TypeScript, Node.js, SQL/NoSQL
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-8 justify-center md:justify-start">
            <Link href="#" aria-label="Home">
              <Home className="w-6 h-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white" />
            </Link>
            <Link href="#" aria-label="Email">
              <Mail className="w-6 h-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white" />
            </Link>
            <Link href="#" aria-label="GitHub">
              <Github className="w-6 h-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="w-6 h-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white" />
            </Link>
          </div>
        </div>

        {/* Profile Image - Now on the right */}
        <div className="flex justify-center order-1 md:order-2">
          <div className="w-64 h-64 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Profile"
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
