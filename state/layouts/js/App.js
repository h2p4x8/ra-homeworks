'use strict';

const VIEW_LIST = "view_list";
const VIEW_MODULE = "view_module";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewModIcon: VIEW_MODULE,
      viewModModule: true
    }
  }

  onSwitch() {
    let icon, state;

    if (this.state.viewModIcon === VIEW_MODULE) {
      icon = VIEW_LIST;
      state = false;
    } else {
      icon = VIEW_MODULE;
      state = true;
    }

    this.setState({
      viewModIcon: icon,
      viewModModule: state
    })
    console.log("сменился тип вывода")
  }

  render() {
    return (
      <div>
        <div className="toolbar">
          <IconSwitch
            icon={this.state.viewModIcon}
            onSwitch={this.onSwitch.bind(this)} />
        </div>
        {this.renderLayout(this.state.viewModModule)}
      </div>
    );
  }

  renderLayout(cardView) {
    if (cardView) {
      return (
        <CardsView
          layout={this.props.layout}
          cards={this.getShopItems(this.props.products, cardView)} />
      );
    }
    return (<ListView items={this.getShopItems(this.props.products, cardView)} />);
  }

  getShopItems(products, cardView) {
    return products.map(product => {
      let cardProps = {
        title: product.name,
        caption: product.color,
        img: product.img,
        price: `$${product.price}`
      };
      if (cardView) {
        return (
          <ShopCard {...cardProps}/>
        );
      }
      return (<ShopItem {...cardProps}/>)
    });
  }
}
