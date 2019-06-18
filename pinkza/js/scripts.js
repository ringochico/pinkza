//   $("#p-banner").click(function() {
//   alert("heyyy");
// });


// var $pizza = $('.banner');
// var $win = $(window);

// $win.on('scroll', function () {
//   var top = $win.scrollTop() * 5;
//   $pizza.css('transform', 'rotate(' + top + ' deg)');
//   console.log("hel");
// });


// function to make object spin
var degree = 0;
setInterval(function()
{
  $('.preload img').css({'transform':'rotate('+ degree +'deg)'});
  degree++;
}, 6);

// function get rid of preload
window.addEventListener('load', function () {
  const loader =  document.querySelector('.preload');
  loader.className += " hidden"; // class "loader" then "hidden"
});



// js to create  a simple map
 var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([20.41, 7.50]),
          zoom: 4
        })
      });
