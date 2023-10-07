import React from 'react';

const Header = ({ person, visible }) => {

  return (
    <div className="header">
      <div className="profilePhoto" id={person.classname === "left" ? "sender-pp" : "receiver-pp"}>
        <img src={person.imageName} alt="" />
      </div>
      <div className="userName">
        <h3>{person.name}</h3>
        <span id={person.classname === "left" ? "sender" : "receiver"} className={visible ? "typing-info" : "typing-info-none"}><i>typing...</i></span>
      </div>
      <div className="call">
        <span className="video"><i className="fa-solid fa-video"></i></span>
        <span className="audio"><i className="fa-solid fa-phone"></i></span>
      </div>
    </div>
  )
}


export default Header