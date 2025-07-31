// server.js
import express from "express";
import compression from "compression";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(compression());
app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(3000, () => console.log("✅ Running on http://localhost:3000"));
