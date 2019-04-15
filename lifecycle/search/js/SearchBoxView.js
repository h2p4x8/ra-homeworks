const SearchBoxView = ({ fixed, makeRef}) => (
  <section className="container" ref={el => makeRef(el)}>
    <div className="row">
      <div className="col-sm-12">
        <input
          className={`search-box ${fixed ? 'search-box_fixed' : null}`}
          placeholder="Поиск"
        >
        </input>
      </div>
    </div>
  </section>
);

/*
class SearchBoxView extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const {fixed} = this.props;
    return (<section className="container">
      <div className="row">
        <div className="col-sm-12">
          <input
            className={`search-box ${fixed ? 'search-box_fixed' : null}`}
            placeholder="Поиск"
          >
          </input>
        </div>
      </div>
    </section>)
  }
}
*/
