document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match! Please try again.");
        return;
    }

    alert("🎉 Account successfully created! Welcome, " + fullname + "!");

    document.getElementById("signup-form").reset();
});
