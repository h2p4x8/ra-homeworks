'use strict';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick(e) {
    e.currentTarget.classList.toggle('open')
  }

  render() {
    const result = article.sections.map((article, arIndex) =>
    <section onClick={this.onClick.bind(this)} className='section'>
      <button>toggle</button>
      <h3 className='sectionhead'>{article.title}</h3>
      <div className='articlewrap'>
        <div className='article'>
          {article.text}
        </div>
      </div>
    </section>
    )

    return (
      <main className='main'>
      <h2 className='title'>{article.mainTitle}</h2>
        {result}
      </main>
    )
  }
}

const article = {
  mainTitle: 'Как петь Фальцето',
  sections: [
    {
      title: 'Шаг 1',
      text: 'Вступите в хор или найдите хорошего учителя вокала, который оценит ваш талант.'
    },
    {
      title: 'Шаг 2',
      text: 'Поймите, что петь фальцето может каждый, надо просто практиковаться.'
    },
    {
      title: 'Шаг 3',
      text: 'Осознайте что есть два типа основных голосов: тонкий голос (состоит из 2 частей; очень высокий голос и фальцето ) и грубый голос; состоит из 3 частей ; низкий, средний и высокий) Грубый голос это разговорный голос, он чаще всего встречается у мужчин. Знайте, чтобы петь фальцето, надо обязательно иметь тонкий голос.'
    }
  ]
}

ReactDOM.render(
  <Accordion article={article} />,
  document.querySelector('#accordian')
);
