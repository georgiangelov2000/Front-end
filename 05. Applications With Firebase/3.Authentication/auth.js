document.getElementById('register-btn').addEventListener('click', registerUser);
document.getElementById('login-btn').addEventListener('click',loginUser);

let loginMessage=document.getElementById('login-message')
let registerMessage=document.getElementById('register-message');

function registerUser(e) {
    e.preventDefault();
    let emailInput = document.getElementById('reg-em')
    let password = document.getElementById('reg-pass');

    if (emailInput.value != '' && password.value.length >= 6) {
        firebase.auth().createUserWithEmailAndPassword(emailInput.value, password.value)
            .then((data) => {
                registerMessage.style.background='dodgerblue';
                registerMessage.style.color='white';
                registerMessage.innerHTML=`Hello New User ${data.user.email}`
                setTimeout(()=>{
                    registerMessage.style.display='none'
                },1000)
            }).catch((err) => {
                registerMessage.style.background='tomato';
                registerMessage.style.color='white';
                registerMessage.innerHTML=`Error:${err}`
                setTimeout(()=>{
                    loginMessage.style.display='none'
                },1000)
            });
    }
}

function loginUser(e){
    e.preventDefault();
    let loginEmailInput = document.getElementById('em');
    let loginEmailPassword = document.getElementById('pass')

    firebase.auth().signInWithEmailAndPassword(loginEmailInput.value,loginEmailPassword.value)
    .then((result) => {
        loginMessage.style.background='lightgreen';
        loginMessage.style.color='white';
        loginMessage.innerHTML=`Hello ${result.user.email}`
        setTimeout(()=>{
            loginMessage.style.display='none'
        },1000)
    }).catch((err) => {
        loginMessage.style.background='tomato';
        loginMessage.style.color='white';
        loginMessage.innerHTML=`${err}`
        setTimeout(()=>{
            loginMessage.style.display='none'
        },1000)
    });
}
