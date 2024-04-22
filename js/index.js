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
//Detect the width of Web Page
{
    var SlidesValue =  "2.5";
    window.addEventListener("resize", () => {
        let widthWebPage = document.body.offsetWidth;
        if(widthWebPage >= 768){
            console.log("bigger");
            SlidesValue =  "2.5";
        }
        else{
            console.log("smaller");
            SlidesValue =  "1.5";
        }
        var swiper = new Swiper(".swiper-socialproof", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            rewind: true,
            slidesPerView: SlidesValue,
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
    })
}
// Initialize Swiper
{
    var SlidesValue =  "2.5";
    if(document.body.offsetWidth >= 768){
        SlidesValue =  "2.5";
    }
    else{
        SlidesValue =  "1.5";
    }
    var swiper = new Swiper(".swiper-socialproof", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        rewind: true,
        slidesPerView: SlidesValue,
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
//toggle right navbar 
{
    if(document.body.offsetWidth <= 768){
        function toggleShowNav(){
            var rightNavbar =  document.getElementById("right-navbar");
            var removeRightNavbar =  document.getElementById("remove-right-navbar");
            if(rightNavbar.style.visibility === "hidden"){
                rightNavbar.style.visibility = "visible";
                removeRightNavbar.style.visibility = "visible";
            }
            else{
                rightNavbar.style.visibility = "hidden";
                removeRightNavbar.style.visibility = "hidden";
            }
        }
    }   
}