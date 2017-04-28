window.addEventListener('load',function(event){
	event.preventDefault();

	var validar = document.getElementById('validar');

		validar.addEventListener('click',function(){
			
			var	dni = document.getElementById('dni').value;
			var	celphone = document.getElementById('celphone').value;
			var	number = document.getElementById('number').value;
			var	password = document.getElementById('password').value;
			var	confirmPassword = document.getElementById('confirm-password').value;
			var	terms = document.getElementById('terms').value;

			if(dni == null || dni.length == 0 || ( !(/^\d{8}$/.test(dni)))){
				alert("Ingrese correctamente su DNI")
			}else if(celphone == null || celphone.length == 0 || ( !(/^\d{9}$/.test(celphone))) ){
				alert("Ingrese correctamente su # de Celular")
			}else if(number == null || number.length == 0 || ( !(/^\d{7}$/.test(number))) ){
				alert("Ingrese su # Fijo")
			}else if(password == null || password=="" ||  !(/.{6,25}/.test(password))){
				alert("Ingrese su contraseña")
			}else if(password != confirmPassword){
				alert("Las contraseñas no coinciden")
			}else if(!terms.checked){
				alert("Acepte los términos y condiciones")
			}
		});
});