var arr= [{dp:"https://www.iwmbuzz.com/wp-content/uploads/2023/01/are-you-mahi-fan-answer-these-questions-to-prove-920x518.jpg",story:"https://e1.pxfuel.com/desktop-wallpaper/3/324/desktop-wallpaper-sakshi-dhoni.jpg"},
{dp:"https://m.economictimes.com/thumb/msid-101146953,width-600,resizemode-4/pm-modi-us-visit-2023-news-live-joe-biden-latest-updates-june-2023.jpg",story:"https://www.lowyinstitute.org/sites/default/files/GettyImages-643118336.jpg"},
{dp:"https://m.media-amazon.com/images/M/MV5BNTk1OTUxMzIzMV5BMl5BanBnXkFtZTcwMzMxMjI0Nw@@._V1_.jpg",story:"https://m.media-amazon.com/images/M/MV5BY2IyZGFiYWQtYmJkNi00ZTVkLThjNzgtNTE4MWM2YTIwZGFhL2ltYWdlXkEyXkFqcGdeQXVyMDkwNTkwNg@@._V1_.jpg"},
{dp:"https://upload.wikimedia.org/wikipedia/commons/7/7b/Shraddha_Kapoor_promoting_Street_Dancer_3D.jpg",story:"https://www.bollywoodhungama.com/wp-content/uploads/2023/08/Shraddha-Kapoor-keeps-it-cool-in-double-denim-look-featuring-a-bralette-and-patchy-jeans-4.jpg"},
{dp:"https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg",story:"https://editorial01.shutterstock.com/preview-440/10465506f/e05574e5/Shutterstock_10465506f.jpg"},
{dp:"https://cdn.pixabay.com/photo/2018/03/01/14/57/woman-3190852_1280.jpg", story:"https://cdn.pixabay.com/photo/2018/03/01/14/57/fashion-3190854_1280.jpg"}]

var cluter= "";
arr.forEach(function(elem, idx){
     cluter +=`<div class="story">
     <img id ="${idx}" src="${elem.dp}" alt="">
 </div>`;
})

document.querySelector(".storian").innerHTML=cluter;

document.querySelector(".storian").addEventListener("click",function(dets){
      document.querySelector("#fullscreen").style.display="block";
      document.querySelector("#fullscreen").style.backgroundImage=`url(${arr[dets.target.id].story})`;

      setTimeout(function(){
        document.querySelector("#fullscreen").style.display="none"
      },2000)
});





