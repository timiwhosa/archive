
var a = 1;
function toggleleft(){
    if (a==1){
        document.getElementById("left").style.left ="0";
        a=2;
    }
    else if(a==2){
        document.getElementById("left").style.left ="-100%";
        a=1;
    }
}
function closenav(){
    document.getElementById("left").style.left ="-100%";
    a=1;
}
document.getElementById("menu").addEventListener("click", toggleleft);
document.getElementById("closenav").addEventListener("click", closenav);
document.getElementById("right").addEventListener("click", closenav);
document.getElementById("advert").addEventListener("click", closenav);

// ********************
// old code!!!!
// to load table based on number of courses
// function hi(){
//     var totalcourse= document.getElementById("totalcourse").value;
//     var table= document.getElementById("table");
//     var tb= table.getElementsByTagName("tbody")[0];
//     var tr= tb.getElementsByTagName("tr")[1];
//     var i;
//     for (i=1; i<= totalcourse; i++ ){
//         var hello = document.createElement("tr");
//         var he= tb.appendChild(hello);
//         tb.insertBefore(hello, tr);
//         var td = ` <td ><input type="text" placeholder="course" id="course${i}" autofocus> </td>
//                     <td ><input type="text" id="unit${i}"></td>
//                     <td ><input type="text" id="score${i}"></td>
//                     <td ><div id="grade${i}"></div></td>`
//         hello.innerHTML = td;
//     }
// }

// ********************
// to load table based on number of courses
// new code!!!
var b= 0;
var d=0;

function hi() {
    var totalcourse = document.getElementById("totalcourse").value;
    var table = document.getElementById("table");
    var tb = table.getElementsByTagName("tbody")[0];
    var tr = tb.getElementsByTagName("tr")[1];
    var i;
    for (i = 1; i <= totalcourse; i++) {
        var tim = parseInt(d + i);
        var hello = document.createElement("tr");
        var he = tb.appendChild(hello);
        tb.insertBefore(hello, tr);
        var td = ` <td ><input type="text" placeholder="course" id="course${tim}" > </td>
                    <td ><input type="text" id="unit${tim}"td>
                    <td ><input type="text" id="score${tim}"></td>
                    <td ><div id="grade${tim}"></div></td>`
        hello.innerHTML = td;
        b = i;
        // console.log(d);
    }
    d+=b;
}
// starting the function
document.getElementById("start").addEventListener("click", hi);

// calculating cgpa
function cgpa(){
    var totalcourse= document.getElementById("totalcourse").value;
    var i;
    var totalpoint=0;
    var totalgrade= 0;
    var totalunit =0;
    var totalscore =0;
    
    
    for (i=1; i<= d; i++){
        var unit = document.getElementById(`unit${i}`).value;
        var score = document.getElementById(`score${i}`).value;
        var grade =  document.getElementById(`grade${i}`);
        if (score>= 70 & score<=100){
            grade.innerHTML= "A";
            grade= 5;
        }
        else if (score>= 60 & score<70){
            grade.innerHTML= "B";
            grade= 4;
        }
        else if (score>= 50 & score<60){
            grade.innerHTML= "C";
            grade= 3;
        }
        else if (score>= 45 & score<50){
            grade.innerHTML= "D";
            grade= 2;
        }
        else if (score<45){
            grade.innerHTML= "F";
            grade= 0;
        }
        var result = unit*grade;
        // not important
        // console.log("unit*grade = "+result);
        // console.log("grade is "+grade);
        // totalgrade+= parseInt(grade);
        // console.log(totalgrade);
        // important ************
        // total score
        totalscore+=parseInt(score);
        // total unit
        totalunit+= parseInt(unit);
        // total point ie unit*grade
        totalpoint+= parseInt(result);
    }
    // console.log("totalgrade "+totalgrade);
    // console.log("totalpoint "+totalpoint);
    // console.log("totalunit "+totalunit);
    // console.log("totalscore "+totalscore);

    // sending respective data to required location
    document.getElementById("totalunit").innerHTML= totalunit;
    document.getElementById("totalgrade").innerHTML= totalgrade;
    document.getElementById("totalscore").innerHTML= totalscore;

    // calculating the Gpa
    var gpa = parseFloat(totalpoint/totalunit);
    document.getElementById("gpa").innerHTML= gpa.toFixed(2);
    // calculating cgpa
    // var prevcgpa = parseFloat(document.getElementById("prevcgpa").value);
    var prevtotalunit = parseInt(document.getElementById("prevtotalunit").value);
    var finaltotalunit = parseInt(prevtotalunit + totalunit);

    var prevtotalpoint = parseFloat(document.getElementById("prevtotalpoint").value);
    var presenttotalpoint= parseFloat(totalpoint);
    var cgpa = parseFloat((prevtotalpoint+presenttotalpoint)/finaltotalunit);
    document.getElementById("cgpa").innerHTML= cgpa.toFixed(2);
    document.getElementById("usercgpa").innerHTML= cgpa.toFixed(2);
    // console.log("prevcgpa: "+prevcgpa);
    // console.log("prevtotalunit: "+prevtotalunit);
    // console.log("presenttotalpoint: "+presenttotalpoint);
    // console.log("finaltotalunit: "+finaltotalunit);
    // console.log("prevtotalpoint: "+prevtotalpoint);
    // console.log("cgpa: "+cgpa);
}

document.getElementById("Save").addEventListener("click", cgpa);

// open and close instrustion section
function openinst(){
        document.getElementById("inst").style.display = "block";
}
function closeinst() {
        document.getElementById("inst").style.display = "none";
}

document.getElementById("instruct").addEventListener("click",  openinst);
document.getElementById("closeinst").addEventListener("click", closeinst );
// document.getElementById("closenav").addEventListener("click", closeinst);
document.getElementById("rightbottom").addEventListener("click", closeinst);
document.getElementById("advert").addEventListener("click", closeinst);
document.getElementById("fuz").addEventListener("click", closeinst);



// score
// var score= document.getElementById("score").value.innerHTML;
// var grade= document.getElementById("score").innerHTML;
// function score(){
//    if(score>=70){
//       return grade= 5;
//       console.log( grade );
//    }
//    else if(score>=60, score<70){
//         score= 4;
//     }
//     else if(score>=50, score<60){
//         score= 5;
//     }
//     else if(score>=70){
//         scoe= 5;
//     }
// }
//  console.log("score");

// var unit = document.forms["cgpaform"]["units"].Value;
// var score = document.forms["cgpaform"]["score"].Value;
// var grade = document.getElementById.innerHTML;
// if (score>= 70){
//     grade=5;
// }
// console.log(unit);


// function hi(){
//     var unit = document.getElementById("unit").value;
//     console.log(unit);
// }
// var unit = document.getElementById("unit").value;

// document.getElementById("Save").addEventListener("click", hi);