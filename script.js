document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Add your authentication logic here
    console.log("Username: " + username + ", Password: " + password);
    // Redirect to a new page or perform other actions after authentication
  });
  