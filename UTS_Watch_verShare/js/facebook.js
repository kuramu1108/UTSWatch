
		// This is called with the results from from FB.getLoginStatus().

		function statusChangeCallback(response) {
			console.log('statusChangeCallback');
			console.log(response);
			// The response object is returned with a status field that lets the
			// app know the current login status of the person.
			// Full docs on the response object can be found in the documentation
			// for FB.getLoginStatus().
			if (response.status === 'connected') {
				// Logged into your app and Facebook.
				testAPI();
			} else if (response.status === 'not_authorized') {
				// The person is logged into Facebook, but not your app.

			} else {
				// The person is not logged into Facebook, so we're not sure if
				// they are logged into this app or not.

			}
		}

		// This function is called when someone finishes with the Login
		// Button.  See the onlogin handler attached to it in the sample
		// code below.
		function checkLoginState() {
			FB.getLoginStatus(function(response) {
				statusChangeCallback(response);
			});
		}

		window.fbAsyncInit = function() {
			FB.init({
				appId : '176702445997663',
				cookie : true, // enable cookies to allow the server to access 
				// the session
				xfbml : true, // parse social plugins on this page
				version : 'v2.2' // use version 2.2
			});

			// Now that we've initialized the JavaScript SDK, we call 
			// FB.getLoginStatus().  This function gets the state of the
			// person visiting this page and can return one of three states to
			// the callback you provide.  They can be:
			//
			// 1. Logged into your app ('connected')
			// 2. Logged into Facebook, but not your app ('not_authorized')
			// 3. Not logged into Facebook and can't tell if they are logged into
			//    your app or not.
			//
			// These three cases are handled in the callback function.

			FB.getLoginStatus(function(response) {
				accessToken = response.authResponse.accessToken;
				statusChangeCallback(response);
			});

		};

		// Load the SDK asynchronously
		(function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id))
				return;
			js = d.createElement(s);
			js.id = id;
			js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.4";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

		// Here we run a very simple test of the Graph API after login is
		// successful.  See statusChangeCallback() for when this call is made.
		function testAPI() {
			FB.api('/me', function(response) {
				//Lets refresh other xomponents regarding dat info yoyo
				document.getElementById('fb_name').innerHTML = 'Welcome, '
						+ response.name;
				document.getElementById('login_b').innerHTML = response.name;
				document.getElementById('logout').innerHTML = 'Logout';

			});

		}

		//DON'T TOUCH

		function getFBIMG() {
			FB.api('/me', function(response) {
				fbinfo = new Array();
				fbinfo[0] = response.id;
				fbinfo[1] = response.first_name;
				fbinfo[2] = response.last_name;
				fbinfo[3] = response.email;
			});
		}
		//DON'T TOUCH

		function logout() {
			FB.logout(function(response) {
				// logged out yo
				//now let's refresh that shit:
				location.reload();
				//byebye
			});
		}

		function makePost() {
			FB
					.ui(
							{
								method : 'feed',
								link : 'http://internship4.me/index.html',
								caption : 'UTS WatchMiniFAB - future of watch creating is here.',
							}, function(response) {
							});
		}

		//ATTEMPT TO SAVE CANVAS AS PNG AND THAN SHARE IT VIA FACEBOOK
		$(function() {
			$("#watchSave").click(function() {
				html2canvas($("#WebGLcanvas"), {
					onrendered : function(canvas) {
						theCanvas = canvas;
						canvas.toBlob(function(blob) {
							saveAs(blob, 'saveWatch.png');
						});
					}
				});
			});
		});
