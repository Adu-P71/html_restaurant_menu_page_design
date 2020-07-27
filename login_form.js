const signIn = document.getElementById('signIn');
const login = document.querySelector('#loginform');
const loginTelephone = login.querySelector('#telephone');
const loginPassword = login.querySelector('#password');


signIn.addEventListener('click', () => {
  login.parentElement.classList.toggle('show-login');
  console.log('clicked');
});
// loginTelephone.addEventListener('keydown',() => {
//   const loginTelephoneValue = loginTelephone.value.trim();
//   if (loginTelephoneValue==='') {
//     setError(loginTelephone,'This cannot be blank');

//   } else {
//     setSuccess(loginTelephone)
//   }
// });
// function passValidator(params) {
//   const loginPasswordValue = loginPassword.value.trim();

// }
