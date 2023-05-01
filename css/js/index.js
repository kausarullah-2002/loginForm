function signup() {
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;
  
  // Save the user information to local storage
  localStorage.setItem("password", password);
  localStorage.setItem("email", email);
  
  alert(  `Your Email is "${email}" \n Your Password is "${password}" \n Signup Succesfully! `);
}

function login() {
  var password = document.getElementById("pass").value;
  var email = document.getElementById("ema").value;
  
  // Retrieve the saved user information from local storage
  var savedPassword = localStorage.getItem("password");
  var savedEmail = localStorage.getItem("email");
  
  // Check if the entered information matches the saved information
  if (password === savedPassword && email === savedEmail) {
      alert("Login successful!");
  } else {
      alert("Incorrect  Email or Password  entered");
  }
}