
var UserName=document.getElementById('UserName');
var Password=document.getElementById('Password');
var authMessage = document.getElementById('authMessage');


function signup() {
    var users = localStorage.getItem('users');
    var userExist = false;

    if (users === null) {
        users = [];
    }
    else {
        users = JSON.parse(users);
    }
    var user = {
        UserName: UserName.value,
        Password: Password.value
    }
    for (var i = 0; i < users.length; i++) {
        if (users[i].UserName === UserName.value) {
            userExist = true;
        }
    }
    if (userExist === true) {
        authMessage.innerHTML = "user already exists!";
    }
    else {
        users.push(user);
        users = JSON.stringify(users);
        localStorage.setItem('users', users);

        UserName.value = '';
        Password.value = '';

        authMessage.innerHTML = "Successfully signup!";
    }
}

function login() {
    var users = localStorage.getItem('users');
    if (users === null) {
        users = [];
    }
    else {
        users = JSON.parse(users);
    }
    var authantication = false;

    for (var i = 0; i < users.length; i++) {
        if (users[i].UserName === UserName.value ) {
            authantication = true
        }
    }
    if (authantication == false) {
        authMessage.innerHTML = "Login Faild"
    } else {
        authMessage.innerHTML = "Login success"
        UserName.value = '';
        Password.value = '';
        window.location.href = 'LoggedIn/loggedIn.html'
       }
}