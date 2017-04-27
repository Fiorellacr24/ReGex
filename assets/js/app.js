var nombre, apellido, cumpleaños, celular, fijo, contraseña, comentarios, terminos; 
		name = document.getElementById('name').value;
		lastname = document.getElementById('lastname').value;
		birthday = document.getElementById('birthday').value;
		celphone = document.getElementById('celphone').value;
		number = document.getElementById('number').value;
		password = document.getElementById('password').value;
		confirmPassword = document.getElementById('confirm-password').value;
		comments = document.getElementById('comments').value;
		terms = document.getElementById('terms').value;

function vpassword(){
	if(password.value != confirmPassword.value){
		confirmPassword.setCustomValidity('Las contraseñas no coinciden');
	} else{
		confirmPassword.setCustomValidity('');
	}

password.onchange = vpassword;
password.onkeyup = vpassword;
