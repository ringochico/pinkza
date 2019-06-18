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
}, 6)

// function get rid of preload
window.addEventListener('load', () => {
  const preloader =  document.querySelector('.preload');
  preload.classList.add('preload-finish');

});

