

var dat ;
window.onload = function(){
    dat = "";
    var uri = "/dpt"
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
        dat = jsondata;
        console.log(dat);
        renderdpt(dat);
        rendercourses(dat);
        document.getElementById("school").innerText = dat.school.toUpperCase();

        // rendersubject(myquestion.subject);
      })
      .catch((err) => {
        console.log(err);
      });
}


function renderdpt(data){
   var he =  document.getElementById("dptul");
   var hi ="";
    for(i=0 ; i<data.alldpt.length; i++){
        
        if (data.alldpt[i] == data.dpt.department) {
          hi += `<li class="active"><a href="#${data.alldpt[i]}" >${data.alldpt[i].toUpperCase()}</a></li>`;
          // var
        } 
        else if (data.alldpt[i] != data.dpt.department) {
            hi += `<li ><a href="/schools/${data.school}?dpt=${
                data.alldpt[i]
            }" >${data.alldpt[i].toUpperCase()}</a></li>`;
        }
        // console.log("hi" + hi);
    }
    he.innerHTML = hi;
    
}

function rendercourses(data){
    for(j=0; j<5; j++){
        var he = j + 1;
        // console.log(j)
        var hh = document.getElementById(`row${he}`);
        var main = "";
        for(i=0; i< data.dpt.level[he*100].length; i++){
        var level;
        if(j == 1){
            level = `<p id="secondyear" style=" width: 100%; padding-left: 10%; font-weight: bold;"> 200 level</p>`;
        }else{
        level = `<p id="level"  onmouseover="ccolor2()" onmouseout="ccolor12()" style="width:100%; padding-left: 10%;">${
          he * 100
        } level</p>`;
        }
        
        // hh.innerHTML = level;
        main += `<div class="col-12 col-sm-6 col-md-12 col-xl-6"  id="row1ctn" >
                        <div class="single-product-wrapper">
                            <!-- Product Immne -->
                            <div class="product-img">

                                <!-- Hover Thumb -->
                                <div class="hover-img">
                                  <a href="/pq/${
                                    data.dpt.level[he * 100][i].faculty
                                  }/${data.dpt.level[he * 100][i].course}/${
          data.dpt.level[he * 100][i].course
        }-18.pdf">2018/2019</a>
                                  <a href="/pq/${
                                    data.dpt.level[he * 100][i].faculty
                                  }/${data.dpt.level[he * 100][i].course}/${
          data.dpt.level[he * 100][i].course
        }-17.pdf">2017/2018</a>
                                  <a href="/pq/${
                                    data.dpt.level[he * 100][i].faculty
                                  }/${data.dpt.level[he * 100][i].course}/${
          data.dpt.level[he * 100][i].course
        }-16.pdf">2016/2017</a>
                                  <a href="/pq/${
                                    data.dpt.level[he * 100][i].faculty
                                  }/${data.dpt.level[he * 100][i].course}/${
          data.dpt.level[he * 100][i].course
        }-15.pdf">2015/2016</a>
                                  <a href="/pq/${
                                    data.dpt.level[he * 100][i].faculty
                                  }/${data.dpt.level[he * 100][i].course}/${
          data.dpt.level[he * 100][i].course
        }-14.pdf">2014/2015</a>
                                  <a href="/pq/${
                                    data.dpt.level[he * 100][i].faculty
                                  }/${data.dpt.level[he * 100][i].course}/${
          data.dpt.level[he * 100][i].course
        }-13.pdf">2013/2014</a>
                                </div>

                                <img src="/img/school/seet/product1.jpg" alt="" id="imgprd">
                            </div>

                            <!-- Product Description -->
                            <div class="product-description d-flex align-items-center justify-content-between">
                                <!-- Product Meta Data -->
                                <div class="product-meta-data">
                                    <div class="line"></div>
                                    <p class="product-price">${
                                      data.dpt.level[he * 100][i].course.toUpperCase()
                                    }</p>
                                     <a><p>Engineering</p>

                                    </a>
                                </div>
                                <!-- Ratings & Cart -->
                                <div class="ratings-cart text-right">
                                    <div class="ratings">
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <div class="cart">
                                        <a href="#" data-toggle="tooltip" data-placement="left" title="download">   <i class="fa fa-download" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
            }
            hh.innerHTML = level + main;
        }
    }
// }

// function renderlevel(level){
//     // console.log(level);
//     for(j=1; j<6; j++){
//         if(j = level){
//             document.getElementById(`row${j}`).style.display = "flex"
//         }
//         else{
//           document.getElementById(`row${j}`).style.display = "none";
//         }
//     }

// }