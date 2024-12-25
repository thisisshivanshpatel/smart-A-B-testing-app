import express from "express";
import { generateScript } from "../services/scriptGenerator";
import fs from "fs/promises";
import path from "path";

const router = express.Router();
const projects: any[] = [];

router.get("/", (req, res) => {
  res.json(projects);
});

router.post("/", async (req, res) => {
  const { name, targetUrl } = req.body;
  const id = Date.now().toString();
  const script = generateScript(targetUrl);

  const project = { id, name, targetUrl, script };
  projects.push(project);

  await fs.writeFile(path.join(__dirname, `../../scripts/${id}.js`), script);

  res.status(201).json(project);
});

export default router;
