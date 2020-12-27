export const finishForm = () => {
  const loginInput = document.createElement('input');
  loginInput.setAttribute('name', 'login');
  document.querySelector('.login-form').append(loginInput);

  document.querySelector('[name="password"]').setAttribute('type', 'password');
};
// console.log(finishForm());
