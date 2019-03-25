'use strict';

function AuthForm ({onAuth}) {
  let nameField, emailField, passField;
  const onSubmit = (e) => {
    e.preventDefault();
    if (!onAuth || !onAuth instanceof Function) {
      return;
    }
    onAuth({
      name: nameField.value,
      email: emailField.value,
      password: passField.value
    })
  }
  const setPass = (e) => {
    if (e.currentTarget.value.match(/\W/g)) {
      e.currentTarget.value = e.currentTarget.value.replace(/\W/g, '');
    }
  }
  const setEmail = (e) => {
    if (e.currentTarget.value.match(/[^\w@\.\-_]/g)) {
      e.currentTarget.value = e.currentTarget.value.replace(/[^\w@\.\-_]/g, '');
    }
  }
  return (
    <form className="ModalForm" action="/404/auth/" method="POST" onSubmit={onSubmit}>
      <div className="Input">
        <input ref={el => nameField = el}
               required type="text"
               placeholder="Имя" />
        <label></label>
      </div>
      <div className="Input">
        <input ref={el => emailField = el}
               type="email"
               placeholder="Электронная почта"
               onInput={setEmail}/>
        <label></label>
      </div>
      <div className="Input">
        <input ref={el => passField = el}
               required
               type="password"
               placeholder="Пароль"
               onInput={setPass}/>
        <label></label>
      </div>
      <button type="submit">
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right"></i>
      </button>
    </form>
  )
}
