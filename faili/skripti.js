var parb_epasts = false; var parb_vards = false; var parb_uzvards = false; var parb_parole = false; var parb_parole2 = false; var parb_talrunis = false; var login_epasts = false; var login_parole = false;
$(document).ready(function(){
$(document).scroll(function(e){
    var scrollTop = $(document).scrollTop();
    if(scrollTop > 301){
        console.log(scrollTop);
        $('.navbar').removeClass('navbar-static-top').addClass('navbar-fixed-top');
    } else {
        $('.navbar').removeClass('navbar-fixed-top').addClass('navbar-static-top');
    }
});



$("#error").hide();
$("#error1").hide();
$("#error2").hide();
$("#error3").hide();	 
  		$("#read").keyup(function(e){
		if($("#read").val() == "patīk"){
  			$("#error1").show();
			$("#error").hide();
			}
			else{
			$("#error1").hide();
  			$("#error").show();
			}
  		});
		
		$("#read1").keyup(function() {
					var nosauk = $(this).val();
					if (nosauk == "" || nosauk.split(' ').length > 1) {
                        $(this).addClass("Ievade");
                        $("#error2").hide();
                    } else {
					$("#error2").show();
					}
				});
				
		$("#read2").keyup(function() {
					var numurs = $(this).val();
					if (numurs == "" || !$.isNumeric(numurs) || numurs.length != 8) {
						$(this).addClass("Ievade");
                        $("#error3").hide();
					} else {
						$(this).removeClass("Ievade");
						$("#error3").show();
					}
				});

				
var myCenter=new google.maps.LatLng(56.935940, 23.325154);

function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:12,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter,
  });

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);


	$("#iev_epasts").focusout(function() {
		var epasts = $(this).val();
		if (epasts == "" || epasts.split('@').length != 2 || epasts.length < 5) {
			parb_epasts = false;
			window.alert("Ievadiet pareizu e-pastu");
		} else {
			parb_epasts = true;
		}
	});
	$("#iev_vards").focusout(function() {
		var vards = $(this).val();
		if (vards == "" || vards.split(' ').length > 1) {
			parb_vards = false;
			window.alert("Ievadiet vārdu");
		} else {
			parb_vards = true;
		}
	});
	$("#iev_uzvards").focusout(function() {
		var uzvards = $(this).val();
		if (uzvards == "" || uzvards.split(' ').length > 1) {
			parb_uzvards = false;
			window.alert("Ievadiet uzvārdu");
		} else {
			parb_uzvards = true;
		}
	});
	$("#iev_parole").focusout(function() {
		if ($(this).val() == "" || $(this).val().length < 6) {
			parb_parole = false;
			window.alert("Ievadiet paroli garāku par 6 rakstzīmēm");
		} else {
			parb_parole = true;
		}
	});
	$("#iev_parole2").focusout(function() {
		if ($("#iev_parole").val() != $ ("#iev_parole2").val()) {
			parb_parole2 = false;
			window.alert("Nepareizi ievadīta atkārtota parole");
		} else {
			parb_parole2 = true;
		}
	});
	$("#iev_talrunis").focusout(function() {
		var talruniss = $(this).val();
		if (talruniss == "" || !$.isNumeric(talruniss)|| talruniss.length != 8) {
			parb_talrunis = false;
			window.alert("Ievadiet tālruni");
		} else {
			parb_talrunis = true;
		}
	});
	
	
	
	$("#log_epasts").focusout(function() {
		var lepasts = "admin@admin.com";
		if ($("#log_epasts").val() != lepasts) {
			login_epasts = false;
			window.alert("Nepareizs epasts(pareizais: admin@admin.com)")
		} else {
			login_epasts = true;
		}
	});
	
	$("#log_parole").focusout(function() {
		var lparole = "admin";
		if ($("#log_parole").val() != lparole) {
			login_parole = false;
			window.alert("Nepareiza parole(pareizā: admin)");
		} else {
			login_parole = true;
		}
	});
	
	});

	function pieslegsanas() {
	$("#pieslogs").modal("toggle");
}

function registracija() {
	$("#pieslogs").modal("toggle");
	$("#reglogs").modal("toggle");
}

		function registracijaspoga() { 
			if (parb_epasts && parb_vards && parb_uzvards && parb_parole && parb_parole2 && parb_talrunis) {    
				window.alert("Jūs tikāt piereģistrēts");
			} else {
				window.alert("Pārbaudiet visus informācijas laukus");
	}
}
		function ielogosanaspoga() {   
				if (login_epasts && login_parole) {    
				window.alert("Jūs tikāt piereģistrēts");
			} else {
				window.alert("Pārbaudiet visus informācijas laukus");
	}

}
	$('.fancybox').fancybox();
	
	$(".fancybox-a").fancybox({
				padding: 0,

				openEffect : 'elastic',
				openSpeed  : 150,

				closeEffect : 'elastic',
				closeSpeed  : 150,

				closeClick : true,

				helpers : {
					overlay : null
				}
			});
			
	$(".fancybox-b").fancybox({
				openEffect  : 'none',
				closeEffect	: 'none',

				helpers : {
					title : {
						type : 'over'
					}
				}
			});
			
