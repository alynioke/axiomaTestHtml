function submit() {
	var validated = true;
	var textPattern = /([a-zA-Z])+/;
	var name = document.getElementById('name');
	var emailPattern =  /^[a-zA-Z_.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	var email = document.getElementById('email');
	var text = document.getElementById('text');
	var error = document.getElementById('errorMsg');

	if (!textPattern.test(name.value)) {
		name.className += " " + "error";
		validated = false;
	} else {
		name.className = "input";		
	}
	if (!emailPattern.test(email.value)) {
		email.className += " " + "error";
		validated = false;
	} else {
		email.className = "input";		
	}
	if (!textPattern.test(text.value)) {
		text.className += " " + "error";
		validated = false;
	} else {
		text.className = "input";		
	}

	if (validated) {
		error.className = "errorMsg";
		return true;
	}  

	error.className += " " + " visible";
	return false;
	
}