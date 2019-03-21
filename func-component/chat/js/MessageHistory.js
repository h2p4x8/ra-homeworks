'use strict';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function MessageHistory({list = []}) {
  if (list.length == 0) {
    return null;
  }
const history = list.map((message,mIndex) => {
  switch(message.type) {
  case 'message':
    return <Message key={mIndex} from={message.from} message={message} />
  break;

  case 'response':
    return <Response key={mIndex} from={message.from} message={message} />
  break;

  case 'typing':
    return <Typing key={mIndex} from={message.from} message={message} />
  break;
}
})
  return (
    <ul>
      {history}
    </ul>
  )
}
