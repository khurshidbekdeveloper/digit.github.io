

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.querySelector('input[name="username"]');
      const password = document.querySelector('input[name="password"]');
      const user = username.value;
      const pass = password.value;
      var errorpage=document.querySelector(`.error`);
      var userName=document.querySelector(`#username_login`);

      if (user == 'user' && pass == 'pass') {
          alert('Login successful');
      } else {
          errorpage.removeAttribute(`hidden`);
          userName.className(`error-input`);
      }
  });
});

