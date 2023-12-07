import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked "+ text);
        let newText = text.toUpperCase(); // whatever we wrote that will store as text variable and we are changing text into upper case
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLowerClick = ()=>{
      let newText = text.toLowerCase(); // whatever we wrote that will store as text variable and we are changing text into upper case
      setText(newText);
      props.showAlert("Converted to Lowercase","success");
  }
  const handlecleartext = ()=>{
    let newText = "" // whatever we wrote that will store as text variable and we are changing text into upper case
    setText(newText)
}
    //whenever we write something in textarea this handleOnchange function will invoke
    const handleOnChange = (event)=>{
        // console.log("Onchange was clicked" );
        setText(event.target.value); // if we dont write this then we can not write anything in textarea
        //basically with the use of this we are adding texts with text variable
        //text + our written text;
        //after this we can do any operations on our written text with only text variable.
    }
    
  const [text, setText] = useState('');
  //here text is state variable and setext is function we can only change value of text with the use of settext function
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'? 'white':'black'}}>
        <h3>{props.heading} </h3>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode === 'dark'? '#dbdde0':'white'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' style={{backgroundColor: props.mode === 'dark'? 'black':'black', border:'0px'}} onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' style={{backgroundColor: props.mode === 'dark'? 'black':'black', border:'0px'}} onClick={handleLowerClick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-2' style={{backgroundColor: props.mode === 'dark'? 'black':'black', border:'0px'}} onClick={handlecleartext}>Clear Text</button>

    </div> 
    <div className="container my-3" style={{color: props.mode === 'dark'? 'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words & {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in the textbox above to preview here"}</p>
    </div>
    </>
    
  )
}
