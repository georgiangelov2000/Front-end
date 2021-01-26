var firebaseConfig = {
    apiKey: "AIzaSyDnIsuBA24Y6vRekhCo3HFggBroHf5uQ5k",
    authDomain: "first-project-b4737.firebaseapp.com",
    projectId: "first-project-b4737",
    storageBucket: "first-project-b4737.appspot.com",
    messagingSenderId: "4651705348",
    appId: "1:4651705348:web:709b2d55a9754b286d8151",
    measurementId: "G-PYYNX8JF27"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

        document.getElementById('login-btn').addEventListener('click', onUserLogin)


        function onUserLogin(e) {
            let userElement=document.getElementById('username')
            let passwordElement=document.getElementById('password');
            let h1El=document.getElementById('info');
            let loginForm=document.getElementsByClassName('login-form')[0];
            auth.signInWithEmailAndPassword(userElement.value,passwordElement.value)
                .then((res) => {
                    h1El.style.background='lightgreen';
                    h1El.style.color="white"
                    h1El.innerHTML=`Hello ${res.user.email}`;
                    loginForm.style.display="none";
                })
                .catch((err) => {
                    console.log('err:', err)
                    h1El.style.background="tomato";
                    h1El.style.color="white"
                    h1El.innerHTML=`${err}`;
                })
        }
    
