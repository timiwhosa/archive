// console.log("hello")
var recentupload;
var uri = "/archive/recent/uploads"
let h = new Headers();
h.append("Accept", "application/json");
let req = new Request(uri, {
    method: "GET",
    headers: h,
    mode: "cors",
});

fetch(req)
    .then((res) => {
        if (res.ok) {
            return res.json();
        } else {
            new Error("not bad");
        }
    })
    .then((jsondata) => {
        // myquestion={};
        recentupload = jsondata;
        // console.log(recentupload);
        recentuploadfunction(recentupload);
    })
    .catch((err) => {
        console.log(err);
    });


function recentuploadfunction(data) {
    for (i = 0; i < data.length; i++) {
        var he = document.getElementById("uploads");
        if (data[i].type != "textbook" && data[i].type != "video" && data[i].type != "link") {
        he.innerHTML += `          
                <a href="/archive/course/download/${data[i].filename}"><div class="upload-div">
                            <p class="course">${data[0].course}</p>
                            <p class="ty"><span class="com">Type:</span>  ${data[i].type}</p>
                            <p class="ty"><span class="com">Uploaded by:</span>  ${data[i].name}</p>
                            <p class="ty"><span class="com">Date:</span>  ${data[i].date}
                            <p class="jet">JETBOOKS</p>
                        </div></a>
                        `;
    }
}
}

var slider= document.getElementById("slider");
var kk = 1;
function slide(){
    if(kk<11){
        slider.style.backgroundImage = `linear-gradient(45deg, #00000078,#00000040) ,
                       url(/archive/img/product${kk}.jpg)`;
            
        kk++;
    }
    else {
        kk =1;
    }
}

setInterval(() => {
    slide();
}, 6000);


function showsection(index) {
    for (i = 1; i <= 3; i++) {
        document.getElementById(`rowsection${i}`).style.borderBottom = "none";
        document.getElementById(`row${i}`).style.display = " none";
        document.getElementById(`fac`).style.display = " none";

    }

    document.getElementById(`rowsection${index}`).style.borderBottom = " 5px solid #ffc107";
    document.getElementById(`row${index}`).style.display = " block";
}

var c = 1;
function showans(index) {
    if (c == 1) {
        for (i = 1; i <= 7; i++) {
            document.getElementById(`ans${i}`).style.display = " none";

        }

        document.getElementById(`ans${index}`).style.display = " block";
        c = 2;
    }
    else if (c == 2) {
        for (i = 1; i <= 7; i++) {
            document.getElementById(`ans${i}`).style.display = " none";

        }
        c = 1;
    }
}


function populateright(){
    if(screen.width<= 480){
        document.getElementById(`row2-right`).style.display = "block";
        document.getElementById(`close-fac`).style += `display: flex; position: fixed; top: 15%; right: 7%;`;
    }
    
    document.getElementById(`right-notice`).style.display = " none";
    document.getElementById(`fac`).style.display = " none";
    document.getElementById(`sty-first-display`).style.display = " block";
}

function closefac(){
    if (screen.width <= 480) {
        document.getElementById(`row2-right`).style.display = "none";
        document.getElementById(`close-fac`).style.display = "none";
    }
}
function showfaculties() {
    document.getElementById(`sty-first-display`).style.display = " none";
    document.getElementById(`fac`).style.display = " block";
}

var b = 1;
function showdepartment(index) {
    if(b==1){
        for (i = 1; i <= 8; i++) {
            document.getElementById(`drop${i}`).style.display = " none";

        }
    
        document.getElementById(`drop${index}`).style.display = " block";
        b = 2;
    }
    else if (b == 2) {
        for (i = 1; i <= 8; i++) {
            document.getElementById(`drop${i}`).style.display = " none";

        }
        b=1;
    }
}

