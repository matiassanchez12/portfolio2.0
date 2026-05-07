"use client";

import { useState, useRef, useCallback } from "react";
import { ProjectCard } from "@/types/project";

export default function ProjectNode({ project }: { project: ProjectCard }) {
  const Diagram = project.diagram;
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const MIN_ZOOM = 0.5;
  const MAX_ZOOM = 2.5;

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.25, MAX_ZOOM));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.25, MIN_ZOOM));
  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  // Pan con drag del mouse
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
  };

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      setPan({
        x: e.clientX - dragStart.current.x,
        y: e.clientY - dragStart.current.y,
      });
    },
    [isDragging]
  );

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
      {/* Columna del Diagrama (60%) */}
      <div className="relative rounded-sm border border-gray-200 border-white/5 bg-black/40 bg-gray-100 p-6 lg:col-span-7 dark:border-white/5 dark:bg-black/40">
        {/* Título */}
        <h4 className="mb-4 font-mono text-[9px] tracking-[0.3em] text-emerald-600 uppercase dark:text-emerald-500/60">
          System_Architecture
        </h4>

        {/* Controles en la esquina superior derecha */}
        <div className="absolute right-4 top-4 z-10 flex flex-wrap items-center gap-2">
          {/* Botones de Zoom */}
          <div className="flex gap-1">
            <button
              onClick={handleZoomOut}
              disabled={zoom <= MIN_ZOOM}
              className="rounded border border-gray-300 px-2 py-1 text-xs font-mono text-gray-600 hover:bg-gray-200 disabled:opacity-50 dark:border-white/20 dark:text-gray-400 dark:hover:bg-white/10"
              title="Zoom Out"
            >
              −
            </button>
            <button
              onClick={handleReset}
              className="rounded border border-gray-300 px-2 py-1 text-xs font-mono text-gray-600 hover:bg-gray-200 dark:border-white/20 dark:text-gray-400 dark:hover:bg-white/10"
              title="Reset"
            >
              {Math.round(zoom * 100)}%
            </button>
            <button
              onClick={handleZoomIn}
              disabled={zoom >= MAX_ZOOM}
              className="rounded border border-gray-300 px-2 py-1 text-xs font-mono text-gray-600 hover:bg-gray-200 disabled:opacity-50 dark:border-white/20 dark:text-gray-400 dark:hover:bg-white/10"
              title="Zoom In"
            >
              +
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              transformOrigin: "top left",
            }}
            className={isDragging ? "" : "transition-transform duration-200"}
          >
            <Diagram />
          </div>
        </div>
      </div>

      {/* Columna de Texto (40%) */}
      <div className="space-y-6 self-center lg:col-span-5">
        <p className="font-sans text-sm leading-relaxed text-gray-600 italic dark:text-gray-400">
          {project.description}
        </p>

        {project.metrics && (
          <div className="grid grid-cols-2 gap-4 border-t border-gray-200 pt-4 dark:border-white/5">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <span className="block font-mono text-[9px] text-gray-500 uppercase dark:text-gray-600">
                  {m.label}
                </span>
                <span className="font-serif text-lg text-gray-800 dark:text-white">
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
