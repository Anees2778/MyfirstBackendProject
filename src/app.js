const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn");

const Login = require("./models/registers")

const port = process.env.PORT || 3001;


const static_path = path.join(__dirname, "../public");

const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");

app.set("views" , template_path);

hbs.registerPartials(partials_path);


app.get("/" , (req, res) =>{
      res.render("login");     
});
app.get("/index" , (req, res) =>{
    res.render("controlpanel");     
});
app.get("/register" , (req, res) =>{
    res.render("register");     
});



app.post("/register" , async(req, res) =>{
    try {
        const registerstudent = new Login({
            username: req.body.uname,
            password:req.body.psw
        })

        registerstudent.save();
        const registered = await registerstudent.save();
        alert("login Successfully!!!");
        res.status(201).render("abc");
    } catch (error) {
        res.status(400).send(error);
    } 
});



app.listen(port, ()=>{
    console.log(`server is running at port no ${port}`);
});