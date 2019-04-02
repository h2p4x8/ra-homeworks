'use strict';

const SearchBox = (props) => {
  function lookFor(e) {
    throttle(props.filterBooks(e.target.value))
  }

  return (
      <input type="text"
             value={props.value}
             placeholder="Поиск по названию или автору"
             onChange={lookFor}/>
  );
}

function throttle(callback) {
  let isWaiting = false;
  return function () {
    if (!isWaiting) {
      callback.apply(this, arguments);
      isWaiting = true;
      requestAnimationFrame(() => {
        isWaiting = false;
      });
    }
  }
}
