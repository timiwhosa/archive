var a = 1;
$("#menu-toggle").click(function () {
    if (a==1){
        $(".menu").css("left", "0px");
         a = 2;
    }
    else if (a==2){
        $(".menu").css("left", "-100%");
        a=1;
    }
});

$(".container, footer, .main-ctn").click(function(){
    $(".menu").css("left", "-100%");
    a = 1;
});


    //  /* menu */
//     .menu{
//     display: block;
//     left: -100 %;
// }  
//     .menu ul {
//     display: block;
// }
//     .menu ul li{
//     display: flex;
//     align - items: center;
//     justify - content: center;
//     /* line-height: 42px; */
//     padding: 20px 0;
// }
//     .menu ul li #menu - icons{
//     max - width: 20px;
//     max - height: 20px;
//     margin - right: 5px;
// }
//     .menu ul li span{
//     padding: 0 8px;
// }
//     #jet - logo img{
//     width: 90px;
//     height: 90px;
// }
//     .need - bk{
//     background - color: #000;
//     border - radius: 50 %;
// }
//     .menu - pq{
//     display: block;
//     margin: 0 20px;
// }
//     .im{
//     display: flex;
//     align - items: center;
//     justify - content: center;
//     width: auto;
//     max - width: 174px;
//     margin: 0 0 10px 0;
//     padding: 10px;
//     height: 50px;
//     font - weight: 900;
//     font - family: "helveticaneuemedium";
// }
//     .im a{
//     color: white;
// }
//     .jb{
//     background - color: #fbb710;
// }
//     .jc{
//     background - color: #000000;
// }

// /* nav */
// nav{
//     grid - template - columns: .5fr 3fr;
// }
// nav.nav - logo img{
//     width: 40px;
//     height: 40px;
// }
// nav ul li{
//     display: none;
// }
// nav ul li: nth - child(1), nav ul li: last - child{
//     display: block;
// }
// nav ul li: nth - child(1) input{
//     width: 119px;
// }
// nav ul li: last - child span{
//     display: block;
//     background - color: #000;
//     width: 25px;
//     height: 3px;
//     border - radius: 100px;
//     margin - bottom: 5px;
// }