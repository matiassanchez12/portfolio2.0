"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import SectionHeader from "@/components/common/section-header";
import WorkContent from "./components/work-content";
import ProjectsContent from "./components/projects-content";
import GithubContent from "./components/github-content";

type ContentType = "work" | "projects" | "github";

const transitions = {
  work: "projects",
  projects: "github",
  github: "work",
};

const config = {
  work: { title: "Work History", textButton: "Projects" },
  projects: { title: "Projects", textButton: "Activity" },
  github: { title: "Activity", textButton: "Work History" },
};

const contentComponents = {
  work: WorkContent,
  projects: ProjectsContent,
  github: GithubContent,
};

export default function ExperienceContent() {
  const [selectedContentType, setSelectedContentType] =
    useState<ContentType>("work");

  const contentConfig = config[selectedContentType];
  const ContentComponent = contentComponents[selectedContentType];

  const handleContentChange = () => {
    setSelectedContentType(transitions[selectedContentType] as ContentType);
  };

  return (
    <section className="h-full min-h-[360px] overflow-y-auto mb-6 sm:mb-8 md:mb-10">
      <SectionHeader
        title={contentConfig.title}
        textButton={contentConfig.textButton}
        actionButton={handleContentChange}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedContentType}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <ContentComponent />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
