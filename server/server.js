require("dotenv").config();
console.clear();

const path = require("path");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

/** Middleware */
app.use(helmet());
app.use(cors());

if (process.env.NODE_ENV === "development") {
  const morgan = require("morgan");
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "5mb" }));

/** Connection to mongo db */
const port = process.env.PORT || 5000;
const connectToDatabase = require("./dbConfig");
connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log(`App is running on port : ${port}`);
  });
});

const Form = require("./form.schema");

app.use(express.static("../client/dist"));

app.get("/", (_, res) => {
  res.send(path.join(__dirname, "../client/dist/index.html"));
});

app.post("/api/form", async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    return res.status(201).json(form);
  } catch (error) {
    return res.status(500).json(error);
  }
});

app.get("/", (_, res) => {
  res.status(200).json({
    message: "API Running",
  });
});
