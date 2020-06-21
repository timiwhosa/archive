
var path = require("path");
var fs = require("fs");
var zlib = require("zlib");
var compress =zlib.createGzip();
var decompress =zlib.createGunzip();
var bodyparser = require("body-parser");
var moment = require("moment");
var jsonparser = bodyparser.json();
var fs= require("fs");
var multer = require("multer");

const storage = multer.diskStorage({
    destination: function(req,res,cb){
        cb(null, "./public/uploads");
    },
    filename: function(req,res,cb){

        // console.log(res, req.query)
        cb(null, res.originalname.replace(/\s/g, "-").split(".")[0] + "-jetbooks-" + req.query.name + "." + res.originalname.replace(/\s/g, "-").split(".")[1])
    }
});
const upload = multer({storage: storage, limits:{
    fileSize: 1024 *1024 * 30
}});

var urlencodedParser = bodyparser.urlencoded({ extended: false });
var public = path.join(__dirname, "../public");
var archive = function (app){
    app.get("/archive", (req,res)=>{
        res.sendFile(public + "/archive/archive.html");
    });
    var arcfac;
    var arcdpt;
    app.get("/archive/dpt", (req, res) => {
        arcfac = req.query.fac;
        // console.log(arcfac);
        arcdpt = req.query.dpt;
        res.sendFile(public + "/archive/archive-level.html");
    });
    
    app.get("/archive/dpt/level", (req, res) => {
        // console.log(arcfac);
        var faculty = JSON.parse(fs.readFileSync(path.join(__dirname, `../schools/${arcfac}.json`)));
        // console.log(faculty);
        for(i=0; i<faculty.length; i++){
            if(faculty[i].department === arcdpt){
                res.json(faculty[i]);
            }
        }
    });
    

    app.get("/archive/course/:course", (req, res) => {
        arcfac = req.query.fac;
        // console.log(arcfac);
        arcdpt = req.query.dpt;
        res.sendFile(public + "/archive/archive-course.html");
    });


    // ****************** Book section**********************
    app.get("/archive/books", (req, res) => {
        // console.log(req.query)
        res.sendFile(public + "/archive/archive-books.html");

    });
    app.get("/archive/books/recent", (req, res) => {
        // console.log(req.query)
        res.json( JSON.parse(fs.readFileSync(path.join(__dirname, `../public/archive/book/recent-books.json`))))
     });
    app.get("/archive/books/book", (req, res) => {
        // console.log(req.query)
        res.sendFile(public + "/archive/book/book.html");

    });
    app.get("/archive/books/book-img/:book", (req, res) => {
        // console.log(req.params.book)
        res.sendFile(public + `/archive/book/img/${req.params.book.toLowerCase().trim()}.jpeg`);

    });

    var books = JSON.parse(fs.readFileSync(path.join(__dirname, "../public/archive/book/books.json")));
    // console.log(books);
    app.post("/book/review", jsonparser, (req,res)=>{
        // console.log(req.body);

        var book = books.filter((bk)=>{
            return bk.title.trim().toLowerCase() == req.body.title.trim().toLowerCase() && bk.author.trim().toLowerCase() == req.body.author.trim().toLowerCase()
        });
        
        if(book.length>0){
            var data = {
                name: req.body.name,
                review: req.body.review,
                time: req.body.time,
                date: req.body.date
            };
            for (i = 0; i < books.length; i++) {
                if (books[i].title.toLowerCase().trim() == req.body.title.toLowerCase().trim() && books[i].author.toLowerCase().trim() == req.body.author.toLowerCase().trim()  ) {
                    // console.log(books);
                    books[i].reviews.unshift(data);
                    fs.writeFileSync(path.join(__dirname, "../archive/books.json"), JSON.stringify(books, null, 2));

                    res.status(200).json({
                        message: "Thanks for helping others by sharing a review"
                    })
                }
            }

        }
        else{
            res.status(200).json({
                message: "An error ocurred.. pls try sending your review again... Thank you"
            })
        }
    });

    app.get("/book/review/:title/:author", urlencodedParser, (req, res) => {
        // console.log(req.params.title, req.params.author);
        var book = books.filter((bk) => {
            return bk.title.trim().toLowerCase() == req.params.title.trim().toLowerCase() && bk.author.trim().toLowerCase() == req.params.author.trim().toLowerCase()
        });
        // console.log(book);
        if(book.length>0){
            res.status(200).json(book);
        }
        else{
            res.status(404).json({
                message:"Sorry but it seems this book doesn't exist on our database.."
            })
        }
    });
    // **********************************************//

    app.get("/archive/videos", (req, res) => {
        res.sendFile(public + "/archive/archive-video.html");

    });
    var archivereview = JSON.parse(fs.readFileSync(path.join(__dirname, "../user-responses/archivereview.json")))
    app.get("/archivereview", (req,res)=>{
        res.json(archivereview);
    });
    app.post("/archivereview", jsonparser, (req, res) => {
        console.log(req.body);
        archivereview.unshift(req.body);
        fs.writeFileSync(path.join(__dirname, "../user-responses/archivereview.json"), JSON.stringify(archivereview, null , 2));
        res.end();
    });

    // uploads retrieval

    var uploads = JSON.parse(fs.readFileSync(path.join(__dirname , "../uploads.json")));
    
    app.get("/uploads", jsonparser, (req, res) => {
        res.json(uploads);
    });
    app.get("/uploads/course/:course", jsonparser, (req, res) => {
        var hh = "";
        var h="";

        var test = uploads.filter((course)=>{
            return course.course == req.params.course
        });
        if(test.length >0){
            res.status(200).json(test);
        }
        else{
            res.status(404).json({ error : "sorry no uploads for this course yet, Pls help others by uploading the materials you have for this course... Thanks!!" })
        }
        // for(i=0; i< uploads.length; i++){
        //     if (uploads[i].course == req.params.course){
        //         hh = uploads[i];
                
        //     }
            
        // }
        // if(hh !=""){
        //     h = hh;
        // }
        // else{
        //     h = {"error":"sorry no uploads for this course yet, Pls help others by uploading the materials you have for this course... Thanks!!"};
        // }
        
        // res.json(h);
        // res.json(uploads);
    });
    var contact_suggest = JSON.parse(fs.readFileSync(path.join(__dirname,"../user-responses/contact_suggest.json")));
    app.post("/contact_suggest", jsonparser,(req,res)=>{
        if (req.body.name.trim() && req.body.number.trim() && req.body.message.trim()){
            contact_suggest.unshift(req.body);
            fs.writeFileSync(path.join(__dirname, "../user-responses/contact_suggest.json"), JSON.stringify(contact_suggest, null ,2));
            res.status(200).json({ message: "So nice to hear from you, We are very grateful"});
        }
        else{
            res.status(404).json({ message: "We really need to hear from you!!, Pls fill form correctly.." });
        }

    });
// console.log(uploads.length)
    // uploading a file **********************
    app.post("/archive/upload", upload.single("upload"),  (req,res)=>{

        
        // console.log(req.file);
        if(req.query.to){
            // console.log(req.query);
            var year = new Date().getFullYear();
            var data = {
                course: req.query.course.trim().toLowerCase(),
                type: req.query.type.trim().toLowerCase(),
                description: req.query.description.trim().toLowerCase(),
                level: req.query.level.trim(),
                recommendation: req.query.recommendation.trim(),
                faculty: req.query.faculty.trim().toLowerCase(),
                name: req.query.name.trim().toLowerCase(),
                year,
                date: req.query.date.trim().toLowerCase(),
                time: req.query.time.trim().toLowerCase()
            }
            // console.log(data)
            var t = [];
            var test1 = uploads.filter(function (cour) {
                return cour.course == data.course;
            });
            // console.log(test1);
            if (test1.length == 0) {
                t = [];
            }
            else {
                t = test1[0].uploads.filter(function (he) {

                    return he.course == data.course && he.type == data.type && he.level == data.level && he.faculty == data.faculty && he.year == data.year && he.filename.split("-jetbooks-")[0] == data.filename.split("-jetbooks-")[0];
                });
            }
            // console.log("test:", t);
            if (t.length === 0) {
                // console.log("data:", data);
                var test = uploads.filter((cour) => {
                    return cour.course == req.query.course;
                });
                // console.log("text:",text);
                if (test.length == 0) {
                    uploads.unshift({
                        "course": req.query.course.trim(),
                        "uploads": [
                            data
                        ]
                    });
                    fs.writeFileSync(path.join(__dirname, "../uploads.json"), JSON.stringify(uploads, null, 2));
                }
                else if (test.length > 0) {
                    for (i = 0; i < uploads.length; i++) {
                        if (uploads[i].course.toLowerCase() == data.course) {

                            // console.log(uploads[i].course);
                            uploads[i].uploads.unshift(data);
                            fs.writeFileSync(path.join(__dirname, "../uploads.json"), JSON.stringify(uploads, null, 2));
                        }

                    }
                }
                // var hi = JSON.parse(fs.readFileSync(path.join(__dirname, `../public/archive/recent.json`)));
                // hi["uploads"].splice(11,1);
                // hi["uploads"].unshift(data);
                // fs.writeFileSync(path.join(__dirname, `../public/archive/recent.json`), JSON.stringify(hi, null ,2));
                res.status(200).json({
                    message: "Thanks for your recommendation "
                });
            }
            else {
                res.status(403).json({
                    message: "Thanks for your contribution but this file already exist. if it doesn't , pls contact us using the contact section"
                });
            }
            // console.log("data:", data);
            // for (i = 0; i < uploads.length; i++) {
            //     if (uploads[i].course.toLowerCase() == data.course) {
            //         // console.log(uploads[i].course);
            //         uploads[i].uploads.unshift(data);
            //         fs.writeFileSync(path.join(__dirname, "../uploads.json"), JSON.stringify(uploads, null, 2));
            //     }
            //     else{
            //         uploads.unshift({
            //           "course": req.query.course.trim(),
            //           "uploads": [
            //               data
            //           ]
            //         });
            //         fs.writeFileSync(path.join(__dirname, "../uploads.json"), JSON.stringify(uploads, null, 2));
            //     }
            // }

        }
        else{
            var year = "";
            if (req.query.type.trim().toLowerCase() == "test" || req.query.type.trim().toLowerCase() == "exam") {
                 year= req.query.year;
             }
             else{
                 year = new Date().getFullYear();
             }
             var data = {
                 course: req.query.course.trim().toLowerCase(),
                 type: req.query.type.trim().toLowerCase(),
                 description: req.query.description.trim().toLowerCase(),
                 level: req.query.level.trim(),
                 faculty: req.query.faculty.trim().toLowerCase(),
                 name: req.query.name.trim().toLowerCase(),
                 year,
                 date: req.query.date.trim().toLowerCase(),
                 time: req.query.time.trim().toLowerCase(),
                 filename: req.file.originalname.replace(/\s/g, "-").split(".")[0] + "-jetbooks-" + req.query.name + "." + req.file.originalname.replace(/\s/g, "-").split(".")[1]
            }
            // console.log(data)
            var t = [];
            var test1 = uploads.filter(function (cour) {
                return cour.course == data.course;
            });
            // console.log(test1);
            if (test1.length == 0) {
                t = [];
            }
            else {
                t = test1[0].uploads.filter(function (he) {

                    return he.course == data.course && he.type == data.type && he.level == data.level && he.faculty == data.faculty && he.year == data.year && he.filename.split("-jetbooks-")[0] == data.filename.split("-jetbooks-")[0];
                });
            }
            // console.log("test:", t);
            if(t.length === 0){
                // console.log("data:", data);
                var test = uploads.filter((cour)=>{
                    return cour.course== req.query.course;
                });
                // console.log("text:",text);
                if(test.length == 0){
                    uploads.unshift({
                        "course": req.query.course.trim(),
                        "uploads": [
                            data
                        ]
                    });
                    fs.writeFileSync(path.join(__dirname, "../uploads.json"), JSON.stringify(uploads, null, 2));
                }
                else if (test.length > 0){
                    for (i = 0; i < uploads.length; i++) {
                        if (uploads[i].course.toLowerCase() == data.course) {

                            // console.log(uploads[i].course);
                            uploads[i].uploads.unshift(data);
                            fs.writeFileSync(path.join(__dirname, "../uploads.json"), JSON.stringify(uploads, null, 2));
                        }
                        
                    }
                }
                // var hi = JSON.parse(fs.readFileSync(path.join(__dirname, `../public/archive/recent.json`)));
                // hi["uploads"].splice(11,1);
                // hi["uploads"].unshift(data);
                // fs.writeFileSync(path.join(__dirname, `../public/archive/recent.json`), JSON.stringify(hi, null ,2));
                res.status(200).json({
                    message: "file successfully uploaded"
                });
            }
            else{
                res.status(403).json({
                    message:"Thanks for your contribution but this file already exist. if it doesn't , pls contact us using the contact section"
                });
            }
        }
    });

    // videos
    app.get("/archive/recent/:type", jsonparser, (req,res)=>{
        var hi = JSON.parse(fs.readFileSync(path.join(__dirname, `../public/archive/recent.json`)));
            if (hi[req.params.type] ){
                res.json(hi[req.params.type]);
            }

        
        
    });

    // category suggestion

    var catsuggest = JSON.parse(fs.readFileSync(path.join(__dirname ,"../user-responses/categorysuggestion.json")));
    app.post("/catsuggest", jsonparser, (req, res) => {
        console.log(catsuggest);
        catsuggest.unshift(req.body);
        // console.log(catsuggest)
        fs.writeFileSync("categorysuggestion.json", JSON.stringify(catsuggest, null, 2));
        res.end();
    });

    //uploadnow
    app.get("/uploadnow", (req,res)=>{
        res.sendFile(path.join(__dirname, "../public/archive/upload.html"));
    });



}

module.exports={archive}