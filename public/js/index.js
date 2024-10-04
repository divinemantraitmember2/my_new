

let navItem=document.getElementsByClassName("nav-item");
if(navItem !=null&& navItem.length>0){
    for(let i=0;i<navItem.length;i++){
        console.log(navItem[i])
        navItem[i].addEventListener("click",(event)=>{
        event.preventDefault()
       let sectionId= navItem[i].getAttribute("data-title");

       let newPage="";

       if(sectionId !=""){
        newPage= `#${sectionId}`
       }else{
        newPage= `${sectionId}`
       }

        history.pushState(null, null, `${newPage}`);
        const targetSection = document.getElementById(sectionId);
        targetSection !=null && targetSection.scrollIntoView({
            behavior: 'smooth'
        });
        })
    }
   
}


function ActiveBanner(){
    
let BannerIndicators=document.getElementById('BannerIndicators');
if(window.innerWidth > 768){
 BannerIndicators.innerHTML =`<div class="carousel-indicators">
            <button type="button" data-bs-target="#BannerIndicators" data-bs-slide-to="0" class="active rounded-1 border-0 p-0 m-0" aria-current="true" id="first_btn" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#BannerIndicators" data-bs-slide-to="1" class="rounded-1 border-0 p-0 m-0" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#BannerIndicators" data-bs-slide-to="2" class="rounded-1 border-0 p-0 m-0" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#BannerIndicators" data-bs-slide-to="3" class="rounded-1 border-0 p-0 m-0" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#BannerIndicators" data-bs-slide-to="4" class="rounded-1 border-0 p-0 m-0" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#BannerIndicators" data-bs-slide-to="5" class="rounded-1 border-0 p-0 m-0" aria-label="Slide 5"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item destop_banner active " id="divice-desctop">
              <img src="./public/assets/banners/check1.png" class="d-block w-100" alt="First slide">
            </div>
            <div class="carousel-item destop_banner ">
              <img src="./public/assets/banners/check2.png" class="d-block w-100" alt="Second slide">
            </div>
            <div class="carousel-item destop_banner ">
              <img src="./public/assets/banners/check3.png" class="d-block w-100" alt="Third slide de">
            </div>
            <div class="carousel-item destop_banner ">
              <img src="./public/assets/banners/check4.png" class="d-block w-100" alt="Third slide de">
            </div>
            <div class="carousel-item destop_banner ">
              <img src="./public/assets/banners/check5.png" class="d-block w-100" alt="Third slide de">
            </div>
            <div class="carousel-item destop_banner ">
              <img src="./public/assets/banners/check6.png" class="d-block w-100" alt="Third slide de">
            </div>
          </div>

         `;
}

if(window.innerWidth <= 768){
    BannerIndicators.innerHTML =`<div class="carousel-indicators">
               <button type="button" class="rounded-1 border-0 p-0 m-0 active" data-bs-target="#BannerIndicators" data-bs-slide-to="0"  aria-current="true" id="first_btn" aria-label="Slide 1"></button>
               <button type="button" class="rounded-1 border-0 p-0 m-0" data-bs-target="#BannerIndicators" data-bs-slide-to="1" aria-label="Slide 1"></button>
               <button type="button" class="rounded-1 border-0 p-0 m-0" data-bs-target="#BannerIndicators" data-bs-slide-to="2" aria-label="Slide 2"></button>
               <button type="button" class="rounded-1 border-0 p-0 m-0" data-bs-target="#BannerIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
               <button type="button" class="rounded-1 border-0 p-0 m-0" data-bs-target="#BannerIndicators" data-bs-slide-to="4" aria-label="Slide 4"></button>
               <button type="button" class="rounded-1 border-0 p-0 m-0" data-bs-target="#BannerIndicators" data-bs-slide-to="5" aria-label="Slide 5"></button>
             </div>
           
             <div class="carousel-inner " >
               <div class="carousel-item mobile_banner active" id="divice-phone">
                 <img src="./public/assets/banners/phone1.png" class="d-block w-100" alt="First slide m">
               </div>
               <div class="carousel-item mobile_banner">
                 <img src="./public/assets/banners/phone2.png" class="d-block w-100" alt="Second slide m">
               </div>
               <div class="carousel-item mobile_banner">
                 <img src="./public/assets/banners/phone3.png" class="d-block w-100" alt="Third slide m">
               </div>

               <div class="carousel-item mobile_banner">
                 <img src="./public/assets/banners/phone4.png" class="d-block w-100" alt="Third slide m">
               </div>

                <div class="carousel-item mobile_banner">
                 <img src="./public/assets/banners/phone5.png" class="d-block w-100" alt="Third slide m">
               </div>
                <div class="carousel-item mobile_banner">
                 <img src="./public/assets/banners/phone6.png" class="d-block w-100" alt="Third slide m">
               </div>

             </div>
   
             `;
   }



}
ActiveBanner()

window.addEventListener('resize', function() {
   
    if(window.innerWidth > 768){
        ActiveBanner()
    }
    if(window.innerWidth <= 768){
        ActiveBanner()
    }
  });



// Get the button:
let mybutton = document.getElementById("service_myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

    document.getElementById('toggleButton').addEventListener('click', function() {
        document.getElementById('header').scrollIntoView({ behavior: 'smooth' });
    });