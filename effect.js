$(window).load(function () {
	$('.loading').fadeIn('linear');
	//$('.countdown').slideDown(1000);
	$('.countdown').fadeIn('linear');
	$('.welcome').fadeIn('linear');
	//$('.container-fluid').fadeOut('linear');
});
$('document').ready(function () {

	var end = new Date('04/14/2022 10:0 AM');

	var _second = 1000;
	var _minute = _second * 60;
	var _hour = _minute * 60;
	var _day = _hour * 24;
	var timer;

	function showRemaining() {
		var now = new Date();
		var distance = end - now;
		if (distance < 0) {

			clearInterval(timer);
			document.getElementById('countdown').innerHTML = 'Ceremony has concluded!!';

			return;
		}
		var days = Math.floor(distance / _day);
		var hours = Math.floor((distance % _day) / _hour);
		var minutes = Math.floor((distance % _hour) / _minute);
		var seconds = Math.floor((distance % _minute) / _second);

		document.getElementById('countdown').innerHTML = days + ' days remaining to celebrate...';
		// document.getElementById('countdown').innerHTML += hours + 'hrs ';
		// document.getElementById('countdown').innerHTML += minutes + 'mins ';
		// document.getElementById('countdown').innerHTML += seconds + 'secs';
	}

	timer = setInterval(showRemaining, 0);

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
		// $('.countdown').css("margin-top","0rem");
		$('.countdown').slideUp(2000);
		//$('.loading').slideUp(1000);
		$('.loading').fadeOut('linear');
		$('.welcome').fadeOut('linear');
		//$('.welcome').fadeOut('linear');
		//$('.container').slideDown(2000);
		//$('.countdown').fadeIn('linear');
	}, 3000);

	setInterval(function () {
		//$('.welcome').fadeOut('linear');
		$('.container').slideDown(3000);
	}, 4000);


});




//alert('hello');