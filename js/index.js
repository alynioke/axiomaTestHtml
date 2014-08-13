$(document).ready(function(){
	$("#send").click(function(){
		// to check how the only server side works, 
		// leave just sendToServerValidate();
		if (validate()) {
			sendToServerValidate();
		}
	});

	$('.another').click(function(){
		$('.successWrapper').hide();
		$("#form").show();
	});

});

function sendToServerValidate() {

	var formData = {
		'name': $("#name").val(),
		'email': $("#email").val(),
		'text': $("#text").val()
	};

	$.ajax({
		dataType:"json",
		// toggle that to 'success.json' and 'fail.json' to simulate different server responses
		url:"js/success.json", 
    	contentType: 'application/json',
		data: JSON.stringify(formData),
		success: function (data) {
			if (data.success) {
				$("#form").hide();
				$(".successWrapper").show();
			} else {
				$(".err").show();
				$.each(data.errorFields, function(key, val) { 
					itemElement = $("#"+key);
					itemElement.attr("class", "input error");
				});
			}
		}

	});
}

function validate() {
	var validated = true;

	var name = $("#name");
	var email = $("#email");
	var text = $("#text");

	var textPattern = /([a-zA-Z])+/;
	var emailPattern =  /^[a-zA-Z_.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

	if (!textPattern.test(name.val())) {
		validated = false;
		name.attr("class", "input error");
	} else {
		name.attr("class", "input");
	}

	if (!textPattern.test(text.val())) {
		validated = false;
		text.attr("class", "input textarea error");
	} else {
		text.attr("class", "input textarea");
	}

	if (!emailPattern.test(email.val())) {
		validated = false;
		email.attr("class", "input error");
	} else {
		email.attr("class", "input");
	}

	if (validated) return true;

	$(".err").show();
	return false;

}