// Level 1: Password Crack
function checkPassword() {
    const passwordInput = document.getElementById("password").value;
    const feedback = document.getElementById("feedback");
    const correctPassword = "h4ck3r";

    if (passwordInput === correctPassword) {
        feedback.textContent = "Access Granted. Welcome, Hacker!";
        feedback.style.color = "#00ff00";
        nextLevel("level1", "level2");
    } else {
        feedback.textContent = "Access Denied. Try Again!";
        feedback.style.color = "#ff0000";
    }
}

// Level 2: Decrypt Message
function checkDecryption() {
    const decryptedMessage = document.getElementById("decryptedMessage").value.toLowerCase();
    const decryptionFeedback = document.getElementById("decryptionFeedback");
    const correctDecryption = "there is a secret come on a real byes";

    if (decryptedMessage === correctDecryption) {
        decryptionFeedback.textContent = "Correct! Moving to the next level...";
        decryptionFeedback.style.color = "#00ff00";
        nextLevel("level2", "level3");
    } else {
        decryptionFeedback.textContent = "Incorrect decryption. Try again!";
        decryptionFeedback.style.color = "#ff0000";
    }
}

// Level 3: Phishing URL
function checkURL(choice) {
    const urlFeedback = document.getElementById("urlFeedback");
    if (choice === "safe") {
        urlFeedback.textContent = "Correct! You identified the safe URL.";
        urlFeedback.style.color = "#00ff00";
        nextLevel("level3", "level4");
    } else {
        urlFeedback.textContent = "Incorrect! This is a phishing URL.";
        urlFeedback.style.color = "#ff0000";
    }
}

// Level 4: CAPTCHA
function checkCaptcha() {
    const captchaInput = document.getElementById("captchaInput").value;
    const captchaFeedback = document.getElementById("captchaFeedback");
    const correctCaptcha = "92F2Y";

    if (captchaInput === correctCaptcha) {
        captchaFeedback.textContent = "CAPTCHA correct! You have completed all levels!";
        captchaFeedback.style.color = "#00ff00";
        nextLevel("level4", "level5");
    } else {
        captchaFeedback.textContent = "Incorrect CAPTCHA. Try again!";
        captchaFeedback.style.color = "#ff0000";
    }
}

// Level 5: SQL Injection
function checkSQLInjection() {
    const sqlInjectionInput = document.getElementById("sqlInjectionInput").value;
    const sqlFeedback = document.getElementById("sqlFeedback");

    if (sqlInjectionInput.includes("' OR 1=1--")) {
        sqlFeedback.textContent = "Login successful! You bypassed the authentication.";
        sqlFeedback.style.color = "#00ff00";
        nextLevel("level5", "level6");
    } else {
        sqlFeedback.textContent = "Access Denied. Try using SQL injection techniques.";
        sqlFeedback.style.color = "#ff0000";
    }
}

// Level 6: Cross-Site Scripting (XSS)
function checkXSS() {
    const xssInput = document.getElementById("xssInput").value;
    const xssFeedback = document.getElementById("xssFeedback");

    if (xssInput.includes("<script>alert('Hello, World!')</script>")) {
        xssFeedback.innerHTML = "XSS attack successful! You triggered the alert.";
        xssFeedback.style.color = "#00ff00";
    } else {
        xssFeedback.textContent = "XSS attack failed. Try injecting the correct JavaScript code.";
        xssFeedback.style.color = "#ff0000";
    }
}

// Fungsi untuk pindah ke level berikutnya
function nextLevel(currentLevel, nextLevel) {
    document.getElementById(currentLevel).style.display = "none";
    document.getElementById(nextLevel).style.display = "block";
}
