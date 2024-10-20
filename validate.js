

function validateForm(event) {
  event.preventDefault()
  let errorMessage = document.getElementById("error");
  let successMessage = document.getElementById("success");

  // Clear previous errors and success messages
  errorMessage.innerHTML = "";
  successMessage.innerHTML = "";

  try {
    let username = document.getElementById("yourName").value;
    let email = document.getElementById("yourEmail").value;
    let password = document.getElementById("loginPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Username validation (alphanumeric and between 3 and 15 characters)
    let usernameRegex = /^[a-zA-Z0-9]{3,15}$/;
    if (!usernameRegex.test(username)) {
      throw new Error("Username must be alphanumeric and between 3 and 15 characters.");
    }

    // Email validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Please enter a valid email address.");
    }

    // Password validation (at least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character)
    let passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      throw new Error("Password must be at least 8 characters long, contain 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.");
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      throw new Error("Passwords do not match.");
    }

    localStorage.setItem("email", email )
        localStorage.setItem("password", password )
        localStorage.setItem("name", username )

    // If everything is valid, show success message
    successMessage.innerHTML = "Sign up successful! Redirecting to login page...";

    // Delay for a short period to show the success message and then redirect to login page
    setTimeout(() => {
      window.location.href = "/index.html";  // Replace "login.html" with your actual login page URL
    }, 2000);  // 2 seconds delay before redirection

    return true;  // Form will be submitted (for server-side processing, if needed)

  } catch (error) {
    // Catch any errors and display the message
    errorMessage.innerHTML = error.message;
    return false;  // Prevent form submission
  }
}

