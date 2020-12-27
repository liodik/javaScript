export const finishForm = () => {
  const loginInput = document.createElement('input');
  loginInput.setAttribute('name', 'login');
  loginInput.setAttribute('type', 'text');
  document.querySelector('.login-form').prepend(loginInput);

  document.querySelector('[name="password"]').setAttribute('type', 'password');
};
// console.log(finishForm());
