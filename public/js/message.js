var html = `  <div class="container">
            <div class="row align-items-center">
                <!-- Newsletter Text -->
                <div class="col-12 col-lg-6 col-xl-7">
                    <div class="newsletter-text mb-100">
                         <h2>Subscribe <span>to our newsletter</span></h2>
                        <p>Insert your email and click on send. <br> You can also advertise with us <a href="/contact" style="font-size:inherit;text-decoration: underline;">here</a></p>
                    </div>
                </div>
                <!-- Newsletter Form -->
                <div class="col-12 col-lg-6 col-xl-5">
                    <div class="newsletter-form mb-100">
                        <form action="" method="" id="message-form">
                            <input type="email" id="message-email" name="email" class="nl-email" placeholder="Your E-mail">
                            <input type="submit" value="Send" id="submit-email">
                        </form>
                    </div>
                </div>
            </div>
        </div>`;

        document.getElementById("message").innerHTML= html;


var messageform = document.getElementById("message-form");
var submitemail = document.getElementById("submit-email");

messageform.addEventListener("submit", (e) => {
  e.preventDefault();
var messageemail = document.getElementById("message-email").value;
//   console.log(messageemail);
  if (messageemail != "") {
    var urll2 = "/message";

    fetch(urll2, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({email: messageemail}),
    }).then((res)=>{
        if(res.ok){
            alert("You have successfully subscribed to our newsletter.. Thank you very much")
        }
    }).catch(console.error);
  }
});