const Calendar = function({date}) {
  const days = {
    0: 'Воскресенье',
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота'
  };
  const months = {
      imP: {
          0: 'Январь',
          1: 'Февраль',
          2: 'Март',
          3: 'Апрель',
          4: 'Май',
          5: 'Июнь',
          6: 'Июль',
          7: 'Август',
          8: 'Сентябрь',
          9: 'Октябрь',
          10: 'Ноябрь',
          11: 'Декабрь'},
      rP: {
            0: 'Января',
            1: 'Февраля',
            2: 'Марта',
            3: 'Апреля',
            4: 'Мая',
            5: 'Июня',
            6: 'Июля',
            7: 'Августа',
            8: 'Сентября',
            9: 'Октября',
            10: 'Ноября',
            11: 'Декабря'
      }
  };

  const calendarDays = [];
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1),
        prevDayofMonth =  new Date(date.getFullYear(), date.getMonth(), 0),
        countsOfDays = new Date(date.getFullYear(), date.getMonth() + 1, 0)
  let needDays = 0; //до пн

  if (firstDayOfMonth.getDay() === 0) {
    needDays = 6
  }  else {
    needDays = firstDayOfMonth.getDay() - 1;
  }
  const weeks = Math.ceil((countsOfDays.getDate() + needDays) / 7);

  for (let weekNum = 0; weekNum < weeks; weekNum++) {
    const week = [];


    for (let dayNum = 1; dayNum < 8; dayNum++) {
      let day;
      let dif = 0;
      if (weekNum === 0) {
        if (!needDays) {
          day = dayNum;
        } else {
          dif = prevDayofMonth.getDate() - needDays + dayNum;
          day = dif > prevDayofMonth.getDate() ?  dif - prevDayofMonth.getDate() : dif;
        }
      } else {
        dif = weekNum * 7 + dayNum - needDays;
        day = dif > countsOfDays.getDate() ? dif - countsOfDays.getDate() : dif;
      }
      week.push(day);
    }
    calendarDays.push(week);
  }


 const matrix = calendarDays.map(
    (week, weekIndex) => (
      <tr key={weekIndex}>{week.map(
        (day, dayIndex) => {
          let className;
          const conditions = [
            weekIndex === 0 && day > 7,
            weekIndex === calendarDays.length - 1 && day < 7
          ];
          if (conditions.some(cond => cond)) {
            className = 'ui-datepicker-other-month';

          } else if ( day === date.getDate()) {
            className = 'ui-datepicker-today';
          }

          return <td key={dayIndex} className={className}>{day}</td>;
        }
      )}</tr>
    )
  );

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{days[date.getDay()]}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
          <div className="ui-datepicker-material-month">{months.rP[date.getMonth()]}</div>
          <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{months.imP[date.getMonth()]}</span>&nbsp;<span class="ui-datepicker-year">{date.getFullYear()}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
    <colgroup>
      <col />
      <col />
      <col />
      <col />
      <col />
      <col className="ui-datepicker-week-end" />
      <col className="ui-datepicker-week-end" />
    </colgroup>
    <thead>
      <tr>
        <th scope="col" title="Понедельник">Пн</th>
        <th scope="col" title="Вторник">Вт</th>
        <th scope="col" title="Среда">Ср</th>
        <th scope="col" title="Четверг">Чт</th>
        <th scope="col" title="Пятница">Пт</th>
        <th scope="col" title="Суббота">Сб</th>
        <th scope="col" title="Воскресенье">Вс</th>
      </tr>
    </thead>
    <tbody>
      {matrix}
    </tbody>
    </table>
    </div>
  );
 }
