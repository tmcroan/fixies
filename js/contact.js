 // validate email before allowing submit
function validateEmail(email) { 
		var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return reg.test(email);
	}

	$(document).ready(function() {
		$(".modalbox").fancybox();
		$("#contact").submit(function() { return false; });

		
		$("#send").on("click", function(){
			var emailval  = $("#email").val();
			var msgval    = $("#msg").val();
			var msglen    = msgval.length;
			var mailvalid = validateEmail(emailval);
			
            //errortag if they have invalid email credentials
			if(mailvalid == false) {
				$("#email").addClass("error");
			}
            // if not validate
			else if(mailvalid == true){
				$("#email").removeClass("error");
			}
            // errortag if msg shorter than 4 chars
			if(msglen < 4) {
				$("#msg").addClass("error");
			}
            // if not validate
			else if(msglen >= 4){
				$("#msg").removeClass("error");
			}
			
			if(mailvalid == true && msglen >= 4) {
				// if both validate send the e-mail
				// first hide the submit btn so the user doesnt click twice
				$("#send").replaceWith("<em>sending...</em>");
				
				$.ajax({
					type: 'POST',
					url: 'sendmessage.php',
					data: $("#contact").serialize(),
					success: function(data) {
						if(data == "true") {
							$("#contact").fadeOut("fast", function(){
								$(this).before("<p><strong>Success! Your feedback has been sent, thanks  -Fixies :)</strong></p>");
								setTimeout("$.fancybox.close()", 1000);
							});
						}
					}
				});
			}
		});
	});
