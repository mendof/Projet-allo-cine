fetch('./../data/moovies.json')
.then(function(response){
   return response.json()
})
.then(function(data) {
   console.log('Response json : ', data)
  

   let divMoovies = document.querySelector('.moovies')
   
   data.forEach((moovies, index) => {
    console.log(index)
        divMoovies.innerHTML = divMoovies.innerHTML +=`
        <br>
        <br>
        <br>
        <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <div class="card">
            <!--Poster -->
            <div class="card-image">
            <img src="${moovies.Poster}" class="rounded mx-auto d-block" alt="poster" />
            <div id="carousel${index}" class="carousel slide ">
            <div class="carousel-inner">
              <div class="carousel-item active">
              <img src="${moovies.Images[0]}" class="mini-img img-fluid rounded d-block w-100 " />
              </div>
              <div class="carousel-item  ">
              <img src="${moovies.Images[1]}" class="mini-img img-fluid rounded d-block w-100 " />
              </div>
              <div class="carousel-item  ">
              <img src="${moovies.Images[2]}" class="mini-img img-fluid rounded d-block w-100" />
              </div>
              <div class="carousel-item  ">
              <img src="${moovies.Images[3]}" class="mini-img img-fluid rounded d-block w-100" />
              </div>
            
            <div> 
            <button class="carousel-control-prev" type="button" data-bs-target="#carousel${index}" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carousel${index}" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
            </div>
          </div>
            </div>
            <!-- Fin de Poster -->
      
            <!-- Corp de notre carte -->
            <div class="card-body">
                <!-- Titre du film -->
                
                <div class="card-title">
                    <h3>${moovies.Title}</h3>
                    <span class="badge bg-secondary">New</span>
                </div>
                <!-- Synopsis -->
                <div class="card-title">
                <p>${moovies.Plot}</p>
                </div>
                <div class="card-image2 d-flex">
                
            <br>
            <!-- Fin du corp de notre carte -->
      </div>
      </div>
      
      ﻿
      
    
`
   })
})
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
scrollFunction();
};

function scrollFunction() {
if (
document.body.scrollTop > 20 ||
document.documentElement.scrollTop > 20
) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}
 