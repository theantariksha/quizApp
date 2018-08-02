function validateSignUp() {
	var username = document.getElementById("username").value;
	var password1 = document.getElementById("password1").value;
	var password2 = document.getElementById("password2").value;
	document.getElementById("errormsg").innerHTML=username+password1+"XYZ";
	if(typeof(Storage) !== "undefined")
	{
		/*check for undefined or empty entries*/
		if(username === "undefined" || username.trim() === "")
		{
			document.getElementById("errormsg").innerHTML="Invalid Username";
			document.getElementById("username").focus();
			return false;
		}
		if(password1 === "undefined" || password1.trim() === "")
		{
			document.getElementById("errormsg").innerHTML="Invalid Password";
			document.getElementById("password1").focus();
			return false;
		}
		if(password2 === "undefined" || password2.trim() === "")
		{
			document.getElementById("errormsg").innerHTML="Invalid Password";
			document.getElementById("password2").focus();
			return false;
		}
		/*check if username already exists*/	
		if(localStorage.getItem(username) !== null)
		{
			document.getElementById("errormsg").innerHTML="Username already exists!";
			document.getElementById("username").focus();
			return false;
		}
		/*check if passwords match*/
		if(password1 !== password2)
		{
			document.getElementById("errormsg").innerHTML="Passwords do not match!";
			document.getElementById("password1").focus();
			return false;
		}
		/*everything looks good, add new entry*/
		localStorage.setItem(username, password1);
		document.getElementById("errormsg").innerHTML="Successfully registered. Redirecting to login page in 5 seconds...";
		alert("User "+username+" registered successfully.");
		for(var i=0; i < 10000; i+=1)
		{
			;
		}
		return true;
	}
}