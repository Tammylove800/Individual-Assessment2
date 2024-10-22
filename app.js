function logout_user(){       
    if (confirm("Are you sure you want to logout?")) {
        localStorage.setItem("isUserLogin", false);
        localStorage.setItem("user", null);

        alert("You have been logged out.");
        window.location.href = "index.html";
    } else {
        alert("Logout canceled.");
    }
}




//Sample credentials
const VALID_USERNAME = "user123";
const VALID_PASSWORD = "password123"; // Must be at least 8 characters

if (!JSON.parse(localStorage.getItem("registerUsers"))) {
    registerUsers = [{
        username: VALID_USERNAME,
        password: VALID_PASSWORD,
        name: "User 123",
        address: "User Address",
        cart: []
    }];
    localStorage.setItem("registerUsers", JSON.stringify(registerUsers));
}


if (JSON.parse(localStorage.getItem("isUserLogin"))){
    const login_link = document.querySelector("a[href='Login.html']");
    login_link.removeAttribute("href");
    login_link.innerHTML = "LOGOUT";
    login_link.addEventListener("click", logout_user);
}else{
    const login_link = document.querySelector("a[href='Login.html']");
    login_link.innerHTML = "LOGIN";
    login_link.href = "Login.html";
}


function update_users_array(){
    const user_data = JSON.parse(localStorage.getItem("user"));
    const registerUsers = JSON.parse(localStorage.getItem("registerUsers"));

    for(let i = 0; i < registerUsers.length; i++){
        if(registerUsers[i].username===user.username && registerUsers[i].name===user.name ){
            registerUsers[i] = user_data;
            console.log(registerUsers);
            localStorage.setItem("registerUsers", JSON.stringify(registerUsers))
            break;
        }
    }
}