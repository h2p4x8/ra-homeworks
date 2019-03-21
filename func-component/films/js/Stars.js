'use strict';

function Stars({count = 0}) {
  if (count >= 1 && count <= 5){
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<li><Star /></li>)
    }
    return (
      <ul className="card-body-stars u-clearfix">{stars}</ul>
    )
  }
  return null;
}
