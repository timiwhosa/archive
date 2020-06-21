


// // general info ///
// just put the message here

// var p = document.getElementById("roll");
//p.innerHTML= " ********your message*******";











// openmenu
var openmen=1;
function openmenu(){
   if (openmen==1){
       document.getElementById("header-area").style.left= 0;
       openmen=2;
   }
   else if (openmen==2){
       document.getElementById("header-area").style.left= "-350px";
       openmen=1;
   }
}

function closenav(){
   if (openmen==2){
       document.getElementById("header-area").style.left= "-350px";
       openmen=1;
   }
}


// 555555555555555555555555
var a = 1;
function opentesting(){
if (a==1) {
document.getElementById("testing").style.display= "grid";
a=2;
}
else if (a==2){
document.getElementById("testing").style.display= "none";
a =1;
}
}

var b = 1;
function opentesting2(){
if (b==1) {
document.getElementById("viewProduct").style.display= "grid";
b=2;
}
else if (b==2){
document.getElementById("viewProduct").style.display= "none";
b =1;
}
}

// closetesting
function closetesting(){
if (a==2) {
document.getElementById("testing").style.display= "none";
a=1;
}
}
// closetesting2

function closetesting2(){
if (b==2) {
document.getElementById("viewProduct").style.display= "none";
b=1;
}
}
// function closetest(){
//    document.getElementById("testing").style.display= "none";
// }
// function showlevel(){
// var  getSelectedvalue = document.getElementById("sortbylevel").value;
//   if (getSelectedvalue.value =="100"){
//     document.getElementById("row1").style.display = "flex";
//     document.getElementById("row2").style.display = "none";
//     document.getElementById("row3").style.display = "none";
//     document.getElementById("row4").style.display = "none";
//     document.getElementById("row5").style.display = "none";
//   }
// }

// ################################################################################### -->

