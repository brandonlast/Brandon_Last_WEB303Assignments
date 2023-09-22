/*
	WEB 303 Assignment 1 - jQuery
	{Brandon Last}
*/

$(document).ready(function() {
	//Event Handler
	$('#salary, #percent').keyup(function() {
		//the difference between change and keyup, is for keyup, the second a key is let go it updates, but for change you have to click off and onto something else.
		//calculate amouint you can spend on tech
		var salary = parseFloat($('#yearly-salary').val());
		var percent = parseFloat($('#percent').val());
		var amount = (salary * percent) / 100;
		
		//make 2 decimal points
		$('#amount').text('$' + amount.toFixed(2));
	});
	
});