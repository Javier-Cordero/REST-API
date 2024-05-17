import express from "express";
import indexRoutes from "./routes/index.routes.js";
import employessRoutes from "./routes/employes.routes.js";
const app = express();
app.use(express.json());
app.use(indexRoutes);
app.use("/api", employessRoutes);
app.use((req, res, next) => {
  res.status(404).json({ mensaje: "endpoint not found" });
});
export default app;
