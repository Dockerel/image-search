import express from "express";
import morgan from "morgan";
import rootRouter from "./router/rootRouter";

const app = express();
const logger = morgan("dev");
const PORT = 4000;

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use("/", rootRouter);

const handleListening = () => {
  console.log(`✅ Server started : http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
