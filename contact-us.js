function openNav() {
			    document.getElementById("mySidenav").style.width = "100%";
			}

function closeNav() {
			    document.getElementById("mySidenav").style.width = "0";
			}


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function errorMessageFadeIn(element) {
    element.style.height = "30px";
    element.style.paddingTop = "6px";
}
function errorMessageFadeOut(element) {
    element.style.height = "0px";
    element.style.paddingTop = "0px";
}

window.addEventListener('load',function(){
var sendButton = document.getElementById("post-button");
var emailInputBox = document.getElementById("response-email-input");

var validFirstName = true;
var validLastName =true;
var validEmail = true;
var validComment =true;




if (emailInputBox != null) {
        emailInputBox.addEventListener("keyup",function(e){
            var emailId = this.value;
                if (emailId.length > 0 && !validateEmail(emailId)) {
                    this.style.color = "red";
                }
                else{
                    this.style.color = "black";
                }
            });
}


if (sendButton != null) {
	sendButton.addEventListener("click",function(e){

		var firstNameInput = document.getElementById("response-first-name-input");
		var lastNameInput = document.getElementById("response-last-name-input");
		var emailInput = document.getElementById("response-email-input");
		var mobileInput = document.getElementById("response-mobile-input");
		var commentInput = document.getElementById("response-comment-text-area");

		if (emailInput !== null && firstNameInput !== null && commentInput !== null && lastNameInput !== null && mobileInput !== null) { 
              
                var comment = commentInput.value.trim();
                var email = emailInput.value.trim();
                var firstName = firstNameInput.value.trim();
                var lastName = lastNameInput.value.trim();

                var firstNameError = document.getElementById("response-first-name-error-message");
				var lastNameError = document.getElementById("response-last-name-error-message");
				var emailError = document.getElementById("response-email-error-message");
				var commentError = document.getElementById("response-comment-error-message");


                if (firstName.length == 0) {
                    errorMessageFadeIn(firstNameError);
                    validComment = false;

                }else{
                	errorMessageFadeOut(firstNameError);
                }

                if (lastName.length == 0) {
                    errorMessageFadeIn(lastNameError);
                    validComment = false;
                }else{
                	errorMessageFadeOut(lastNameError);
                }

                if (email.length == 0 || !validateEmail(email)) {
                    errorMessageFadeIn(emailError);
                    validEmail = false;
                }
                else{
                    errorMessageFadeOut(emailError);
                }

                if (comment.length == 0) {
                    errorMessageFadeIn(commentError);
                    validComment = false;
                }else{
                	errorMessageFadeOut(commentError);
                }
                if(validComment && validEmail && validFirstName && validLastName){
                	document.getElementById("valid-submit").style.display = "block";
                	document.getElementById("input-div").style.display = "none";
                	document.getElementById("invalid-submit").style.display = "none";
                	document.getElementById("post-button").style.display = "none";

                }else{
                	document.getElementById("invalid-submit").style.display = "block";
                	document.getElementById("valid-submit").style.display = "none";
                }

		}

	});
}




});