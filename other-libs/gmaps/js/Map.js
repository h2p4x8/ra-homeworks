class MapGoogle extends React.Component {
  constructor(props) {
    super(props);
    this.markers = [];
    this.setMarkers = this.setMarkers.bind(this);
    this.removeMarkers = this.removeMarkers.bind(this)
  }

  componentDidMount() {
    console.log('mounted')
    this.map =  new google.maps.Map(this.mapContainer,
                                     {zoom: 10,
                                      center: {lat: -34.397, lng: 150.644}});
    this.setMarkers(this.props.points);
  }

  setMarkers(points) {
    points.forEach(el => {
      const point = new google.maps.Marker({position: el, map: this.map})
      this.markers.push(point);
    })
  }

  removeMarkers() {
    this.markers.forEach( el => el.setMap(null));
    this.markers = [];
  }

  componentDidUpdate(prevProps) {
    console.log('getprops')
    if (this.props.points !== prevProps.points) {
      this.removeMarkers();
      this.setMarkers(this.props.points);
    }
  }

  componentWillUnmount() {
    this.removeMarkers();
  }

  render() {
    console.log(this.props.points)
    return (
      <div className ='map' ref={el => this.mapContainer = el}></div>
    );
  }
}
