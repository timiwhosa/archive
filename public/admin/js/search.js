

// // function getfaculty(data, index) {
// //     var thefaculty =  data.faculty;
// //     document.getElementById("searchoption").innerHTML = searchdbhtml;
// // }

//   const search =  document.getElementById("search");

//   search.addEventListener("keyup", function(e){
//       var searchinput = e.target.value;
//     //   searchinput.toLowerCase() ;
      
//       var option;
//       for (i = 0; i < searchinput.length; i++) {
//           var searchdb = searchlist.filter(function (data) {
//               return (
//                   data.course.toLowerCase().includes(searchinput) || data.topic.toLowerCase().includes(searchinput)
//                   || data.faculty.toLowerCase().includes(searchinput)
//               );
//           });
//           console.log(searchdb[i]);
//           var html = `<li><a href="jet-tube-${searchdb[i].faculty}.html">
//           ${searchdb[i].course}</a></li> `
//           option = html;
//       }
//       document.getElementById("searchoption").innerHTML += option;
//     //   var searchdbhtml = `<li><a href="${searchdb}.html`
      
//     //   searchdb.forEach(getfaculty);
//     //   console.log(thefaculty);
    
//   });

 




// // jQuery("#searchoption").html = searchlist;

// var searchlist = [{ course: "mee101", topic: "isometric drawing", faculty: "saat"},
//     { course: "mee102", topic: "isometric drawing", faculty: "seet"},
// { course: "mee103", topic: "isometric drawing" ,faculty:"seet"},
// { course: "mee104", topic: "isometric drawing" ,faculty:"seet"},
// { course: "mee105", topic: "isometric drawing" ,faculty:"seet"},
//     { course: "mee106", topic: "isometric drawing", faculty: "seet" }];

// // for (i = 0; i < searchlist.length; i++) {
// //     console.log(searchlist[i]);
// //     var html = `<li><a href="jet-tube-${searchlist[i].faculty}.html">
// //     ${searchlist[i].course}</a></li> `

// //     document.getElementById("searchoption").innerHTML += html;
// // }

// var a = li.getElementsByTagName("a");
var searchlist = `
    <a href="/jet-tube-saat.html" ><span></span><li> MATHEMATICS</li></a>
    <a href="/jet-tube-saat.html" ><span></span><li> PHYSICS</li></a>
    <a href="#"><span></span><li>Signup</li></a>
`;
var ul = document.getElementById("searchoption");
ul.innerHTML = searchlist;

function searchnow(){

    var filter,  li, a, i;
    var search = document.getElementById("search");
  
    filter = search.value.toLowerCase();
 

    a = ul.getElementsByTagName("a");
    if (filter == "") {

        ul.style.display = "none";
    }else{
        ul.style.display = "block";
        ul.style.zIndex = "300";
        for (i = 0; i < a.length; i++) {
            li = a[i].getElementsByTagName("li")[0];
            if (li.innerHTML.toLowerCase().indexOf(filter) > -1) {
                a[i].style.display = "block";
            }
            // else if(filter===""){
            //     li.style.display = "none";
            // }
            else {
                a[i].style.display = "none";
            }

        }
    }
    
    

}



search.addEventListener("keyup", searchnow);
// console.log(a);