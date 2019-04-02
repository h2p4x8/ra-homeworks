'use strict';

class SubscribeForm extends React.Component {
  checkEmail(e) {
    if (e.target.validity.valid) {
      this.form.classList.add('is-valid');
      this.form.classList.remove('is-error');
    } else {
      this.form.classList.remove('is-valid');
      this.form.classList.add('is-error');
    }
  }

  render() {
    return (
      <div className="subscribe__form">
        <form className="form form--subscribe" ref={el => this.form = el}>
          <h4 className="form-title">Подписаться:</h4>
          <div className="form-group">
            <label htmlFor="input-email" className="sr-only">Email</label>
            <input type="email"
                   id="input-email"
                   placeholder="Email"
                   className="form-control"
                   onInput={this.checkEmail.bind(this)}/>
            <div className="form-error">Пожалуйста, проверьте корректность адреса электронной почты</div>
            <button type="submit" className="form-next">
              <i className="material-icons">keyboard_arrow_right</i>
            </button>
          </div>
        </form>
      </div>
    )
  }
}
