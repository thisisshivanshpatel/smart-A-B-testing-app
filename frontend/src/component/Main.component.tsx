"use client";
import ProjectForm from "@/component/ProjectForm.component";
import { useState, useEffect } from "react";

export default function Main() {
  interface Project {
    id: string;
    name: string;
    targetUrl: string;
    script: string;
  }

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const res = await fetch("http://localhost:3001/api/projects");
    const data = await res.json();
    setProjects(data);
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl mb-4 text-center">A/B Testing Projects</h1>
      <ProjectForm onProjectCreated={fetchProjects} />
      <div className="mt-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border p-4 mb-4 rounded overflow-auto"
          >
            <h2 className="text-xl">{project.name}</h2>
            <p>Target URL: {project.targetUrl}</p>
            <pre className="bg-gray-100 p-2 mt-2 rounded overflow-auto">
              {project.script}
            </pre>
          </div>
        ))}
      </div>
    </main>
  );
}
