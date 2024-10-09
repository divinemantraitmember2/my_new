

let navItem=document.getElementsByClassName("nav-item");
if(navItem !=null&& navItem.length>0){
    for(let i=0;i<navItem.length;i++){
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
                 <img src="./public/assets/banners/1.png" class="d-block w-100" alt="First slide m">
               </div>
               <div class="carousel-item mobile_banner">
                 <img src="./public/assets/banners/2.png" class="d-block w-100" alt="Second slide m">
               </div>
               <div class="carousel-item mobile_banner">
                 <img src="./public/assets/banners/3.png" class="d-block w-100" alt="Third slide m">
               </div>

               <div class="carousel-item mobile_banner">
                 <img src="./public/assets/banners/4.png" class="d-block w-100" alt="Third slide m">
               </div>

                <div class="carousel-item mobile_banner">
                 <img src="./public/assets/banners/5.png" class="d-block w-100" alt="Third slide m">
               </div>
                <div class="carousel-item mobile_banner">
                 <img src="./public/assets/banners/6.png" class="d-block w-100" alt="Third slide m">
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


    document.getElementById('toggleButton').addEventListener('click', function() {
    swipeArea.style.opacity="0.6"
    setTimeout(()=>{swipeArea.remove()},500)  
    setTimeout(() =>{ header_main.style.display="block";},600);
    });

    function swapDivsBack() {
      swipeArea.style.opacity="0.6"
      setTimeout(()=>{swipeArea.remove()},500)  
      setTimeout(() =>{ header_main.style.display="block";},600);  
  }

    function Enquiry(){
      let First_Name=document.getElementById("First_Name");
      let Last_Name=document.getElementById("Last_Name");
      let Email=document.getElementById("Email");
      let Subject=document.getElementById("Subject");
      let Message=document.getElementById("Message");
     
      let enquiry_obj={
        "first_name": "",
        "last_name": "",
        "email": "",
        "subject": "",
        "message": "",
      }

      setTimeout(()=>{
        document.getElementById("firstname_error").innerText="";
        document.getElementById("lastname_error").innerText=""; 
        document.getElementById("email_error").innerText="";
        document.getElementById("subject_error").innerText="";
        document.getElementById("message_error").innerText="";
      },2000)

      if(First_Name.value !=""){
        enquiry_obj.first_name=First_Name.value;
      }else{
        document.getElementById("firstname_error").innerText="First name must be required";
        return false
      }

      if(Last_Name.value !=""){
        enquiry_obj.last_name=Last_Name.value;
      }else{
        document.getElementById("lastname_error").innerText="Last name must be required";
        return false
      }

      if(Email.value !=""){
       enquiry_obj.email=Email.value;
      }else{
        document.getElementById("email_error").innerText="Email must be required";
        return false
      }

      if(Subject.value !=""){
       enquiry_obj.subject=Subject.value;
      }else{
        document.getElementById("subject_error").innerText="Subject must be required";
        return false
      }

      if(Message.value !=""){
      enquiry_obj.message=Message.value ; 
      }else{
        document.getElementById("message_error").innerText="Message must be required";
        return false
      }

postData(enquiry_obj)
 }


    async function postData(data) {
      try {
          const response = await fetch("https://api.faizah.in/api/store-query", {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  },
              body: JSON.stringify(data)
          });
          const result = await response.json();
          if(result.statusCode==="200" && result.status==="success"){
            document.getElementById("succes_message").innerHTML=`<span class="py-4 bg-white " style="font-wieght:bold;padding:20px 10px">${result.message}</span>`;
            setTimeout(()=>{
              document.getElementById("succes_message").innerText="";
             document.getElementById("First_Name").value="";
            document.getElementById("Last_Name").value="";
            document.getElementById("Email").value="";
           document.getElementById("Subject").value="";
            document.getElementById("Message").value="";
            },2000)
          }
          
      } catch (error) {
          console.error('Error during POST request:', error); // Handle and log the error
      }
  }
  
  
  let splashscreent=document.getElementById("splash-screen");
  

function checkScrollPosition() {
  if (window.scrollY === 0 || document.documentElement.scrollTop === 0) {
  } else {
    if(splashscreent !=null){
     setTimeout(()=>{
      splashscreent.remove()
      splash_screen_bottom.remove()  
     },500)
     setTimeout(() =>{ header_main.style.display="block";},600);
    }
   
  }
}

window.addEventListener('scroll', checkScrollPosition);
