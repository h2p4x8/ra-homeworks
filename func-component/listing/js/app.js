'use strict';

function Listing({ list = [] }) {
  if (list.length === 0) {
    return null
  }
  const final = list.map(( prod ) =>{
    const levelQuant = checkQuantity(prod.quantity)
    const title = prod.title.length < 50 ? prod.title : prod.title.slice(0, 51) + '...';
    return <div key={prod.listing_id} className="item">
      <div className="item-image">
        <a href={prod.url}>
          <img src={prod.MainImage.url_570xN} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title}</p>
        <p className="item-price">{prod.currency_code + prod.price}</p>
        <p className={levelQuant + ' item-quantity'}>{prod.quantity + ' left'}</p>
      </div>
    </div>
  })
  return (
    <div className="item-list">{final}</div>
  )
}

function checkQuantity(num) {
  if (num <= 10) {
    return 'level-low';
  } else if(num > 10 && num <= 20) {
    return 'level-medium'
  } else {
    return 'level-high'
  }
}

fetch('https://neto-api.herokuapp.com/etsy')
  .then((res) => {
    if (res.status === 200){
      return res.json()
    }
    console.log(res);
  })
  .then(res => {
    ReactDOM.render(
      <Listing list={res} />,
      document.getElementById('root')
    );
  })
  .catch(error => {
    console.log(error);
  })
