// import '../externalfiles/css/all.css';
// import '../externalfiles/css/bootstrap.css';
import React, { useState } from 'react';


function Textorm(props){

    const [text, setText] = useState("");

    const handleUpClick = ()=>{
        
        let newtText=text.toUpperCase();
        setText(newtText);
        props.showAlert("Text converted to upper case.","success");
    }


    const handleOnChange = (event)=>{

        setText(event.target.value);

    }

    const handleLowClick = ()=>{
        let newtText=text.toLowerCase();
        setText(newtText);
        props.showAlert("Text converted to lower case.","success")

    }
    const handleCopyClick = ()=>{
        var text = document.getElementById('myBox');
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        

        props.showAlert("Text copied to clipboard.","success")

    }

    const handleClearClick = ()=>{
        setText("");
        props.showAlert("Text Cleared!","warning")
    }
    // const handleRiverseClick = ()=>{
    //     let textArr=text.split(" ");

    //     let newtText = "";
    //     setText(textArr);
    // }




    return(
        <>
        <div className='container ' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1  >{props.heading}</h1>
            <div className="mb-3 ">
                <textarea style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} value={text} className="form-control border-3 mb-2" id="myBox" rows="8"></textarea>
                <button disabled={text.length===0} onClick={handleUpClick} className='btn btn-primary m-2'>Convert to upper case</button>
                <button disabled={text.length===0} onClick={handleLowClick} className='btn btn-primary m-2'>Convert to Lower case</button>
                <button disabled={text.length===0} onClick={handleClearClick} className='btn btn-primary m-2'>Clear Text</button>
                <button disabled={text.length===0} onClick={handleCopyClick} className='btn btn-primary m-2'>Copy Text</button>
                {/* <button  onClick={handleRiverseClick} className='btn btn-primary m-2'>Reverse Text</button> */}
            </div>
        </div>

        <div className='container  py-1'style={{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>

            <p> {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Priview</h2>
            <p>{text.length>0?text:"Enter something to Evaluate....."}</p>

        </div>
        
        </>

    );

}


export default Textorm