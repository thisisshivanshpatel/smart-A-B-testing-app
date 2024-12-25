import express from "express";
import { generateScript } from "../services/scriptGenerator";
import fs from "fs/promises";
import path from "path";
import { existsSync, mkdirSync } from "fs";

const router = express.Router();
const projects: any[] = [];

router.get("/", (req, res) => {
  res.json(projects);
});

router.post("/", async (req, res) => {
  const scriptsDirectory = path.join(__dirname, "../../scripts");

  const { name, targetUrl } = req.body;
  const id = Date.now().toString();
  const script = generateScript(targetUrl);

  const project = { id, name, targetUrl, script };
  projects.push(project);
  console.log("hello===>", existsSync(scriptsDirectory));

  if (!existsSync(scriptsDirectory)) {
    console.log(`Creating scripts directory: ${scriptsDirectory}`);

    mkdirSync(scriptsDirectory, { recursive: true });
    console.log(`Created scripts directory: ${scriptsDirectory}`);
  }

  await fs.writeFile(`${scriptsDirectory}/${id}.js`, script);

  res.status(201).json(project);
});

export default router;
