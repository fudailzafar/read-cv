"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/blog", label: "Writings" },
  ];

  return (
    <nav className="flex items-center justify-between mb-24 relative z-50">
      <Link href="/" className="font-semibold text-[17px] tracking-tight">
        Alex Morgan
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-[15px] transition-colors ${
              pathname === link.href ? "text-text" : "text-muted hover:text-text"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Nav Toggle */}
      <button
        className="md:hidden p-2 -mr-2 text-text"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-bg/95 backdrop-blur-md pt-4 pb-8 border-b border-black/5 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-[17px] ${
                    pathname === link.href ? "text-text font-medium" : "text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
