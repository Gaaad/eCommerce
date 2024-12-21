//Switch Forms


//Regex
    

//Login


function logOut() {
    const loggedInEmail = localStorage.getItem("email")
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.email === emaillogged);
    user.isLoggedIn = false;
    localStorage.setItem("users", JSON.stringify(users));
    location.href = "./home.html";
}