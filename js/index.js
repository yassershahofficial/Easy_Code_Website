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
    function hiddenContactForm(){
        var toggleContactForm = document.getElementById("contact");
        toggleContactForm.style.visibility = "hidden";
    }
    function requestContactFormSent(){
        var toggleContactForm = document.getElementById("contact");
        toggleContactForm.style.visibility = "hidden";
        alert("Your request has been sent");
    }
    function visibleContactForm(){
        var toggleContactForm = document.getElementById("contact");
        toggleContactForm.style.visibility = "visible";
    }
}