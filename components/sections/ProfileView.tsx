"use client";

import { useState } from "react";
import PortfolioHeader from "@/components/sections/PortfolioHeader";
import About from "@/components/sections/About";
import WorkExperience from "@/components/sections/WorkExperience";
import Writing from "@/components/sections/Writing";
import Contact from "@/components/sections/Contact";
import FadeIn from "@/components/ui/FadeIn";
import type { BlogPostMetadata } from "@/lib/blog";
import { AnimatePresence, motion } from "framer-motion";

export default function ProfileView({ posts }: { posts: BlogPostMetadata[] }) {
  const [activeTab, setActiveTab] = useState<"about" | "writing">("about");

  return (
    <div className="max-w-[720px] mx-auto pb-24">
      <PortfolioHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="mt-8">
        <AnimatePresence mode="wait">
          {activeTab === "about" ? (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <About />
              <WorkExperience />
              <div className="mt-16 pt-12 border-t border-black/5">
                <Contact />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="writing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Writing posts={posts} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
