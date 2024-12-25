"use client";
import { useState } from "react";

export default function ProjectForm({
  onProjectCreated,
}: {
  onProjectCreated: () => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    targetUrl: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch("http://localhost:3001/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    onProjectCreated();
    setFormData({ name: "", targetUrl: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded">
      <div className="mb-4">
        <label className="block mb-2">Project Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="border p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Target URL</label>
        <input
          type="url"
          value={formData.targetUrl}
          onChange={(e) =>
            setFormData({ ...formData, targetUrl: e.target.value })
          }
          className="border p-2 w-full"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Create Project
      </button>
    </form>
  );
}
