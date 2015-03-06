HTMLFormElement.prototype.validate = function(){
	var errors = [];

	var validator = {
		required : function(value) {
			return value !== undefined &&
				   value !== null &&
				   !/^\s+$/.test(value);
		},
		email: function(value) {
			return /^\w([\w.\-]*\w)?@[a-zA-Z0-9]([\w.\-]*\w)?\.[a-zA-Z]{2,3}$/.test(value);
		}
	};

	var required = this.querySelectorAll('.required');
	var emails   = this.querySelectorAll('.email');

	var validateForm = function() {
		for(var i = 0; i < required.length; i++) {
			var input = required.item(i);

			if (input.type === 'checkbox' && !input.checked) {
				errors.push(input.name + ' es requerido');
			} else if (input.type === 'password') {
				if (!validator.password(input.value)) {
					errors.push(input.name + ' es requerido');
				}
			} else {
				if (!validator.required(input.value)) {
					errors.push(input.name + ' es requerido');
				}
			}
		}

		for(i = 0; i < emails.length; i++) {
			var email = emails.item(i);

			if (!validator.email(email.value)) {
				errors.push(email.name + ' no es un email válido.');
			}
		}

		if (errors.length) {
			e.preventDefault();
			alert(errors.join('\n'));
		}
	};

	var showError = function() {
		//alert(errors.join('\n'));
	};

	this.addEventListener('submit', validateForm, false);
};