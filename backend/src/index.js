const express = require("express");
require("./db/mongoose");
const cors = require("cors");
const playersRouter = require("./routers/player");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(playersRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
