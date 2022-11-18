const express = require("express");
const apiEndpoints = require("./endpoints/endpoints");
const openEndpoints = require("./endpoints/openEndpoints");
const app = express();

app.use(express.json());

app.use(openEndpoints);
app.use("/api", apiEndpoints);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
