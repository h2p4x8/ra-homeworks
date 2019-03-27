'use strict'

/*
const App = props => (
  <div>
    <Toolbar
      filters={props.filters}
      selected={'All'}
      onSelectFilter={(filter) => console.log(filter)} />
    <Portfolio projects={props.projects} />
  </div>
);
*/


class App extends React.Component {
  constructor ( props ) {
    super(props);
    this.state = {
      selected: 'All'
    };
  }

  selectedProjects() {
    if (this.state.selected === 'All') {
      return  this.props.projects;
    }
    return this.props.projects.filter(project => project.category === this.state.selected)
  }

  render() {
    return (
      <div>
        <Toolbar
          filters={this.props.filters}
          selected={this.state.selected}
          onSelectFilter={ (filter) => {
            this.setState({
                selected: filter
              });
            console.log(filter)}}/>
        <Portfolio projects={this.selectedProjects()} />
      </div>
    )
  }
}
