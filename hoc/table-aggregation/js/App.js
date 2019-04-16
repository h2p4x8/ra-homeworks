'use strict';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/l2s9l').then(response => {
            this.setState(response.data);
        });
    }

    render() {
        return (
            <div id="app">
                <NewMonthTable list={this.state.list} />
                <NewYearTable list={this.state.list} />
                <NewSortTable list={this.state.list} />
            </div>
        );
    }
};

const sortBy = (Component, sortType) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }

    componentWillReceiveProps(newProps) {
      let list = [];
      if (sortType === 'month') {
            newProps.list.forEach( el => {
		        const date = new Date(el.date);
		        const options = {
			             month: 'short'
		        };
		        const monthStr = date.toLocaleString('en', options);
		        const monthIndex = date.getMonth();
		        if (list[monthIndex]) {
			           list[monthIndex].amount += el.amount;
		        } else {
			           list[monthIndex] = {
				               month: monthStr,
				               amount: el.amount
			           };
		       }
	      });
      } else if (sortType === 'year') {
          newProps.list.forEach(el => {
            const date = new Date(el.date),
                  year = date.getFullYear(),
                  i = list.find(el => el.year === year);
            if (i) {
              i.amount += el.amount
            } else {
              list.push({year: year, amount: el.amount})
            }
          })
      list.sort((el1, el2) =>  el1.year - el2.year)
      } else if (sortType === 'decrease') {
        list = newProps.list.sort( (el1, el2) => {
          const date1 = new Date(el1.date);
          const date2 = new Date(el2.date);
          return date2 - date1;
        });
      }
      this.setState({list: list})
    }

    render() {
      return <Component {...this.props} {...this.state}/>
    }
  }
}

const NewMonthTable = sortBy(MonthTable, 'month'),
      NewYearTable = sortBy(YearTable, 'year'),
      NewSortTable = sortBy(SortTable, 'decrease');
