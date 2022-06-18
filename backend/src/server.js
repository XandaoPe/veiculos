const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");

mongoose.connect("mongodb+srv://mota:xela2208@motacluster.vdoop.mongodb.net/PrimeiroProjeto?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// mongoose.connect(process.env.DATABASE_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("📦 Connected to the database!"));

const port = 3333;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`⚡ Backend started at http://localhost:${port}`);
});
