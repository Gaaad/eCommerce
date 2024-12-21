var LogInForm = document.getElementById("log-in");
LogInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    var emaillogged = document.getElementById("emaillogged").value.trim();
    var passlog = document.getElementById("passlog").value.trim();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.email === emaillogged && user.password === passlog)
    if(user){
        user.isLoggedIn = true;
        // localStorage.setItem("newUser.isLoggedIn", true)
        localStorage.setItem("users", JSON.stringify(users));
        location.href = "./home.html";
    }
    else {
        alert("wrong");
    }
})
var LogIndiv = document.getElementById("LogInDiv");
var registerDiv = document.getElementById("register-div");
function openLogin() {
    LogIndiv.classList.remove("hidden");
    registerDiv.classList.add("hidden")
}
function openRegister() {
    registerDiv.classList.remove("hidden");
    LogIndiv.classList.add("hidden");
}
//Register
var registerForm = document.getElementById("registeration-form");
var nameregex = /^[a-zA-Z]{3,}\s[a-zA-Z]{3,}$/;
var phoneRegex = /^(01)[0125][0-9]{8}$/;
var emailRegex = /^[a-zA-z0-9]+@gmail\.com$/;
var passRegex = /^(?=.*\d)[A-Za-z\d!@#$%^&*(),.?":{}|<>]{7,15}$/;
registerForm.addEventListener('submit', (event) => {
    var nameInput = document.getElementById("full-name").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var repeatPass = document.getElementById("repeat-pass").value.trim();
    var role = document.getElementById("role").value;
    if (!nameregex.test(nameInput)) {
        document.getElementById("name-invalid").classList.remove("hidden");
        event.preventDefault();
    } else {
        document.getElementById("name-invalid").classList.add("hidden");
    }
    if (!phoneRegex.test(phone)) {
        document.getElementById("phone-invalid").classList.remove("hidden");
        event.preventDefault();
    } else{
        document.getElementById("phone-invalid").classList.add("hidden");
    }
    if (!emailRegex.test(email)) {
        document.getElementById("email-invalid").classList.remove("hidden");
        event.preventDefault();
    } else {
        document.getElementById("email-invalid").classList.add("hidden")
    }
    if (!passRegex.test(password)) {
        document.getElementById("passlength").classList.remove("hidden");
        document.getElementById("passdigits").classList.remove("hidden");
        event.preventDefault();
    } else if (password !== repeatPass && repeatPass == "") {
        document.getElementById("passmatch").classList.remove("hidden");
        event.preventDefault();
    } else {
        document.getElementById("passlength").classList.add("hidden");
        document.getElementById("passdigits").classList.add("hidden");
        document.getElementById("passmatch").classList.add("hidden")
    }
    var users = JSON.parse(localStorage.getItem("users")) || [];
    var exist = users.find(user => user.email === email);
    console.log(exist);
    
    if(exist)
        alert("wrong");
    else
    {
        const newUser = {
            name: nameInput, 
            email: email, 
            phone: phone, 
            password: password,
            isLoggedIn: false
        };
        users.push(newUser);
        localStorage.setItem('users',JSON.stringify(users));
    }
})