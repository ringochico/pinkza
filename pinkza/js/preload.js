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
