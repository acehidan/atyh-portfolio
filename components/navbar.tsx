"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { href: "/", label: "Home", path: "/" },
    { href: "/projects", label: "Work", path: "/projects" },
    // { href: "/about", label: "About", path: "/about" },
    // { href: "/blog", label: "Blog", path: "/blog" },
    // { href: "/more", label: "More", path: "/more" },
  ];

  return (
    <header className="flex justify-center mb-4 md:mb-8 sticky top-1 md:top-4 z-10">
      <nav
        className="flex items-center px-6 py-3 rounded-full w-full max-w-3xl
        backdrop-filter backdrop-blur-lg bg-opacity-30
        shadow-lg
        transition-colors duration-300"
      >
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.href}
              className={cn(
                "relative transition-colors",
                pathname === link.path
                  ? "text-gray-900 dark:text-white font-medium"
                  : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              )}
            >
              {link.label}
              {pathname === link.path && (
                <motion.span
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-900 dark:bg-white rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-3">
          <ThemeToggle />
          <Button className="rounded-full bg-gray-800/90 hover:bg-gray-700 dark:bg-white/10 dark:hover:bg-white/20 text-white dark:text-white border-0 backdrop-blur-sm">
            Book a Call
          </Button>
        </div>
      </nav>
    </header>
  );
}
