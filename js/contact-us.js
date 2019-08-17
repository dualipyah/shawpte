
jQuery(document).ready(function($){
	//check cookie
	checkCookie();
	function checkCookie(){
	  var demographics_referrer = document.referrer;
	  getCookie(demographics_referrer);
	  if (demographics_referrer != "") {
//		alert("Welcome again " + demographics_referrer);
		  console.log(demographics_referrer);
	  } else {
		 setCookie("demographics", demographics_referrer, 2);
		 
	  }
	}
	
	function setCookie(cname,cvalue,hours) {
	  var d = new Date();
	  d.setTime(d.getTime() + (hours * 60 * 60 * 1000));
	  var expires = "expires=" + d.toGMTString();
	  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
		console.log(document.cooke);
	}

	function getCookie(cname) {
	  var name = cname + "=";
	  var decodedCookie = decodeURIComponent(document.cookie);
	  var ca = decodedCookie.split(';');
	  for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
		  c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
		  return c.substring(name.length, c.length);
		}
	  }
	  return "";
	}
	
	var starting_number_exp = /^([3,6,8,9])([0-9]{7})$/g;
	
	//Add max length attribute for name
   $("#full-name").attr('maxlength','15');
	//Display number of characters inputed
 	$('#full-name').keydown(updateCount);
   $("#contact-number").attr('maxlength','8');
	//Validate if SG Number
	

	$("#contact-number").keypress(function(evt){
		evt = (evt) ? evt : window.event;
		var charCode = (evt.which) ? evt.which : evt.keyCode;
		if (charCode > 31 && (charCode < 48 || charCode > 57)) {
			return false;
		}
		return true;


	});
	
	$("#contact-number").keyup(function(event){
		var contact_number = $("#contact-number").val();
		if(contact_number.match(starting_number_exp)){
		   	$(".contact-msg").html("Valid SG Number");
			$("#sendmail").attr("disabled", false);
			return true;
		}
			$(".contact-msg").html("Invalid SG Number");
		 	$("#sendmail").attr("disabled", true);
			return false;
		
	});


	
	function updateCount() {
		var cs =  "Characters :" + $(this).val().length;
		$('.name-counter').text(cs);
	}
	
	$('.wpcf7-form').submit(function() {
		//alert ("submitting");
		var checkCN = $('#contact-number').val();
		
		console.log (checkCN);

		
	});	
	
});