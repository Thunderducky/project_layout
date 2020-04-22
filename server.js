require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 8081;
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/api-routes")(app);

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});