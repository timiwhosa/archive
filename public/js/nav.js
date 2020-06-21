var html = ` <!-- Close Icon -->
            <div class="nav-close" onclick="closenav()">
                <i class="fa fa-close" aria-hidden="true"></i>
            </div>
            <!-- Logo -->
            <div class="logo">
                <a href="/home"><img src="/img/core-img/jetbooks-online.png" style="width: 102px" alt=""></a>
            </div>
            <!-- Amado Nav -->
            <nav class="amado-nav">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About us</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/promote">Promote products</a></li>
                </ul>
            </nav>
            <!-- Button Group -->
            <div class="amado-btn-group mt-30 mb-100">
                <a href="/jetmovies/index" class="btn amado-btn mb-15"> JETmovies</a>
                <a href="/cgpa_cal/cgpa" class="btn amado-btn active">CGPA cal</a>
                <a href="/miscellaneous" class="btn amado-btn mb-15" style="margin:0; margin-top: 15px"> MISCELLANEOUS</a>
            </div>
            <!-- Cart Menu -->
            <div class="cart-fav-search mb-100">
                <a href="/jetmovies/index" class="cart-nav"><img src="/img/core-img/cart.png" alt="">Cinema Tket <span>(0)</span></a>
                <a href="#" class="search-nav"><img src="/img/core-img/search.png" alt=""> Search</a>
            </div>
            <!-- Social Button -->
            <div class="social-info d-flex justify-content-between">
                <a href="https://wa.me/2348140766866?text=Hi%20JETbooks%20%0AI'm%20a%20A%20%20student%20of%20the%20department%20of__%20%0AMy%20name%20is__"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
                <a href="https://instagram.com/jetbooks.online"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
            </div>`;

document.getElementById("header-area").innerHTML = html;

var html2 = ` <!-- Navbar Brand -->
            <div class="amado-navbar-brand">
                <img src="/img/core-img/jetbooks-online.png" alt="jet-logo" class=" logo-img" >
            </div>
            <!-- Navbar Toggler -->
            <div class="amado-navbar-toggler" onclick="openmenu()">
                <span></span><span></span><span></span>
            </div>`;
document.getElementById("mobile-nav").innerHTML = html2;