import "dotenv/config";
import express from 'express';
import routes from "./routes/index.route";

const app = express();
const port = Number(process.env.PORT) || 4000;

app.use("/", routes);

app.listen(port, "127.0.0.1", () => {
  console.log(`Website đang chạy trên cổng ${port}`);
});