$(document).ready(function(e) {
	//alert("Listo!!")
	document.addEventListener("deviceready", function(){
		$(".btn").tap (function(){
			var boton=(($(this).attr("class")).split (' '))[1];
			switch (boton)
			{
				case 'b1':
				navigator.notipication.beep(1);
				break;
				case 'b2':
				navigator.notipication.beep(2);
				break;
				case 'b3':
				navigator.notipication.beep(5);
				break;
				case 'v1':
				navigator.notipication.vibrate(500);
				break;
				case 'v2':
				navigator.notipication.vibrate(500);
				navigator.notipication.vibrate(500);
				break;
			}	
			
			
			$('table td').eq(1).text(divice.name);
			$('table td').eq(3).text(divice.cordova);
			$('table td').eq(5).text(divice.platform);
			$('table td').eq(7).text(divice.version);
			$('table td').eq(9).text(divice.uuid);
			
			
			
			
			$('#derecha').swiperight(function(){
				navigator.notification.alert("deslizó a la derecha", function(){},"Practica 1", "Aceptar");
				
			});
		});		
	
}, false);
	});
	