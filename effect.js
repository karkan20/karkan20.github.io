$(window).load(function () {
	$('.loading').fadeIn('linear');
 	//$('.container-fluid').fadeOut('linear');
});
$('document').ready(function () {

	$('#bulb_yellow').addClass('bulb-glow-yellow');
	$('#bulb_red').addClass('bulb-glow-red');
	$('#bulb_blue').addClass('bulb-glow-blue');
	$('#bulb_green').addClass('bulb-glow-green');
	$('#bulb_pink').addClass('bulb-glow-pink');
	$('#bulb_orange').addClass('bulb-glow-orange');
	$('body').css('background-color', 'black');

	setInterval(function () {
		$('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('background-color', 'peachpuff');
		$('.loading').fadeOut('linear');
		$('.container').fadeIn('linear');
	}, 3000);
	
});




//alert('hello');