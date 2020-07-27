const register = document.getElementById('register');
const registration = document.getElementById('registration');
const firstname = registration.querySelector('#firstname');
const lastname = registration.querySelector('#lastname');
const telephone = registration.querySelector('#telephone');
const email = registration.querySelector('#email');
const password = registration.querySelector('#password');
const password2 = registration.querySelector('#password2');



register.addEventListener('click', () => {
  registration.parentElement.classList.toggle('show-register');
  console.log('clicked')
})


registration.addEventListener('submit',(e) => {
  Validate();
  const allFields = document.querySelectorAll('#registration .form-control');
  const successful = Array.from(allFields).every(div => div.classList.contains('success'))
  if (!successful) {
    Validate();
    e.preventDefault();
    console.log('invalid');
  } 
});

firstname.addEventListener('keydown',checkFirstname);
lastname.addEventListener('keydown',checkLastname);
telephone.addEventListener('keydown',checkTel);
email.addEventListener('keydown',checkMail);
password.addEventListener('keydown',checkPass);

function checkFirstname(params) {
  const firstnameValue = firstname.value.trim();
  if (firstnameValue==='') {
    setError(firstname,'Firstname cannot be blank');

  } else {
    setSuccess(firstname)
  }
}
function checkLastname(params) {
  const lastnameValue = lastname.value.trim();
  if (lastnameValue==='') {
    setError(lastname,'Lastname cannot be blank');

  } else {
    setSuccess(lastname)
  }
}
function checkTel(params) {
  const telValue = telephone.value.trim();
  if (telValue==='') {
    setError(telephone,'Telephone cannot be blank');

  } else {
    setSuccess(telephone)
  }
}
function checkMail(params) {
  const emailValue = email.value.trim();
  if (emailValue==='') {
    setError(email,'email cannot be blank');
  } else {
    setSuccess(email);
  }
}
function checkPass() {
  const passwordValue = password.value.trim();
  if (passwordValue==='') {
    setError(password,'Invalid password');
  } else {
    setSuccess(password);
  }
}
function checkPass2() {
  const password2Value = password2.value.trim();
  const passwordValue = password.value.trim();
  if (password2Value!==passwordValue || password2Value==='') {
    setError(password2,'Password does not match');
  } else if(password2Value===passwordValue) {
    setSuccess(password2);
  }
}
function Validate(params) {
  checkFirstname();
  checkLastname();
  checkTel();
  checkMail();
  checkPass();
  checkPass2();
}
function setError(field, message) {
  const errorMessage = field.parentElement.querySelector('small');
  errorMessage.textContent = message;
  field.parentElement.className = 'form-control error';
}
function setSuccess(field) {
  field.parentElement.className = 'form-control success';
}
