const express = require("express");

const app = express();

app.listen("3000");

//middleware
app.use(express.json());

let author = "Eduardo Leite";

app.route("/").get((req, res) => res.send("server rodando"));
app.route("/post-test").post((req, res) => res.send(req.body));
app.route("/put-test").put((req, res) => {
  author = req.body.author;
  res.send(author);
});
app.route("/delete-test/:id").delete((req, res) => res.send(req.params.id));
