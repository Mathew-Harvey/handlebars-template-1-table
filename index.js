const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const mooringData = require("./mooringData.json")

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('views/images'));

//Handlebars settings
app.set("view engine", "hbs");
app.engine("hbs", exphbs({
    extname: "hbs",
    defaultLayout: "index",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",

}));

const port = 8800;
app.listen(port);
console.log(`Server is running on Port: ${port}`)

// Route to display static src images
app.get("/static", (req, res) => {
    res.render("static");
});

app.get('/', (req, res) => {
    res.render("main", mooringData);
})




