$(function() {
    $('#nav-search-select').change(function() {
      var selectedText = $(this).find('option:selected').text();
      $('#nav-search').find('.nav-search-label').html(selectedText);
    });
  });
  
function loadpopup(){
  document.getElementById('loadpopup').style.visibility = 'visible';
}
function closepopup(){
    document.getElementById('loadpopup').style.visibility = 'hidden';
    document.body.style.overflowY = 'scroll';
}










var switchmode = document.querySelector('.theme');
var body = document.querySelector('body');

switchmode.onclick = function(){
  this.classList.toggle('themechange');
  body.classList.toggle('dark');
}



$('document').ready(function(){

// slider
$('.responsive').slick({
  dots: true,
  infinite: true,
  arrow:true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// Drop down menu
$('.nav-element .dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});


//Mute and Unmute Video code
$(".sound").click(function(){
  $('img',this).toggle();

  if( $("#bgvid").prop('muted') ) {
          $("#bgvid").prop('muted', false);
    } else {
      $("#bgvid").prop('muted', true);
    }
});


// Video play and pause button
$('.moreinfo').click(function(){
  $('#bgvid').trigger('pause');
  
})
$('.btn-close').click(function(){
  $('#bgvid').trigger('play');
})


})
let x = document.getElementById('out');
let y = document.getElementById('weatherOut');
function geolocation(){
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showPosition)  
    }
    else
    {
        x.innerText = "Geo Not Supported"    
    }
}
function showPosition(data){
    console.log(data)
    let lat = data.coords.latitude;
    let long = data.coords.longitude;
    let y = document.getElementById('weatherOut');
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    //api calling
    fetch(url,{method: 'GET'})
    // return promise
    .then((res) => res.json())
    // resolve promise
    .then((data) => {
        console.log(data)
        let cityName = data.city.name;
        let temp = data.list[0].temp.day;
        y.innerText = `City : ${cityName} \n Temperature : ${temp} °C`
    })
    .catch((err) => {
        console.log(err)
    })
}