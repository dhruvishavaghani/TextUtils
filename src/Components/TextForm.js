import React,{useState} from 'react'

export default function TextForm(props) {
    
    const uppercase=()=>{
        console.log("btn clicked")
        let newtext=text.toUpperCase();
        setText(newtext)
    }

    const lowerc=()=>{
      let ntext=text.toLowerCase();
      setText(ntext)
    }
    const onc=(event)=>{
        setText(event.target.value);
    }
    const [text,setText]=useState('Enter text here');
  return (
    <div className={`container text-${props.c}`}>
      <div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className={`form-control text-${props.c} bg-${props.mode}`} value={text} onChange={onc} id="exampleFormControlTextarea1" rows="12"></textarea>
      </div>
      <button className={`btn text-${props.c}`} onClick={uppercase}>Convert to upper case</button>
      <button className={`btn text-${props.c}`} onClick={lowerc}>Convert to lower case</button>
    </div>
    <div className='container my-3'>
    <h1>Your text Summary</h1>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} chars</p>
    <p>{0.008*text.split(" ").length} Minutes read</p>
    <p>Preview</p>
    <p>{text}</p> 
    </div>
    </div>
  )
}
