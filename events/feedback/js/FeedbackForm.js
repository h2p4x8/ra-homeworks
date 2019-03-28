'use strict';

function FeedbackForm({data, onSubmit}) {
  let nameField, subField, messageField, emailField, formContainer;
  const checkSnacks = (snackName) => {
    if (!data.snacks) {
      return;
    }
    return data.snacks.some(el => el == snackName)
  }
  const checkSalutation = (salutationName)  => {
    return salutationName = salutationName == data.salutation ? true : false
  }
  const checkSubject = (subName) => {
    return subName = subName == 'У меня важный вопрос' ? 1 : 0;
  }

  const saveForm = (event) => {
    event.preventDefault();
    const form = {
      salutation: formContainer.salutation.value,
      name: nameField.value,
      subject: subField.value,
      message: messageField.value,
      email: emailField.value,
      snacks: Array
              .from(formContainer.snacks)
              .filter(el => el.checked)
              .map(el => el.value)
    }
    onSubmit(JSON.stringify(form));
  }
  return (
    <form className="content__form contact-form"
          ref={element => formContainer = element}>
      <div className="testing">
        <p>Чем мы можем помочь?</p>
      </div>
      <div className="contact-form__input-group">
      <input className="contact-form__input contact-form__input--radio" id="salutation-mr" name="salutation" type="radio" value="Мистер" defaultChecked={checkSalutation('Мистер')}/>
      <label className="contact-form__label contact-form__label--radio" for="salutation-mr">Мистер</label>
      <input className="contact-form__input contact-form__input--radio" id="salutation-mrs" name="salutation" type="radio" value="Мисис" defaultChecked={checkSalutation('Мисис')}/>
      <label className="contact-form__label contact-form__label--radio" for="salutation-mrs">Мисис</label>
      <input className="contact-form__input contact-form__input--radio" id="salutation-ms" name="salutation" type="radio" value="Мис" defaultChecked={checkSalutation('Мис')}/>
      <label className="contact-form__label contact-form__label--radio" for="salutation-ms">Мис</label>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label"
        htmlFor="name">Имя</label>
        <input ref={element => nameField = element}
               className="contact-form__input contact-form__input--text"
               id="name"
               name="name"
               type="text"
               defaultValue={data.name}/>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
        <input ref={element => emailField = element}
               className="contact-form__input contact-form__input--email"
               id="email"
               name="email"
               type="email"
               defaultValue={data.email}/>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
        <select ref={element => subField = element}
                className="contact-form__input contact-form__input--select"
                id="subject"
                name="subject"
                defaultValue={checkSubject(data.subject)}>
          <option value='0'>У меня проблема</option>
          <option value='1'>У меня важный вопрос</option>
        </select>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
        <textarea ref={element => messageField = element}
                  class="contact-form__input contact-form__input--textarea"
                  id="message"
                  name="message"
                  rows="6"
                  cols="65"
                  defaultValue={data.message}></textarea>
      </div>
      <div className="contact-form__input-group">
        <p className="contact-form__label--checkbox-group">Хочу получить:</p>
        <input className="contact-form__input contact-form__input--checkbox" id="snacks-pizza" name="snacks" type="checkbox" value="пицца" defaultChecked={checkSnacks('пицца')}/>
        <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">Пиццу</label>
        <input className="contact-form__input contact-form__input--checkbox" id="snacks-cake" name="snacks" type="checkbox" value="пирог" defaultChecked={checkSnacks('пирог')}/>
        <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">Пирог</label>
      </div>
      <button class="contact-form__button" type="submit" onClick={saveForm}>Отправить сообщение!</button>
      <output id="result" />
    </form>
  )
}
