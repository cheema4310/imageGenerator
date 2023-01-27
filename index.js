const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const openaiRoutes = require("./routes/openaiRoutes");

const port = process.env.PORT || 5000;

const app = express();

// Enable BodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Set Static Folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/openai", openaiRoutes);

app.listen(port, () => console.log("openai server is ready on port " + port));
