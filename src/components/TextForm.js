import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked : " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success")
  }
  
  const handleLoClick = () => {
    //console.log("Lowercase was clicked : " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success")
  }
  
  const handleClearClick = () => {
    //console.log("Lowercase was clicked : " + text);
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared", "success")
  }

  const handleOnChange = (event) => {
    //console.log("On Change");
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  //text = "new text"; // wrong way to change the state
  //setText("new text"); // Correct way to change the state
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
      <h2 >{props.heading}</h2>
      <div className="mb-3">
          <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Conver to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Conver to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h3>Your Text Summary</h3>
      <p>{text.split(" ").length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter something in the text box above to preview it here'}</p>
    </div>
    </>
  )
}
