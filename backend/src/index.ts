import express from "express";
import cors from "cors";
import projectRoutes from "./routes/projects";

const app = express();
const Port = 3001;

app.use(cors());
app.use(express.json());

app.use("/api/projects", projectRoutes);
app.use("/scripts", express.static("scripts"));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from express server" });
});

app.listen(Port, () => {
  console.log(`Server is running on ${Port}`);
});
