import React from 'react';

const Footer = ({ person, senderMessage, setSenderMessage, visible, setVisible, sendClick }) => {
    const infoSend = person.classname === "left" ? "left" : "right";
    const infoReceive = person.classname === "left" ? "right" : "left";
    const sendBtnId = person.classname === "left" ? "senderId" : "receiverId";


    const handlePress = (e) => {
        if (e.key === 'Enter') {
            const targetId = sendBtnId;
            const targetElement = document.getElementById(targetId);
            console.log(targetElement)
            targetElement.click();
        }
    }

    return (
        <div className="message-send-container">
            <div className="input-container">
                <input type="text" id={person.classname === "left" ? "sender-input" : "receiver-input"} value={senderMessage}
                    onChange={(e) => {
                        setSenderMessage(e.target.value)
                        if (e.target.value.trim() === '') {
                            setVisible(false);
                        } else {
                            setVisible(true);
                        }
                    }}
                    onKeyPress={handlePress}
                />
            </div>
            <div className={visible ? "send-icon-container" : "hidden"} id={sendBtnId} onClick={() => sendClick(infoSend, infoReceive)}>
                <span className="send-icon" id="send" ><i className="fa-regular fa-paper-plane"></i></span>
            </div>
        </div>
    )
}

export default Footer