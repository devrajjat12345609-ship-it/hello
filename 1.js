const signinForm = document.getElementById("signinForm");
const signupForm = document.getElementById("signupForm");

function showSignup() {
    signinForm.classList.remove("active");
    signupForm.classList.add("active");
}

function showSignin() {
    signupForm.classList.remove("active");
    signinForm.classList.add("active");
}

/* Sign Up Logic */
signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    if (localStorage.getItem(email)) {
        alert("User already exists!");
        return;
    }

    const user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem(email, JSON.stringify(user));
    alert("Sign Up Successful! Please Sign In.");
    showSignin();
});

/* Sign In Logic */
signinForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("signinEmail").value;
    const password = document.getElementById("signinPassword").value;

    const storedUser = localStorage.getItem(email);

    if (!storedUser) {
        alert("User not found!");
        return;
    }

    const user = JSON.parse(storedUser);

    if (user.password === password) {
        alert("Welcome to Devraj, " + user.name + "!");
    } else {
        alert("Incorrect password!");
    }
});
