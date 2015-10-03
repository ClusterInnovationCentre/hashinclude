/*$( document ).ready(function()
{
	$("#typed-title").typed(
	{
		strings: ["hash^1000", "#include"],
		typeSpeed: 0
	});
});*/
!function ($) { //ensure $ always references jQuery
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


hello.init({
    facebook: '1634502443492240',
    google: '615042929237-ephb8jem6h6q8vf83e6d0db50qi2dmrs.apps.googleusercontent.com',
    github: 'cdbd672cb7a4de29c76b',
    windows: '000000004C168A78'
});
hello.logout();
hello.on('auth.login', function(auth) {

    // Call user information, for the given network
    hello(auth.network).api('/me').then(function(r) {
        // Inject it into the container
/*        var label = document.getElementById('profile_' + auth.network);
        if (!label) {
            label = document.createElement('div');
            label.id = 'profile_' + auth.network;
            document.getElementById('profile').appendChild(label);
        }
        label.innerHTML = '<img src="' + r.thumbnail + '" /> Hey ' + r.name;*/
        console.log("Network: " + auth.network + ", " + "User: " + r.name + ", " + "E-Mail: " + JSON.stringify(r) );

        //TODO - Implement posting to the sheetsu API.
    });

    //TODO - Handle Error
});