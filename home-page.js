function openNav() {
			    document.getElementById("mySidenav").style.width = "100%";
			    document.getElementById("logo-class").style.display = "inline-block";
			}

function closeNav() {
			    document.getElementById("logo-class").style.display = "none";
			    document.getElementById("mySidenav").style.width = "0";

			}


hashes = window.location.hash.substr(1).split('=')
var access_token = ""
if(hashes.length == 2 && hashes[0] == "access_token") {
	var access_token = hashes[1]
}
var local_url = "http://localhost";

function my_callback(data) {
	console.log('here')
	console.log(data)
}

document.addEventListener("DOMContentLoaded", function(event) { 
	var image_elements = document.getElementsByClassName('insta-image');
	var text_elements = document.getElementsByClassName('insta-text');
	var client_id = '222ac7c245fc479983391faae4bea4f4'
	if(access_token.length == 0) {
		window.location = "https://api.instagram.com/oauth/authorize/?client_id="+client_id+"&redirect_uri="+local_url+"/assignment/home-page&response_type=token&scope=public_content"
		return;
	}
	// var user_id = "1536775167"; // Nitish Jha
	var user_id = "32013577"
	// var url = "https://api.instagram.com/v1/users/"+user_id+"/media/recent?access_token="+access_token;

	var links = [], texts = [];
	$.ajax({
      url: 'https://api.instagram.com/v1/users/'+user_id+'/media/recent/?access_token='+access_token+'&callback=my_callback',

      error: function() {
        alert('error');
      },

      success: function(data) {
      	console.log('there')
      	console.log(data)
       	for(var i=0; i<data.data.length; i++) {
			console.log(data.data[i].images.standard_resolution.url);
		    links.push(data.data[i].images.standard_resolution.url);
		    texts.push(data.data[i].caption.text)
		}
		console.log(links, texts)
		for(var i=0; i<image_elements.length; i++) {
			if(i >= links.length) {
				break;
			}
			image_elements[i].src = links[i];
			text_elements[i].innerHTML = texts[i];
		}
      },
      type: 'GET',
      jsonp: "callback",
      dataType: "JSONP"
   });
});

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }
