const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const  usernamen= document.querySelector("#usernamen");
const passwordn = document.querySelector("#passwordn");
const confirmPassword = document.querySelector("#confirm-password");
const inputEmail = document.querySelector("#email");
const btnLogin = document.querySelector("#btnlogin");
const btnSignup = document.querySelector("#btnsignup");
var emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// validation form login
btnSignup.addEventListener("click", (e) => {
e.preventDefault();
if (
inputUsername.value === "" ||
inputPassword.value === "" ||
inputEmail.value === "" ||
confirmPassword.value === ""
) {
alert("vui lòng không để trống");
} else {
// array user
const user = {
username: inputUsername.value,
password: inputPassword.value,
};
let json = JSON.stringify(user);
if(inputPassword.value === confirmPassword.value && emailPattern.test(inputEmail.value)===true){
    localStorage.setItem(inputUsername.value, json);
    alert("Đăng Ký Thành Công ");
    window.location.href = "login.html";
}
else {
    if( !emailPattern.test(inputEmail.value)){
        alert("Email không phù hợp - đăng ký không thành công");
    }
    else if(inputPassword.value !== confirmPassword.value){
        alert("Mật khẩu không tr nhau - đăng ký không thành công");
    }
}
}
});

btnLogin.addEventListener("click", (e) => {
e.preventDefault();
if (usernamen.value === "" || passwordn.value === "") {
alert("vui lòng không để trống username hoặc password");
} else {
const user = JSON.parse(localStorage.getItem(usernamen.value));
if (
user.username === usernamen.value &&
user.password === passwordn.value
) {

window.location.href = "home.html"; 
} else if(user.username !== usernamen.value ||
    user.password !== passwordn.value  ){
alert("username hoặc password không đúng  - đăng nhập không thành công");
}
}
});