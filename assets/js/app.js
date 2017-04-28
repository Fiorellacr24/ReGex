var validar = document.getElementById('validar');

	validar.addEventListener('click',function(){
		
		var	password = document.getElementById('password').value;
		var	confirmPassword = document.getElementById('confirm-password').value;

			if(password != confirmPassword){
				alert("Las contraseñas no coinciden");
			}	
	});	
