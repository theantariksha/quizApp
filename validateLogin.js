function validateLogin() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	document.getElementById("errormsg").innerHTML=username+password+"XYZ";
	if(typeof(Storage) !== "undefined")
	{
		if(username === "undefined" || username.trim()==="" || (localStorage.getItem(username) === null) )
		{
			document.getElementById("errormsg").innerHTML="Invalid Username";
			document.getElementById("username").focus();
			return false;
		}
		if(password === "undefined" || password.trim()==="" || (localStorage.getItem(username) !== password))
		{
			document.getElementById("errormsg").innerHTML="Invalid Password";
			document.getElementById("password").focus();
			return false;
		}
		return true;
	}
}