"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProjectCardProps } from "@/types/project";

export default function ProjectCard({
  title,
  href,
  github,
  description,
  status,
  image,
  technologies,
  type,
}: ProjectCardProps) {
  return (
    <div className="group bg-card text-card-foreground hover:bg-card/80 relative overflow-hidden rounded-xl border shadow-sm transition-colors">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {status && (
          <div className="absolute top-3 right-3">
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors ${
                status === "running"
                  ? "bg-green-500/20 text-green-700 dark:text-green-400"
                  : status === "building"
                    ? "bg-yellow-500/20 text-yellow-700 dark:text-yellow-400"
                    : "bg-red-500/20 text-red-700 dark:text-red-400"
              }`}
            >
              {status}
            </span>
          </div>
        )}
      </div>

      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="leading-tight font-semibold">{title}</h3>
          <div className="flex shrink-0 gap-1">
            {github && (
              <Link
                href={github}
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
              </Link>
            )}
            {href && (
              <Link
                href={href}
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>

        <p className="text-muted-foreground line-clamp-2 text-sm">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        {type && <span className="text-muted-foreground text-xs">{type}</span>}
      </div>
    </div>
  );
}
