import React from "react";
import messages from "./data";
import "./App.css";

function Home() {

  const getMessages = () => {
    const messageList = [];

    for (let i = 0; messageList.length < messages.length; i++) {
        messageList.push(messages[i]);      
    }
    return messageList;
  };

  let myMessageArr = getMessages();

  const allMessages = myMessageArr.map((message, index) => {
    let formattedMessage = message.text;
    let sender = message.sender;
    let date = message.createdAt;
    return (
          <div
          className={sender === 'Karla' ? 'bubble-k' : 'bubble-a'}>
            <span className="bubble-text">
            {formattedMessage}
            </span>
          </div>
    );
  });



  return (
    <>
      <section className="section home">
         <ul className="messages-list">{allMessages}</ul>
      </section>
    </>
  );
}

export default Home;