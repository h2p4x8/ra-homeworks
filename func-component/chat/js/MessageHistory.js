'use strict';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function MessageHistory({list = []}) {
  if (list.length == 0) {
    return null;
  }
const history = list.map((message,mIndex) => {
  let Type;
  switch(message.type) {
    case 'message':
      Type = Message
    break;

    case 'response':
      Type = Response
    break;

    case 'typing':
      Type = Typing
    break;
  }
  return <Type key={mIndex} from={message.from} message={message} />
})
  return (
    <ul>
      {history}
    </ul>
  )
}
