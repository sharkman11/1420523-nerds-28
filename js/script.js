var link = document.querySelector(".button-contacts");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var user = popup.querySelector("[name=user]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");
var isStorageUserSupport = true;
var isStorageEmailSupport = true;
var storage_user = "";
var storage_email = "";

try {
	storage_user = localStorage.getItem("user");
} catch (err) {
	isStorageUserSupport = false;
}

try {
	storage_email = localStorage.getItem("email");
} catch (err) {
	isStorageEmailSupport = false;
}

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");

	if (storage_user) {
		user.value = storage_user;
		email.focus();
	} else {
		user.focus();
	}
});

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");

	if (storage_email) {
		email.value = storage_email;
		message.focus();
	} else {
		email.focus();
	}
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
	if (!user.value || !email.value || !message.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	}	else {
		if (isStorageUserSupport) {
   		localStorage.setItem("user", user.value);
		}
		if (isStorageEmailSupport) {
   		localStorage.setItem("email", email.value);
		}
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (popup.classList.contains("modal-show")) {
			evt.preventDefault();
	   	popup.classList.remove("modal-show");
	   	popup.classList.remove("modal-error");
	  }
	}
});
