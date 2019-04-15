class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { fixed: false };
    this.component = null;
  }

  render() {
    return <SearchBoxView fixed={this.state.fixed} makeRef={this.makeRef.bind(this)} />
  }

  makeRef(el) {
    this.component = el;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.setPosition.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setPosition.bind(this));
  }

  isFixed() {
    return this.component.getBoundingClientRect().top <= 0;
  }

  setPosition() {
    this.setState({ fixed: this.isFixed() });
  }
}
