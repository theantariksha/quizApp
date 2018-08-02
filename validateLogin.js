function validateLogin() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	document.getElementById("errormsg").innerHTML=username+password+"XYZ";
	if(typeof(Storage) !== "undefined"){
		localStorage.setItem("userid", "I351610");
		localStorage.setItem("pass", "1cemag");
			if(username === "undefined" || username.trim()==="" || (localStorage.getItem("userid") !== username) )
			{
				document.getElementById("errormsg").innerHTML="Invalid Username";
				document.getElementById("username").focus();
				return false;
			}
			if(password === "undefined" || password.trim()==="" || (localStorage.getItem("pass") !== password))
			{
				document.getElementById("errormsg").innerHTML="Invalid Password";
				document.getElementById("password").focus();
				return false;
			}
			return true;
	}
}