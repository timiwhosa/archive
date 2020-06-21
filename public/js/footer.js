var html = `<div class="container">
            <div class="row align-items-center">
                <!-- Single Widget Area -->
                <div class="col-12 col-lg-4">
                    <div class="single_widget_area">
                        <!-- Logo -->
                        <div class="footer-logo mr-50">
                            <a href="/home"><img src="/img/core-img/jetbooks-online.png" style="width: 102px" alt=""></a>
                            <a href="/home"><img src="/img/core-img/futalogo.png" style="width: 102px" alt=""></a>
                        </div>
                        <!-- Copywrite Text -->
                        <p class="copywrite">
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | JETbrand.JETbooks. </p>
                    </div>
                </div>
                <!-- Single Widget Area -->
                <div class="col-12 col-lg-8">
                    <div class="single_widget_area">
                        <!-- Footer Menu -->
                        <div class="footer_menu">
                            <nav class="navbar navbar-expand-lg justify-content-end">
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#footerNavContent" aria-controls="footerNavContent" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
                                <div class="collapse navbar-collapse" id="footerNavContent">
                                    <ul class="navbar-nav ml-auto">
                                        <li class="nav-item ">
                                            <a class="nav-link" href="/home">Home</a>
                                        </li>

                                        <li class="nav-item">
                                            <a class="nav-link" href="/about">About us</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/contact">contact</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/promote">Promote products</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

document.querySelector("footer").innerHTML= html;