import React from 'react'

const Messages = ({ message, person }) => {
  return (
    <div className={message.infoSend === "left" && person.classname === "left" ? "sender-message-div" : message.infoSend === "right" && person.classname === "right" ? "sender-message-div" : "receiver-message-div"}>
      <span className={message.infoSend === "left" && person.classname === "left" ? "sender" : message.infoSend === "right" && person.classname === "right" ? "sender" : "receiver"} key={message.id}>{message.message}</span>
    </div>
  )
}

export default Messages