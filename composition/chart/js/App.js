function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function compareNumbers(a, b) {
  return a - b;
}

class App extends React.Component {
	componentWillMount() {
		this.setState({
			data: [],
			series: ['France', 'Italy', 'England', 'Sweden', 'Germany'],
			labels: ['cats', 'dogs', 'horses', 'ducks', 'cows'],
			colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']
		})
	}

	componentDidMount() {
		this.populateArray();
		setInterval(this.populateArray.bind(this), 2000);
	}

	populateArray() {
		const	series = 5;
		const serieLength = 5;

    let data = new Array(series).fill(new Array(serieLength).fill(0));
    data = data.map(serie => serie.map(item => getRandomInt(0, 20)));

		this.setState({ data });
	}

	render() {
		const { data, colors, labels, series } = this.state;
		const max = data.reduce((max, serie) => Math.max(max, serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)), 0);
    let props = {
      data: data,
      colors: colors,
      labels: labels,
      max: max,
      chartsMode: null
    }

		return (
			<section>
        <Charts {...props} type={null}/>

        <Charts {...props} type='stacked'/>

        <Charts {...props} type='layered' />

        <Charts {...props} labels={series} type={null} chartsMode='horizontal'/>

        <div className="Legend">
    			{ labels.map((label, labelIndex) => {
    				return (
    				<div>
    					<span className="Legend--color" style={{ backgroundColor: colors[labelIndex % colors.length]  }} />
    					<span className="Legend--label">{ label }</span>
    				</div>
    				);
    			}) }
    		</div>
			</section>
		);
	}
}

const Charts= (props) => {
  var {data, labels, colors, type, max, chartsMode} = props;
  const classModeName = chartsMode ? 'Charts ' + chartsMode : 'Charts'

  const result = data.map((serie, serieIndex) => {
    var sortedSerie = serie.slice(0),
      sum, heigth = chartsMode === 'horizontal' ? 'auto' : 250,
      className = type ? 'Charts--serie ' + type : 'Charts--serie';

    sum = serie.reduce((carry, current) => carry + current, 0);
    sortedSerie.sort(compareNumbers);


    return (
      <div className={ className }
        key={ serieIndex }
        style={{height: heigth}}
      >
      <label>{ labels[serieIndex] }</label>
      { serie.map((item, itemIndex) => {
        var color = colors[itemIndex], style,
          size = type === 'stacked' ? item / sum * 100 : item / (max) * 100,
          opacity = type === 'stacked' ? 1 : item/max + .05;

        style = {
          backgroundColor: color,
          opacity: opacity,
          zIndex: item
        };

        if (type === 'layered') {
          style.right = ((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) + '%';
        }
        if (chartsMode === 'horizontal') {
          style.width = size + '%';
        } else {
          style.height = size + '%';
        }

      return (
        <div
          className={"Charts--item " +  type }
          style={ style }
          key={ itemIndex }
        >
          <b style={{ color: color }}>{ item }</b>
        </div>
      )
    }) }
      </div>)
  })

  return (
    <div className={ classModeName }>
      { result }
      </div>
  )
};
