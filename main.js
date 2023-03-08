const express = require('express');
const fs = require("fs");
const hbs = require('hbs');
const port = 3003
const app = express();

hbs.registerPartials(__dirname + "/views");
app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'));
const ruta = "menu.json"

let rawdata = fs.readFileSync(ruta);
let almuerzos = JSON.parse(rawdata);
console.log(almuerzos);

app.get("/almuerzos", (req, res) => {
    let rawdata = fs.readFileSync(ruta);
    let almuerzos = JSON.parse(rawdata);
    res.render("index.hbs", {almuerzos})})


app.get("nuevomenu", (req,res)=> {
    
})





app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})