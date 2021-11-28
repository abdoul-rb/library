const express = require("express");
const cors = require("cors");
const HttpCodeRouter = require("./routes/HttpCodeRouter");
const UserRouter = require("./routes/UserRouter");
const ArticleRouter = require("./routes/ArticleRouter");
const PaymentRouter = require("./routes/PaymentRouter");
const mustacheExpress = require("mustache-express");

const app = express();
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", __dirname + "/views");

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use("/codes", HttpCodeRouter);
app.use("/users", UserRouter);
app.use("/articles", ArticleRouter);
app.use("/payment", PaymentRouter);
app.post("/transactions", (req, res) => {
  res.json(req.body);
});

app.listen(process.env.PORT || 3000, () => console.log("Server listening"));
