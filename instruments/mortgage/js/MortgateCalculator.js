
const {Form} = window.antd;

const formItemLayout =  {
      labelCol: { span: 8 },
      wrapperCol: { span: 15 }
    }

class MortgateCalculator extends React.Component {
  constructor() {
    super();
    this.state = {
      apartment: '',
      price: '',
      money: '',
      duration: ''
    }
  }

  onChange(value, name) {
    this.setState({[name]: value})
  }

  onSubmit(e) {
    e.preventDefault()
    console.log(this.state);
  }

  render() {
    return (
      <Row justify='center' type='flex'>
        <Form layout="horizontal" onSubmit={this.onSubmit}>
          <Autocomplete/>
          <Inputs/>
          <Col offset='10'>
            <ButtonTest/>
          </Col>
        </Form>
      </Row>
    )
  }
}
