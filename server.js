const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const routes = require("./routes");
const { DBInit, RD } = require("./database/dbconfig");
const app = express();

/* ***********************
 * Middleware
 * ************************/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* ***********************
 * View Engine and Templates
 *************************/
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layouts/layout");

/* ***********************
 * Routes
 *************************/
app.use('/', routes);

app.use((req, res, next) => {
  res.redirect("/xr?status=404");
});

/* ***********************
 * Database Initialization and Server Start
 *************************/
const initializeDB = async () => {
  try {
    await DBInit();
    const db = RD();

    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Server is running @ http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Failed to start server', error);
    process.exit(1);
  }
};

initializeDB();