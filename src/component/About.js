import { useState } from "react";


function About(props){


    // const [myStyle, setMyStyle] = useState({
    //   color:"black",
    //   backgroundColor:"white"
    // });
    // const [modeTxt, setModeTxt] = useState(" Enable Dark Mode")
    // const toggleStyle= ()=>{

    //   if (myStyle.color=='white'){
    //     setMyStyle({
    //       color:"black",
    //       backgroundColor:"white"
    //     });

    //     setModeTxt("Enable Dark Mode")
    //   }

    //   else{
    //     setMyStyle({
    //       color:"white",
    //       backgroundColor:"black"
    //     });

    //     setModeTxt("Enable Light Mode")
    //   }

    // }

    return(
      <>
        <div className="container p-2"style={{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'black'}}>
          <h1>About Us</h1>
            <div className="col-sm-5 mx-auto" style={{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'black'}}>
              <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4" style= {{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'black'}}>
                    </div>
                    <div className="col-md-8" style={{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'black'}}>
                      <div className="card-body">
                        <h5 className="card-title">Er. Abhishek Kumar Mishra</h5>
                        <p className="card-text">Hi, Myself is Abhishek Kumar. I'm student of computer science and engineering. Currently i'm persuing diploma in cs 2nd year from Government Polytechnic College Shahhajanpur.</p>
                        <p className="card-text">
                          <small><i className="fa fa-phone"></i> 91-9793409349</small><br/>
                          <small><i className="fa fa-envelope"></i> abhishramishra07@gmail.com</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          {/* <div className="container">
            <button onClick={toggleStyle} type="button" className="btn btn-primary m-3">{modeTxt}</button>
          </div> */}
        </div>
        
        </>
    );
}

export default About;