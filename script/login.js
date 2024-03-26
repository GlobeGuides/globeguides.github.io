function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Check if username and password are correct (you can replace this with your authentication logic)
    if (username === "Teddy0008" && password === "JuliaIsBest123") {
        // Redirect to another page
        window.location.href = "dashboard/teddy0008"; // Replace "another_page.html" with your desired page
    } else if (username === "jurkopp4" && password === "qx5KtvV7") {
        // Redirect to another page
        window.location.href = "dashboard/jurkopp4"; // Replace "another_page.html" with your desired page
    } else {
        alert("Invalid username or password. Please try again.");
    }
}