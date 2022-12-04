const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mysql2');
const ejs = require('ejs');


const app = express()

app.set('view engine', 'ejs')

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
  extended: true
}));





app.use("/erp", require(__dirname + "/app/route/erpRoutes"));


app.use("/projects", require(__dirname + "/app/route/projectRoutes"));


app.use("/gantt", require(__dirname + "/app/route/ganttRoutes"));

app.get("/", function(req,res){
  res.render(__dirname + "/views/home")
})


app.use("/dashboard", require(__dirname + "/app/route/dashboardRoutes"))

// app.get("/projects", function(req,res){
//   res.render(__dirname + "/views/projects")
// })




app.listen(process.env.PORT || 3000, function(){
  console.log("server is running on port 3000")
})
