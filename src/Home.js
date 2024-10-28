import React, { useState } from "react";
import messages from "./data";
import "./App.css";
import ReactAudioPlayer from "react-audio-player";
import imgOne from "./29.jpg"
import uniqid from "uniqid";

function Home(props) {
  let audioCounter = 0;
  let imgCounter = 0;


  const audioArray = [];
  const picsArray = [];

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
    let isAudio = message.audio;
    let isImg = message.image;
    //const audioCounter = 0;
    let myAudio = `./public/audio/${audioCounter[index]}.aac`;
    let myImg = `${index}.jpg`;
    
    //const imgCounter = 0;
    /* 
    if(isAudio) {
      setAudioCounter(audioCounter + 1)
    };
    if(isImg) {
      setImgCounter(imgCounter + 1)
    };
    */

    return (
          <div
          className={sender === 'Karla' ? 'bubble-k' : 'bubble-a'}
          key={uniqid()} 
          >
            <span className="bubble-text" key={uniqid()} >
            {formattedMessage}
            {isAudio && <ReactAudioPlayer src={require(`./${index}.aac`)} autoPlay controls className="audio-player" />}
            {isImg && <img src={require(`./${index}.jpg`)} className="pic" alt="" /> }
            <span className={"testing-date"} key={uniqid()} >
              {props.isDateVisible && messageDate}
            </span>
            </span>
          </div>
    );
  });



  return (
    <>
      <section className="section home" key={uniqid()} >
         <ul className="messages-list" key={uniqid()} >{allMessages}</ul>
      </section>
    </>
  );
}

export default Home;