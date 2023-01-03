let bar = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

let btn = document.getElementById("backUpBtn");




// to responseve navbar
bar.addEventListener("click", () => {
  bar.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});




$(window).scroll(
  function () {

    navbar.classList.remove('active')
    bar.classList.remove("fa-times");
    
    //back up btn
    scrollFunction();

    //active link
    $("section").each(function () {
      let top = $(window).scrollTop();
      let offset = $(this).offset().top - 200;
      let height = $(this).height();
      let id = $(this).attr("id");

      if (top > offset && top < offset + height) {
        $(".navbar a").removeClass("active");
        $(".navbar").find(`[href="#${id}"]`).addClass("active");
      }
    }); // end of section funtion

    
    //block navbar ,give it background and shadow
    if (window.scrollY > 60) {
      document.querySelector("header").classList.add("active");
    } else {
      document.querySelector("header").classList.remove("active");
    }
  } //end of scroll function
);






// back up btn
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

btn.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};



// swiper home slider
var swiper = new Swiper(".home-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  loop:true,
  grabCursor:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// swiper client
var swiper = new Swiper(".SwiperClient", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



// AOS Animation
AOS.init({
  duration: 600,
  offset: 150,
});
