'use strict';

class SubscribeForm extends React.Component {
  constructor() {
    super();
    this.state = {email: '', errorClass : ''};
  }

  checkEmail(e) {
    let className = '';

    if (e.target.value !== '') {
      className = e.target.validity.valid ? 'is-valid' : 'is-error';
    }

    this.setState({
      errorClass: className,
      email: e.target.value
    })
  }

  render() {

    return (
      <div className="subscribe__form">
        <form className={`form form--subscribe ${this.state.errorClass}`}>
          <h4 className="form-title">Подписаться:</h4>
          <div className="form-group">
            <label htmlFor="input-email" className="sr-only">Email</label>
            <input type="email"
                   id="input-email"
                   placeholder="Email"
                   className="form-control"
                   onInput={this.checkEmail.bind(this)}
                   defaultValue={this.state.email}/>
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
