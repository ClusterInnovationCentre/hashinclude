// Re-enable the below code for typind animation.

/*$( document ).ready(function()
{
	$("#typed-title").typed(
	{
		strings: ["hash^1000", "#include"],
		typeSpeed: 0
	});
});*/

// Code for pulling down elements. Not needed now.

/*!function ($) { //ensure $ always references jQuery
	$(function () { //when dom has finished loading
		//make top text appear aligned to bottom: http://stackoverflow.com/questions/13841387/how-do-i-bottom-align-grid-elements-in-bootstrap-fluid-layout
		function fixHeader() {
			//for each element that is classed as 'pull-down'
			//reset margin-top for all pull down items
			$('.pull-down').each(function () {
				$(this).css('margin-top', 0);
			});

			//set its margin-top to the difference between its own height and the height of its parent
			$('.pull-down').each(function () {
				if ($(window).innerWidth() >= 768) {
					$(this).css('margin-top', $(this).parent().height() - $(this).height());
				}
			});
		}

		$(window).resize(function () {
			fixHeader();
		});

		fixHeader();
	});
}(window.jQuery);
*/

hello.init({
	facebook: '1634502443492240',
	google: '615042929237-ephb8jem6h6q8vf83e6d0db50qi2dmrs.apps.googleusercontent.com',
	github: 'cdbd672cb7a4de29c76b',
	windows: '000000004C168A78'
});

hello.logout();
hello.on('auth.login', function(auth) {

	// TODO - Implement error handling while OAuth login.
	
	
	// Call user information, for the given network
	hello(auth.network).api('/me').then(function(r) {

		console.log("Network: " + auth.network + ", " + "User: " + r.name + ", " + "E-Mail: " + r.email + ", " + "Response dump: " + JSON.stringify(r) );

		// Posting to the sheetsu API.
		$.get("https://sheetsu.com/apis/ba75adb2",
			function( data ){
				if(data.status === 200 && data.success === true)
				{
					console.log(data.result);
					if(($.grep(data.result, function(e){ return e.network === auth.network && e.name === r.name })).length === 0)
					{
						$.ajax({
							url: 'https://sheetsu.com/apis/ba75adb2',
							type: 'post',
							data: {
								name: r.name,
								network: auth.network,
								course: "ITMI",
								year: 3,
								response_dump: JSON.stringify(r)
							},
							dataType: 'json',
							success: function(response) {
								console.log(data);


							}

						});
					}
					else
					{
						alert("User already registered.");
						// TODO - Implement showing previous registration.
					}
				}
				else
				{
					alert("Unknown error occurred.");
					console.log(data);
					// TODO - Implement error showing while connecting to the API.
				}
			})
	});

	//TODO - Handle Error
});

$(document).ready( function(){
	$(".cb-enable").click(function(){
		var parent = $(this).parents('.switch');
		$('.cb-disable',parent).removeClass('selected');
		$(this).addClass('selected');
		$('.checkbox',parent).attr('checked', true);
	});
	$(".cb-disable").click(function(){
		var parent = $(this).parents('.switch');
		$('.cb-enable',parent).removeClass('selected');
		$(this).addClass('selected');
		$('.checkbox',parent).attr('checked', false);
	});
});
