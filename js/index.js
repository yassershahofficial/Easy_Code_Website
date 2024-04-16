// Navbar scroll effect (Enable hidden navbar)
{
    const nav = document.querySelector(".navbar");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if(lastScrollY < window.scrollY){
            nav.classList.add("nav--hidden");
        }
        else{
            nav.classList.remove("nav--hidden");
        }

        lastScrollY = window.scrollY;
    })

}
// Initialize Swiper
{
    var swiper = new Swiper(".swiper-socialproof", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        rewind: true,
        slidesPerView: "2.5",
        coverflowEffect: {
            rotate: 180,
            stretch: 0,
            depth: 10,
            modifier: 0.3,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

}
//hidden contact form & request alert
{
    function toggleContactForm(){
        var contact = document.getElementById("contact");
        if(contact.style.visibility === "hidden"){
            contact.style.visibility = "visible";
        }
        else{
            contact.style.visibility = "hidden";
        }
    }
}
//Initialize Email JS
{
    (function() {
        // https://dashboard.emailjs.com/admin/account
        emailjs.init({
          publicKey: "3Ao3OPJnEWvI4P3t5",
        });
    })();

    window.onload = function() {
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            // these IDs from the previous steps
            emailjs.sendForm('service_0qtlvf9', 'template_zu8jgiy', this)
                .then(() => {
                    console.log('SUCCESS!');
                }, (error) => {
                    console.log('FAILED...', error);
                });
        });
    }
}