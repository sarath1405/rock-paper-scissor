import Header from "./components/Header"
import StartBtn from "./components/StartBtn"
import Box from './components/Box'
import { useState, useEffect } from "react"
import Select from "./components/Select"

function App() {
  var b = Math.floor(Math.random()*10);
  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)
  const [Uscore, setUscore] = useState(0)
  const [Cscore, setCscore] = useState(0)
  const [Cimage, setCimage] = useState()
  const [Uimage, setUimage] = useState()

  const click = () => {
    setUscore(0)
    setCscore(0)
    var a = Math.floor(Math.random()*10);
    a%=3;
    setCimage(a)
    setShow(!show)
    if(show1) setShow1(false)
  }

  const run = (i) => {
    setTimeout(function() {
      setCimage(i%3)
    }, 100*i)
  }

  const rock = () => {
    if(!show1) setShow1(true)
    setUimage(0)
    for(var i=0; i<b+20; i++) {
      run(i);
    }
    if(Uimage===0 && Cimage===1) setCscore(Cscore+1)
    else if(Uimage===0 && Cimage===2) setUscore(Uscore+1)
    else if(Uimage===1 && Cimage===0) setUscore(Uscore+1)
    else if(Uimage===1 && Cimage===2) setCscore(Cscore+1)
    else if(Uimage===2 && Cimage===0) setCscore(Cscore+1)
    else if(Uimage===2 && Cimage===1) setUscore(Uscore+1)
  }

  const paper = () => {
    if(!show1) setShow1(true)
    setUimage(1)
    for(var i=0; i<b+20; i++) {
      run(i);
    }
    if(Uimage===0 && Cimage===1) setCscore(Cscore+1)
    else if(Uimage===0 && Cimage===2) setUscore(Uscore+1)
    else if(Uimage===1 && Cimage===0) setUscore(Uscore+1)
    else if(Uimage===1 && Cimage===2) setCscore(Cscore+1)
    else if(Uimage===2 && Cimage===0) setCscore(Cscore+1)
    else if(Uimage===2 && Cimage===1) setUscore(Uscore+1)
  }

  const scissor = () => {
    if(!show1) setShow1(true)
    setUimage(2)
    for(var i=0; i<b+20; i++) {
      run(i);
    }
    if(Uimage===0 && Cimage===1) setCscore(Cscore+1)
    else if(Uimage===0 && Cimage===2) setUscore(Uscore+1)
    else if(Uimage===1 && Cimage===0) setUscore(Uscore+1)
    else if(Uimage===1 && Cimage===2) setCscore(Cscore+1)
    else if(Uimage===2 && Cimage===0) setCscore(Cscore+1)
    else if(Uimage===2 && Cimage===1) setUscore(Uscore+1)
  }

  return (
    <div className="App">
      <Header/>
      <div className="bigcontainer">
        <div className="container">
            <Box head={'YOU'} src={Uimage} alt={'image'} show={show1} score={Uscore}/>
            <Box head={'COMPUTER'} src={Cimage} alt={'image'} show={show1} score={Cscore}/>
        </div>
      </div>
      {show?<Select rock={rock} paper={paper} scissor={scissor}/>:''}
      <div className="start-button">
          {!show?<StartBtn text={'START GAME'} click={click}/>:<StartBtn text={'END GAME'} click={click}/>}
      </div>
    </div>
  );
}

export default App;
