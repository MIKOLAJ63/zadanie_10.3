//scripts.js
$(function(){
	console.log('DOM loaded - you can have fun');
});

$(function(){
	var carouselList = $("#carousel ul");
  setInterval(changeSlide, 4000); 
  function changeSlide() {
    carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
  };
  changeSlide();
  function moveFirstSlide() {
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem);
    carouselList.css({marginLeft:0});
  };  
});

$('#move-left').on('click', function(){
		var $last = $('#carousel li:last');
		$last.remove().css({ 'margin-left': '0px' });
		$('#carousel  ul:first').before($last);
		$last.animate({ 'margin-left': '0px' }, 500);
	});

	$('#move-right').on('click', function(){
		var $first = $('#carousel li:first');
		$first.animate({ 'margin-left': '-400px' }, 500, function() {
			$first.remove().css({ 'margin-left': '0px' });
			$('#carousel ul:last').after($first);
		});
	});