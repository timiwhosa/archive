// console.log("hello")
var miscellaneous;
var uri = "/miscellaneous-pq"
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
        miscellaneous = jsondata;
        // console.log(miscellaneous);
        miscellaneousfunc(miscellaneous);
    })
    .catch((err) => {
        console.log(err);
    });


function miscellaneousfunc(data){
    for (i = 0; i < data.length; i++){
        var he= document.getElementById(`${data[i].course[0]}`);
        he.innerHTML +=`<a href="/miscellaneous/${data[i].nickname}-${data[i].course.trim()}.pdf"><div class="video-div">
                    <div class="subject">
                        course:
                        <span class="sub-sub">${data[i].course}</span>
                    </div>
                    <div class="type"><span class="type-type">Type:</span> ${data[i].type}</div>
                    
                    
                    <div class="fut"> ${data[i].description.toUpperCase()}</div>
                     <div class="extra"> By: <span>${data[i].nickname}</span></div>
                    <div class="special-info">Jetbooks <span id="special-info"></span></div>
                    
                </div></a>`;
    }
}

document.getElementById("Save-btn").addEventListener("click", uploadfile);
function uploadfile(){
    var course = document.getElementById("course").value = "s";
    var type = document.getElementById("type").value="s";
    var description = document.getElementById("description").value="s";
    var name = document.getElementById("name").value="s";
    var upload = document.getElementById("upload").files[0]

    var urll = "/miscellaneous/upload"
    
    fetch(urll, {
        method: "POST",
        body:{
            course,
            type,
            description,
            nickname:name,
            upload
        }
    }).then((res)=>{
        if(res.ok){
            alert("file successfully uploaded")
        }
    }).catch(console.error);
}
// .value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/);