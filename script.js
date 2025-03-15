document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent page reload

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            if (username === "" || password === "") {
                alert("Please enter both username and password.");
                return;
            }

            // Dummy authentication (Replace with real login validation)
            if (username === "admin" && password === "password") {
                alert("Login successful!");
                localStorage.setItem("isLoggedIn", "true");
                window.location.href = "HomePage.html";
            } else {
                alert("Invalid credentials. Try again.");
            }
        });
    }

    // Only check login status on HomePage.html
    if (window.location.pathname.includes("HomePage.html")) {
        if (localStorage.getItem("isLoggedIn") !== "true") {
            alert("You must log in first!");
            window.location.href = "LoginPage.html";
        }
    }
});

function logout() {
    localStorage.removeItem("isLoggedIn"); // Clear login status
    window.location.href = "LoginPage.html"; // Redirect to login page
}