//script to show more items on same pcpe  -->
    

       var that =true;
       function movet(){
         if (that== true){
           document.getElementById("row1").style.display = "flex";
           document.getElementById("row2").style.display = " none";
           document.getElementById("row2").style.display = "none";
           //document.getElementById("5year").style.display = "none";
           document.getElementById("row3").style.display = "none";
           document.getElementById("row4").style.display = "none";
           document.getElementById("row5").style.display = "none";
           //document.getElementById("secondyear").style.display = "none";
      //     //document.getElementById("3rdyear").style.display = "none";
   //        //document.getElementById("4year").style.display = "none";
//           //document.getElementById("5year").style.display = "none";

           that = false;
         }
         else if(that==false){
           document.getElementById("row1").style.display = "flex";
           document.getElementById("row2").style.display = " none";
           document.getElementById("row2").style.display = "none";
           //document.getElementById("5year").style.display = "none";
           document.getElementById("row3").style.display = "none";
           document.getElementById("row4").style.display = "none";
           document.getElementById("row5").style.display = "none";
           //document.getElementById("secondyear").style.display = "none";
      //     //document.getElementById("3rdyear").style.display = "none";
   //        //document.getElementById("4year").style.display = "none";
//           //document.getElementById("5year").style.display = "none";
           that = true;
         }
       }
       // show 16 items
       var that16 =true;
       function movet16(){
         if (that16== true){
           document.getElementById("row1").style.display = "flex";
            document.getElementById("row2").style.display = " flex";
            //document.getElementById("secondyear").style.display = "flex";
            document.getElementById("row3").style.display = "none";
            document.getElementById("row4").style.display = "none";
            document.getElementById("row5").style.display = "none";

           that16 = false;
         }
         else if(that16==false){
           document.getElementById("row1").style.display = "flex";
           document.getElementById("row2").style.display = " none";
           //document.getElementById("secondyear").style.display = "none";
           // document.getElementById("row2").style.display = "none";
           document.getElementById("row3").style.display = "none";
           document.getElementById("row4").style.display = "none";
           document.getElementById("row5").style.display = "none";

           that16 = true;
         }
       }
       var that24 =true;
       function movet24(){
         if (that24== true){
           document.getElementById("row1").style.display = "flex";
            document.getElementById("row2").style.display = " flex";
            // //document.getElementById("secondyear").style.display = "flex";
            // document.getElementById("row2").style.display = "flex";
            // //document.getElementById("3rdyear").style.display = "flex";
            // //document.getElementById("4year").style.display = "none";
            // //document.getElementById("5year").style.display = "none";
            document.getElementById("row3").style.display = "flex";
            document.getElementById("row4").style.display = "none";
            document.getElementById("row5").style.display = "none";

           that24 = false;
         }
         else if(that24==false){
           document.getElementById("row1").style.display = "flex";
           document.getElementById("row2").style.display = " none";
           document.getElementById("row2").style.display = "none";
           //document.getElementById("3rdyear").style.display = "none";
           document.getElementById("row3").style.display = "none";
           document.getElementById("row4").style.display = "none";
           document.getElementById("row5").style.display = "none";
           //document.getElementById("secondyear").style.display = "none";
      //     //document.getElementById("3rdyear").style.display = "none";
   //        //document.getElementById("4year").style.display = "none";
//           //document.getElementById("5year").style.display = "none";

           that24 = true;
         }
       }

       // show 100 to 400 on one screen
       var that32 =true;
       function movet32(){
         if (that32== true){
           document.getElementById("row1").style.display = "flex";
            document.getElementById("row2").style.display = " flex";
            document.getElementById("row2").style.display = "flex";
            //document.getElementById("secondyear").style.display = "flex";
            //document.getElementById("3rdyear").style.display = "none";
            //document.getElementById("4year").style.display = "flex";
            //document.getElementById("5year").style.display = "none";
            document.getElementById("row3").style.display = "flex";
            document.getElementById("row4").style.display = "flex";
            document.getElementById("row5").style.display = "none";

           that32 = false;
         }
         else if(that32==false){
           document.getElementById("row1").style.display = "flex";
           document.getElementById("row2").style.display = " none";
           document.getElementById("row2").style.display = "none";
           document.getElementById("row3").style.display = "none";
           //document.getElementById("4year").style.display = "none";
           document.getElementById("row4").style.display = "none";
           document.getElementById("row5").style.display = "none";
           //document.getElementById("secondyear").style.display = "none";
           //document.getElementById("3rdyear").style.display = "none";
           //document.getElementById("5year").style.display = "none";

           that32 = true;
         }
       }
       // show 100 to 500 on one screen
       var that40 =true;
       function movet40(){
         if (that40== true){
           document.getElementById("row1").style.display = "flex";
            document.getElementById("row2").style.display = " flex";
            document.getElementById("row2").style.display = "flex";
            //document.getElementById("secondyear").style.display = "flex";
            //document.getElementById("3rdyear").style.display = "flex";
            //document.getElementById("4year").style.display = "flex";
            //document.getElementById("5year").style.display = "flex";
            // //document.getElementById("5year").style.display = "flex";
            document.getElementById("row3").style.display = "flex";
            document.getElementById("row4").style.display = "flex";
            document.getElementById("row5").style.display = "flex";

           that40 = false;
         }
         else if(that40==false){
           document.getElementById("row1").style.display = "flex";
           document.getElementById("row2").style.display = " none";
           document.getElementById("row2").style.display = "none";
           //document.getElementById("5year").style.display = "none";
           document.getElementById("row3").style.display = "none";
           document.getElementById("row4").style.display = "none";
           document.getElementById("row5").style.display = "none";
           //document.getElementById("secondyear").style.display = "none";
      //     //document.getElementById("3rdyear").style.display = "none";
   //        //document.getElementById("4year").style.display = "none";
//           //document.getElementById("5year").style.display = "none";

           that40 = true;
         }
       }


       



       // pagination, it slides to the second -->
       

       function level(){
         document.getElementById("level").style.width = "100%";
         document.getElementById("level").innerHTML = "100 level";
         document.getElementById("level").style.paddingLeft = "10%";

       }
       function ccolor2(){
         document.getElementById("level").style.color =" #fbb710";
       }
       function ccolor12(){
         document.getElementById("level").style.color ="black";
       }
       function ccolor(){
         document.getElementById("roll").style.color =" #fbb710";
       }
       function ccolor1(){
         document.getElementById("roll").style.color ="black";
       }
       function move1(){
        document.getElementById("showing").innerHTML= "showing 1-8 of 40";
        document.getElementById("row1").style.display = "flex";
        document.getElementById("roll").style.display = "none";
        //document.getElementById("secondyear").style.display = "none";
        //document.getElementById("3rdyear").style.display = "none";
        //document.getElementById("4year").style.display = "none";
        //document.getElementById("5year").style.display = "none";
        document.getElementById("row2").style.display = "none";
        document.getElementById("row3").style.display = "none";
        document.getElementById("row4").style.display = "none";
        document.getElementById("row5").style.display = "none";

       }
       function move2(){
        document.getElementById("showing").innerHTML= "showing 9-16 of 40"
        document.getElementById("row2").style.display = "flex";
        // document.getElementById("roll").innerHTML = "200 level";
        // document.getElementById("roll").style.paddingLeft = "10%";
        // document.getElementById("roll").style.display = "flex";
        //document.getElementById("secondyear").style.display = "flex";
        //document.getElementById("3rdyear").style.display = "none";
        //document.getElementById("4year").style.display = "none";
        //document.getElementById("5year").style.display = "none";
        document.getElementById("row1").style.display = "none";
        document.getElementById("row3").style.display = "none";
        document.getElementById("row4").style.display = "none";
        document.getElementById("row5").style.display = "none";

       }


       function move3(){
        document.getElementById("showing").innerHTML= "showing 17-24 of 40"
        document.getElementById("row2").style.display = "none";
        // document.getElementById("roll").innerHTML = "300 level";
        // document.getElementById("roll").style.paddingLeft = "10%";
        // document.getElementById("roll").style.display = "flex";
        //document.getElementById("secondyear").style.display = "none";
        //document.getElementById("3rdyear").style.display = "flex";
        //document.getElementById("4year").style.display = "none";
        //document.getElementById("5year").style.display = "none";
        document.getElementById("row1").style.display = "none";
        document.getElementById("row3").style.display = "flex";
        document.getElementById("row4").style.display = "none";
        document.getElementById("row5").style.display = "none";
       }

       function move4(){
        document.getElementById("showing").innerHTML= "showing 25-32 of 40"
        // document.getElementById("roll").innerHTML = "400 level";
        // document.getElementById("roll").style.paddingLeft = "10%";
        // document.getElementById("roll").style.display = "flex";
        //document.getElementById("secondyear").style.display = "none";
        //document.getElementById("3rdyear").style.display = "none";
        //document.getElementById("4year").style.display = "flex";
        //document.getElementById("5year").style.display = "none";
        document.getElementById("row1").style.display = "none";
        document.getElementById("row2").style.display = "none";
        document.getElementById("row3").style.display = "none";
        document.getElementById("row4").style.display = "flex";
        document.getElementById("row5").style.display = "none";
       }

       function move5(){
        document.getElementById("showing").innerHTML= "showing 32-40 of 40"
        // document.getElementById("roll").innerHTML = "500 level";
        // document.getElementById("roll").style.paddingLeft = "10%";
        // document.getElementById("roll").style.display = "flex";
        //document.getElementById("secondyear").style.display = "none";
        //document.getElementById("3rdyear").style.display = "none";
        //document.getElementById("4year").style.display = "none";
        //document.getElementById("5year").style.display = "flex";
        document.getElementById("row1").style.display = "none";
        document.getElementById("row2").style.display = "none";
        document.getElementById("row3").style.display = "none";
        document.getElementById("row4").style.display = "none";
        document.getElementById("row5").style.display = "flex";
       }



 document.getElementById("row1").addEventListener("click", closenav);
 document.getElementById("row2").addEventListener("click", closenav);
 document.getElementById("row3").addEventListener("click", closenav);
 document.getElementById("row4").addEventListener("click", closenav);
 document.getElementById("row5").addEventListener("click", closenav);
 


