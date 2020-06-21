

var menuli = `<li id="profimg"><img src="/admin/img/jetbooks-online.png" alt=""></li>
                <li id="dashboard" onclick="navmove(5,1)">Dashboard</li>
                <li id="subject" onclick="navmove(5,2)">Subject</li>
                <li id="video" onclick="navmove(5,3)">Video</li>
                <li id="cbt" onclick="navmove(5,4)">CBT</li>
                <li id="site-stats" onclick="navmove(5,5)">Site stats</li>`;
// var menu = `<div class="menu-pq"> 
//                 <div class="jb im"><a href="">PAST QUESTIONS</a></div>
//                 <div class="jc im"><a href="">CGPA CALCULATOR</a></div>
//             </div>`

// #menu is the ul o;
jQuery("#menu").append(menuli);
// .menu is the menu div
// jQuery(".menu").append(menu);

// 