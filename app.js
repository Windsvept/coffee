$(document).ready(function() {
	//console.log('+++ filename: app.js functionName: jquery.ready expected: no error actual: ', $);
	//attach event listener to button(input?)
	//create function stub for read/write/delete
		//research local storage
	// $().click(function(){

	// });

	$('.store-btn').click(function(event){
		event.preventDefault();
		localStorage.setItem('hrext', "three is the best");
	});
	$('.get-btn').click(function(event){
		event.preventDefault();
		console.log(localStorage.getItem('hrext'));
	});
	$('.delete-btn').click(function(event){
		event.preventDefault();
		localStorage.removeItem('hrext');
	});
});
