import { connectDB } from "./config/db.js";
import express from "express";
import rootRouter from "./routes/rootRoutes.js"


const app = express();

app.use(express.json());

app.use("/", rootRouter);

console.log("Hello World");
connectDB();

app.listen(process.env.PORT, () => {
    console.log("Currently listening on http://localhost:3000")
})