//scripts.js
$(function(){
	console.log('DOM loaded - you can have fun');
});

$(function(){
  var carouselList = $("#carousel ul");  
  setInterval(changeSlide,4000);
  function changeSlide(){ carouselList.animate({marginLeft:-400},500,putFirstSlideAfterLast);
}
function putFirstSlideAfterLast(){
    var last = carouselList.find('li:last');
    var first = carouselList.find('li:first');
    last.after(first);
    carouselList
      .css({marginLeft:0});
  }
  $('#move-left').click(changeSlide);
  $('#move-right').click(function(){
    var last = carouselList.find('li:last');
    var first = carouselList.find('li:first');
    first.before(last);
    carouselList
      .css({marginLeft:-400});
      carouselList.animate({marginLeft:0},500);
      
  }
    
  );
    
});