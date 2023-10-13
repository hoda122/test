import express from "express";
import { engine } from "express-handlebars";
const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");

app.get("/students", (req, res) => {
  res.render("students", { layout: false });
});
app.listen();
