'use strict';

const DateTime = props => {
    return (
        <p className="date">{props.date}</p>
    )
};


const modifyDate = (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    makeDate(date) {
      const diff = new Date() - new Date(date);
      if (diff > 1000 * 60 * 60 * 24) {
    		return `${Math.round(diff / (1000 * 60 * 60 * 24))} дней назад`;
    	}
    	if (diff > 1000 * 60 * 60) {
    		return `${Math.round(diff / (1000 * 60 * 60))} часов назад`;
    	}
    	return `${Math.round(diff / (1000 * 60))} минут назад`;
    }

    componentWillMount() {
      this.setState({
        date: this.makeDate(this.props.date)
      })
    }

    render() {
        return <Component {...this.state}/>;
      }
    }
}

const DateTimePretty = modifyDate(DateTime);
