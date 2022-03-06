$(window).load(function () {
	$('.loading').fadeIn('linear');
	//$('.countdown').slideDown(1000);
	$('.countdown').fadeIn('linear');
	$('.welcome').fadeIn('linear');
	//$('.container-fluid').fadeOut('linear');
});
$('document').ready(function () {

	function showRemaining() {
		var now = new Date();
		var end = new Date('04/14/2022 10:0 AM');
		var distance = end - now;
		var _second = 1000;
		var _minute = _second * 60;
		var _hour = _minute * 60;
		var _day = _hour * 24;
		if (distance < 0) {
			document.getElementById('countdown').innerHTML = 'Ceremony has concluded!!';
			return;
		}
		var days = Math.floor(distance / _day);
		document.getElementById('countdown').innerHTML = days + ' days remaining to celebrate...';
	}

	showRemaining();

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
		$('.countdown').slideUp(2000);
		$('.loading').fadeOut('linear');
		$('.welcome').fadeOut('linear');
	}, 3000);

	setInterval(function () {
		$('.container').slideDown(3000);
	}, 4000);

});
