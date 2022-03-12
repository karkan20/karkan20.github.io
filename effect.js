$(window).load(function () {
	$('.loading').fadeIn('linear');
	//$('.countdown').slideDown(1000);
	$('.countdown').fadeIn('linear');
	$('.welcome').fadeIn('linear');
	//$('.container-fluid').fadeOut('linear');
});
$('document').ready(function () {

	function showRemaining() {
		//console.log(new Date().toLocaleDateString(undefined, {day:'2-digit',timeZoneName: 'long' }).substring(4));
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

	function setDayTimeAsPerTimeZone() {

		var date = new Date().getTimezoneOffset();
		var autodate = new Date(Date.UTC(2022, 3, 14, 4, 30)); //
		
		var acutaldate = new Date(autodate);
		var actual_day = acutaldate.getDate(); //Date of the month: 2 in our example
		// var actual_month = acutaldate.getMonth(); //Month of the Year: 0-based index, so 1 in our example
		// var actual_year = acutaldate.getFullYear() //Year: 2013
		var actual_hours = acutaldate.getHours();
		var actual_minutes = acutaldate.getMinutes();

		const ampm = actual_hours >= 12 ? 'pm' : 'am';

		actual_hours %= 12;
		actual_hours = actual_hours || 12;
		actual_minutes = actual_minutes < 10 ? `0${actual_minutes}` : actual_minutes;
		//console.log(new Date().toLocaleDateString(undefined, {day:'2-digit',timeZoneName: 'long' }).substring(4));
		const strTime = `${actual_hours}:${actual_minutes} ${ampm}`;
		console.log("Time: " + strTime)
		document.getElementById('date').innerHTML = actual_day +"th"+" April 2022";
		document.getElementById('time').innerHTML = strTime;
		///console.log("Time " + actual_hours + ":" + actual_minutes)
	}

	showRemaining();
	setDayTimeAsPerTimeZone();

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
