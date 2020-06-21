var express= require("express");
var app = express();
var fs = require("fs");
var bodyparser = require("body-parser");
var moment = require("moment");
var path = require("path");
// var multer = require("multer");

var urlencodedParser = bodyparser.urlencoded({ extended: false });
var jsonparser = bodyparser.json();
app.use(express.static(__dirname + "/public"));
var {archive} = require("./routes/archive.js");

// archive
archive(app);


app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/public/home.html")
});
app.get("/library", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});
// change this later ******************
app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});

var dpt;
var sch;
var alldpt;
app.get("/schools/:school", (req, res) => {
    alldpt=[];
    sch = req.params.school;
//   console.log(req)
  //${req.query.dpt}
  res.sendFile(__dirname + `/public/schools/age.html`);
  // console.log(name);
  var faculty = JSON.parse(fs.readFileSync(__dirname +`/schools/${req.params.school}.json`));
  for(i=0; i<faculty.length; i++){
    alldpt.push(faculty[i].department)
      if(faculty[i].department == req.query.dpt){
        dpt = faculty[i];
        // console.log(dpt);
      }
  }
//   
});

app.get("/dpt", jsonparser, (req, res)=>{
    res.json({dpt, school: sch , alldpt: alldpt});
    dpt = "";
    sch = "";
});

app.get("/contact", (req,res)=>{
  res.sendFile(__dirname + "/public/complaint.html")
});
var comp = JSON.parse(fs.readFileSync(__dirname + "/user-responses/complaint.json"))
app.post("/contact", jsonparser, (req,res)=>{
  var time = moment().format("MMMM Do,YYYY, h:mm a");
  comp.unshift({
    section: req.body.section,
    time: time,
    name: req.body.name,
    email: req.body.email,
    level: req.body.level,
    request: req.body.request,
  });
  fs.writeFileSync( "user-responses/complaint.json",JSON.stringify(
    comp, null , 2));
    res.end();
});

app.get("/miscellaneous", (req,res)=>{
  res.sendFile(__dirname + "/public/miscellaneous/miscellaneous.html")
});

// miscellaneous

var miscellaneous = JSON.parse(fs.readFileSync(__dirname + "/miscellaneous.json"));
// console.log(miscellaneous[0])
app.get("/miscellaneous-pq", jsonparser, (req,res)=>{
  res.json(miscellaneous);
});

app.post("/miscellaneous/upload", (req,res)=>{
  console.log(req);
});



app.get("/cgpa_cal", urlencodedParser, (req, res) => {
  res.sendFile(path.join(__dirname, "/public/cgpa_cal/cgpa.html"));
});

//message
app.post("/message", jsonparser,(req,res)=>{
  var hhhhh = JSON.parse(fs.readFileSync(__dirname+ "/newsletter.json"));
  
  hhhhh.unshift(req.body);
  fs.writeFileSync("newsletter.json", JSON.stringify(hhhhh, null , 2));
  res.end();
});

// ***********************************
//ADMIN

app.get("/admin", (req, res) => {
  res.sendFile(__dirname + "/public/admin/admin.html")
});

app.post("/newsubject", jsonparser, (req, res) => {
  var subject = req.body;
  var he = JSON.parse(fs.readFileSync(__dirname+`/schools/${subject.school.toLowerCase().trim()}.json`));
  // console.log(subject.department)
  for (i = 0; i < he.length; i++) {
    // console.log(he[i].department.toLowerCase())
    if (he[i].department.toLowerCase() == subject.department.toLowerCase() ){
      var hh= 0 ;
      for (j = 0; j < he[i].level[subject.level].length;j++){
        if (he[i].level[subject.level][j].course == subject.course && he[i].level[subject.level][j].faculty == subject.faculty ){
         return  hh=1;
        }
        else{
          hh=0;
        }
      }
      if(hh ==0){
      he[i].level[subject.level].push({ "course": subject.course, "faculty": subject.faculty });
      console.log(he[i].level[subject.level]);
        fs.writeFileSync(__dirname + `/schools/${subject.school.toLowerCase().trim()}.json`, JSON.stringify(he, null , 2));
      
      }
      else{
        return
      }
    }
  }
  res.send(true);
  
});

// var he = fs.readFileSync(__dirname + "/public/admin/js/admin.js").toString();
// he.map({"home":"home"});
// comment section

var comm = JSON.parse(fs.readFileSync("user-responses/comment.json"));
var hhh = [];
for (i = 0; i < comm.length; i++) {
  hhh.push(comm[i]);
}
app.get("/admincomment", (req, res) => {
  res.json(hhh);
});

app.post("/admincomment", jsonparser, (req, res) => {
  //console("hello" ,req.body);
  comm.unshift(req.body)
  fs.writeFile("user-responses/comment.json", JSON.stringify(comm, null, 2), (err) => {
    //console("err: ", err);
  });
  res.end();
});
// complaint
app.get("/complaint", jsonparser, (req,res)=>{
  var comp = JSON.parse(fs.readFileSync("user-responses/complaint.json"));
  res.json(comp);
});






app.listen("3001");