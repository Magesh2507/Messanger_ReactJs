import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  //sender 
  const [senderVisible, setSenderVisible] = useState(false)
  const [messages, setMessages] = useState([])
  const [senderMessage, setSenderMessage] = useState('')
  const senderDetails = {
    name: "Sakthi Jeyan",
    imageName: "./pc.jpg",
    classname: "left",
    chatBoxName: "chatBox"
  }

  const sendClick = (infoSend, infoReceive) => {
    if (!senderMessage && !receiverMessage) return;
    if (senderMessage) {
      addMessage(senderMessage, infoSend, infoReceive)
      setSenderMessage('')
      setSenderVisible(false)
    }
    if (receiverMessage) {
      addMessage(receiverMessage, infoSend, infoReceive)
      setReceiverMessage('')
      setReceiverVisible(false)
    }
  }

  const addMessage = async (message, infoSend, infoReceive) => {
    const id = messages.length ? messages[messages.length - 1].id + 1 : 1;
    const addNewMessage = { message, id, infoSend, infoReceive };
    console.log(addNewMessage)
    const listMessages = [...messages, addNewMessage];
    setMessages(listMessages)
  }
  //receiver
  const [receiverVisible, setReceiverVisible] = useState(false)
  const [receiverMessage, setReceiverMessage] = useState('')
  const receiverDetails = {
    name: "Jeyan Sakthi",
    imageName: "./sj.jpg",
    classname: "right",
    chatBoxName: "chatBox"
  }

  const senderContainerRef = useRef(null);
  const receiverContainerRef = useRef(null);

  useEffect(() => {
    senderContainerRef.current.scrollTop = senderContainerRef.current.scrollHeight;
    receiverContainerRef.current.scrollTop = receiverContainerRef.current.scrollHeight;
  }, [senderMessage, receiverMessage]);

  return (
    <div className='container'>
      <div className={senderDetails.classname}>
        <div className={senderDetails.chatBoxName}>
          <Header person={senderDetails}
            visible={receiverVisible} />
          <Content messages={messages} person={senderDetails} ref={senderContainerRef} />
          <Footer person={senderDetails}
            senderMessage={senderMessage}
            setSenderMessage={setSenderMessage}
            visible={senderVisible}
            setVisible={setSenderVisible}
            sendClick={sendClick} />
        </div>
      </div>
      <div className={receiverDetails.classname}>
        <div className={receiverDetails.chatBoxName}>
          <Header person={receiverDetails}
            visible={senderVisible} />
          <Content messages={messages} person={receiverDetails} ref={receiverContainerRef} />
          <Footer
            person={receiverDetails}
            senderMessage={receiverMessage}
            setSenderMessage={setReceiverMessage}
            visible={receiverVisible}
            setVisible={setReceiverVisible}
            sendClick={sendClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
