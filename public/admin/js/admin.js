var comment;
var subjsubmit = document.getElementById("subjsubmit");
subjsubmit.addEventListener("click", submitnewsubject);

document.getElementById("school").addEventListener("keyup", function () { document.getElementById("sent").style.display = "none";})
function submitnewsubject(){
    var school = document.getElementById("school").value;
    var department = document.getElementById("department").value;
    var level = document.getElementById("level").value;
    var course = document.getElementById("course").value;
    var faculty = document.getElementById("faculty").value;
    if (school != "" && department != "" && level != "" && course != "" && faculty != "" ){
    const uri = "/newsubject";
    var options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            school: `${school.trim()}`, 
            department: department.trim(),
            level: level.trim(),
            course: course.trim(),
            faculty: faculty.trim()
        })
    };

    fetch(uri, options).then((data)=>{
        if(data.ok){
            console.log(data);
            document.getElementById("sent").style.display = "block";
        } else {
            new Error("not bad");
        }
    }).catch((err) => {
        console.log(err);
    });
}
}

window.onload = function(){
    const uri1 = "/complaint"
    let h = new this.Headers();
    h.append("Accept", " application/json");
    var req2 = new Request(uri1, {
        method:"GET",
        headers:h,
        mode:"cors"
    });

    fetch(req2).then((data)=>{
        if(data.ok){
            return data.json();
        } else {
            new Error("not bad");
        }
    }).then((jsondata) => {
        loadcomplaint(jsondata)
        console.log(jsondata);
    }).catch((err) => {
        console.log(err);
    });
        
    const uri3 = "/admincomment";

        let h2 = new Headers();
        h2.append("Accept", "application/json");
        let req = new Request(uri3, {
            method: "GET",
            headers: h2,
            mode: "cors"
        });

        fetch(req).then((res) => {
            if (res.ok) {
                return res.json();
            }
            else {
                new Error("not bad");
            }
        }).then((jsondata) => {
            comment = jsondata;
            // console.log(JSON.stringify(comment));
            loadcomment(comment);

        }).catch((err) => {
            console.log(err);
        });
    
}
function loadcomplaint(data){
    var hhh= 0;
    for(j=0; j<data.length; j++){
        var htm =` <div class="comp-comp" id="suggestion1">
                <div class="date">
                    Date: <span id="date" style="margin-right:10%;">${data[j].time}</span>
                    Name: <span id="name">${data[j].name}</span><span style="margin-left:10%;">No${j + 1}</span>
                </div>
                <div class="email">
                    Email/Phone: <span id="email" style="margin-right:10%;">${data[j].email}</span>
                    Level: <span id="level">${data[j].level}</span>
                </div>

                <div class="request">
                    <h3>Request:</h3>
                    <span>
                        <p id="request">
                        ${data[j].request}
                        </p>

                    </span>
                </div>
                <hr>
            </div>`

        document.getElementById(`${data[j].section.trim()}`).innerHTML+= htm;
    }
}