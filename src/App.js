import './App.css';
import Home from './Home';
import { BsArrowDown, BsArrowUp, BsCalendar, BsHeart, BsHeartFill } from 'react-icons/bs';
import { useState } from 'react';
import uniqid from "uniqid";



function App() {
  const [isDateVisible, setIsDateVisible] = useState(false);

  const scrollTop = (() => window.scrollTo({top: 0,}));
  const scrollBottom =(() => window.scrollTo({left: 0, top: document.body.scrollHeight}))

  console.log("Congratulations, you have found the Easter Egg! I'm crazy about you, Karla 💘👩‍❤️‍👨👫🐕🐕🦢💌🦢😘")

  return (
    <div className="App" id={uniqid()} >
        <h1 className='head'>
        Prologue 
        </h1>
        <div className="timestamps"id={uniqid()} >

        <p className='timestamp' id={uniqid()} >
        September 26, 2024, 11:23 PM, CST

        </p>
        <p className='timestamp'>
      September 27, 2024, 3:36 PM, GMT+7

        </p>
        </div>
       <Home isDateVisible={isDateVisible} setIsDateVisible={setIsDateVisible} id={uniqid()} />
 

       <footer className='footr'>
        <span>There's a girl I really, really like...</span>
        <span className='heart-icon'>🦢</span>
       </footer>
       <div className="calendar" onClick={() => setIsDateVisible(!isDateVisible)}>
        <BsCalendar size={18} color='gray' />
       </div>
       <div className="arrows">
        <span onClick={scrollTop}>
        <BsArrowUp size={18}/> 
        </span>
        <span className='arrow-bottom' onClick={scrollBottom}>
          <BsArrowDown size={18}/>
        </span>
       </div>
    </div>
  );
}

export default App;
