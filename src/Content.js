import React from 'react';
import Messages from './Messages';

const Content = React.forwardRef(({ messages, person }, ref) => {
  return (
    <div className={person.classname === "left" ? "sender-inbox" : "receiver-inbox"} ref={ref} id={person.classname === "left" ? "sender-inbox" : "receiver-inbox"}>
      {(messages.length) ? messages.map((message) => (<Messages message={message} key={message.id} person={person} />)) : ""}
    </div>
  )
})

export default Content