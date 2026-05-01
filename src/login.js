document.addEventListener("DOMContentLoaded", () => {
    const authForm = document.getElementById("auth-form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const formTitle = document.getElementById("form-title");
    const submitBtn = document.getElementById("submit-btn");
    const toggleBtn = document.getElementById("toggle-btn");
    const toggleTextContent = document.getElementById("toggle-text-content");
    const messageDiv = document.getElementById("message");
    
    let isLoginMode = true;

    // Toggle between Login and Register modes
    toggleBtn.addEventListener("click", () => {
        isLoginMode = !isLoginMode;
        formTitle.textContent = isLoginMode ? "System Login" : "Create Account";
        submitBtn.textContent = isLoginMode ? "Login" : "Sign Up";
        toggleTextContent.textContent = isLoginMode ? "Don't have an account?" : "Already have an account?";
        toggleBtn.textContent = isLoginMode ? "Register here" : "Login here";
        messageDiv.textContent = ""; 
    });

    // Handle form submission
    authForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        // Disable button to prevent spam clicking
        submitBtn.disabled = true;
        messageDiv.style.color = "#aaa";
        messageDiv.textContent = "Processing...";

        const endpoint = isLoginMode ? "/api/login" : "/api/register";
        
        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json" 
                },
                body: JSON.stringify({
                    username: usernameInput.value,
                    password: passwordInput.value
                })
            });

            const data = await response.json();

            if (response.ok) {
                messageDiv.style.color = "#4CAF50"; // Success green
                messageDiv.textContent = data.message;
                
                if (isLoginMode) {
                    // If login is successful, redirect to the main gacha page
                    setTimeout(() => {
                        window.location.href = "/wish.html"; 
                    }, 1000);
                } else {
                    // If registration is successful, auto-switch to login mode
                    setTimeout(() => {
                        toggleBtn.click();
                        messageDiv.style.color = "#4CAF50";
                        messageDiv.textContent = "Registration complete. Please log in.";
                    }, 1500);
                }
            } else {
                // Display error from the backend (e.g., "Invalid credentials" or "Username exists")
                messageDiv.style.color = "#ff4c4c"; // Error red
                messageDiv.textContent = data.error || "An error occurred.";
            }
        } catch (error) {
            console.error("Error connecting to the server:", error);
            messageDiv.style.color = "#ff4c4c";
            messageDiv.textContent = "Server connection failed.";
        } finally {
            submitBtn.disabled = false;
        }
    });
});