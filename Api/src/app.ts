import cors from "cors";
import express, { Application, Request, Response } from "express";
import { StudentRoutes } from "./app/modules/student/student.route";
const app: Application = express();

// Parser

app.use(express.json());
app.use(cors());

// ROUTE

app.use("/api/v1/students", StudentRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("next level 2333");
});

export default app;
