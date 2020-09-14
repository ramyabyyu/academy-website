const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/academyDb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDb Connected"))
  .catch((err) => console.error(err));

app.use("/api/user", require("./routes/registerApi"));
app.use("/api/user", require("./routes/authApi"));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server Connected on Port ${port}`));
