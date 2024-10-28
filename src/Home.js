import React, { useState } from "react";
import messages from "./data";
import "./App.css";

function Home(props) {

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
    let msgDate = message.createdAt;
    let messageDate = msgDate.split(/[a-zA-Z]/)[0];

    return (
          <div
          className={sender === 'Karla' ? 'bubble-k' : 'bubble-a'}
          
          >
            <span className="bubble-text">
            {formattedMessage}
            <span className={"testing-date"}>
              {props.isDateVisible && messageDate}
            </span>
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