window.onload = function() {
    document.querySelector(".loader-parent").classList.add("d-none");
    document.querySelectorAll("[data-src]").forEach((img)=>{
        img.src= img.dataset.src;
      })
  }
  
  var swiper = new Swiper(".mySwiper", {
      effect: "cards",
      grabCursor: true,
      centeredSlides: true,
      loop: true,
  
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
   function openNav() {
     document.querySelector("nav ul").classList.toggle("active")
   }
   function closeToggle() {
     document.querySelector("nav ul").classList.remove("active")
   }
   window.onscroll = function() {
     if(window.scrollY > 50){
       document.querySelector("nav").classList.add("less")
       document.querySelector("nav").style.zIndex = "10002";
      }else{
       document.querySelector("nav").classList.remove("less")
       document.querySelector("nav").style.zIndex = "9999"

     }
   }