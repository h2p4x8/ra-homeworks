class Cart extends React.Component {
  constructor(props) {
    super(props)
  }
  shouldComponentUpdate(nextProps) {
    if (this.props.isOpen || nextProps.isOpen) {
      if (this.props.isOpen && nextProps.isOpen) {
        return (this.props.items.length !== nextProps.items.length)
      }
       return true;
    }

    return false;
  }

  render() {
    console.log('+')
    return (
      <CartView {...this.props} />
    );
  }

}
