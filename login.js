function validateLogin(event) {
    event.preventDefault();  // Prevent the form from reloading the page
  
    let errorMessage = document.getElementById("error");
    errorMessage.innerHTML = "";  // Clear any previous error messages
  
    let usernameInput = document.getElementById("useremail").value;
    let passwordInput = document.getElementById("password").value;
  
    // Retrieve the stored user data from localStorage
    let storedUsername = localStorage.getItem("name");
    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password"); // This is a placeholder password (since we didn't save it in localStorage for security reasons)
  
    // Check if the username (or email) and password match the stored data
    if ((usernameInput === storedUsername || usernameInput === storedEmail) && passwordInput === storedPassword) {
      alert("Login successful!");
      // Redirect to a dashboard or homepage
      window.location.href = "/landing/home.html";  // Replace with the actual destination page
    } else {
      // Display an error message if the credentials don't match
      errorMessage.innerHTML = "Invalid username/email or password.";
    }
  }