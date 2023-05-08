import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const[mode,setmode]=useState('light');
  const[Alert,setAlert]= useState(null)
  const[c,setc]=useState('black')

   const showal=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
   }

  const pagemode=()=>{
    if(mode==='light'){
    showal("Dark mode enable","Success")
    setc('light')
    document.body.style.backgroundColor='black'
    document.title='myReact-darkmode'
    setmode('black');}
    else{
    showal("Light mode enable","Success")
    setc('black')
    document.body.style.backgroundColor='white'
    setmode('light')}
  }
return(
  <Router>
  <>  
     <Navbar mode={mode} pagemode={pagemode} c={c}/>
     <div className="container">
     <Routes>
       <Route path='/' element={<About/>}/>
       <Route path="/TextForm" element={<TextForm heading="Enter your text below" c={c} pagemode={pagemode} mode={mode}/>} />
     </Routes>
     </div>
  </>
  </Router>
);
}

export default App;
