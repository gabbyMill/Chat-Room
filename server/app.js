import express from "express";
import morgan from "morgan";
import cors from "cors";
import loginRoute from "./routes/loginRoute.js";
// import error handler

const app = express();

morgan.token("body", req => JSON.stringify(req.body));

app.use(cors());
app.use(express.json());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

app.post("/newmsg", (req, res, next) => {
  const { inputValue } = req.body;
  console.log(inputValue);
  // Update in DB or something
  // Send back a response to client to let him know if updated successfully
  res.json(true);
});
app.use("/login", loginRoute);

// app.use(errorHandler)

export default app;
