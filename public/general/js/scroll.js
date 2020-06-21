var myscrollright= document.getElementById("scroll-right");
var myscrollleft = document.getElementById("scroll-left");
var bannerscroll = document.getElementById("banner-scroll");

window.onload = function () {
    scrollit;
};

var slidertimer = 5000;

var scrollit = setInterval(function () { scrollslider(); }, slidertimer);
var scrollstatus = 1;

// setInterval(function () { scrollingright(); }, slidertimer);
// setInterval(function () { scrollingleft(); }, slidertimer);

function scrollslider() {
    if (scrollstatus == 1) {
        scrollingright();
        scrollstatus = 2;
    }
    else if (scrollstatus == 2) {
        scrollingleft();
        scrollstatus = 1;
    }
}

// screen width
var scrollwidth = screen.width;
// scroll left
function scrollingleft() {
    bannerscroll.scrollBy({
        left: -scrollwidth, behavior: "smooth"
    });
    scrollstatus = 1;

}
// scroll right
function scrollingright(){
    bannerscroll.scrollBy({
        left: scrollwidth, behavior:"smooth"
    });
    scrollstatus = 2;
}
// console.log(scrollright);
myscrollleft.addEventListener("click", scrollingleft);
myscrollright.addEventListener("click", scrollingright);


