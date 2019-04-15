class ProgressBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <canvas id="progressCanvas" className="progress" ref={el => this.canvas = el}/>
    );
  }

  updateCanvas(completed, total) {
    const canvas = this.canvas.getBoundingClientRect()
    const ctx = this.canvas.getContext("2d");

    this.canvas.width = canvas.width*1.3;
    this.canvas.height = canvas.height*1.3;
    ctx.font = '30px Arial'
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.beginPath();
    ctx.arc(this.canvas.width/2, this.canvas.height/2, 52, 0, 2 * Math.PI);
    ctx.strokeStyle = '#4ca89a';
    ctx.lineWidth = 7
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = '#96d6f4';
    ctx.arc(this.canvas.width/2, this.canvas.height/2, 45, 0, completed / total * 2* Math.PI, false);
    ctx.stroke();
    ctx.beginPath();
    ctx.fillText(`${Math.round( 100 * completed / total )}%`, this.canvas.width/2, this.canvas.height/2);
  }

  componentWillReceiveProps(newProps) {
    this.updateCanvas(newProps.completed, newProps.total)
  }

  componentDidMount() {
    this.updateCanvas(this.props.completed, this.props.total)
  }
}
