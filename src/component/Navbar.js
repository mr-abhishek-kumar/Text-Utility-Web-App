// import '../externalfiles/css/all.css';
// import '../externalfiles/css/bootstrap.css';
import { Link } from 'react-router-dom';


function Navbar(props){
  
    return (
      
      <div className={`text-danger container-fluid py-2 mb-2 bg-${props.mode}`} style={{borderBottom:'2px solid blue'}}>
        <div className="row t3 ">
        <div className=" col-s mx-auto " >
          <nav className=" navbar navbar-expand-lg tex-danger p-0" id="menu" >
            <div className="container-fluid" >
              <button className="navbar-toggler bg-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse text-center ps-5" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className={`nav-link text-${props.mode==="light"? "dark" : "light"}`} aria-current="page" to="/"><i className="fa fa-home me-1"></i>Home</Link>
                  </li>
                  <li className="nav-item ">
                    <Link className={`nav-link text-${props.mode==="light"? "dark" : "light"}`} to="/about"><i className="fa fa-circle-info me-1" ></i>About Us</Link>
                  </li>
                
                </ul>
                <div className="d-flex">
                  <div className="bg-primary rounded mx-2" style={{height:'30px', width:'30px',cursor:'pointer'}} onClick={()=>{props.toggleMode("primary")}} ></div>
                  <div className="bg-warning rounded mx-2" style={{height:'30px', width:'30px',cursor:'pointer'}} onClick={()=>{props.toggleMode("warning")}} ></div>
                  <div className="bg-success rounded mx-2" style={{height:'30px', width:'30px',cursor:'pointer'}} onClick={()=>{props.toggleMode("success")}} ></div>
                  <div className="bg-danger rounded mx-2" style={{height:'30px', width:'30px',cursor:'pointer'}} onClick={()=>{props.toggleMode("danger")}} ></div>
                  <div className="bg-light rounded mx-2" style={{height:'30px', width:'30px',cursor:'pointer'}} onClick={()=>{props.toggleMode("light")}} ></div>
                  <div className="bg-dark rounded mx-2" style={{height:'30px', width:'30px',cursor:'pointer'}} onClick={()=>{props.toggleMode("dark")}} ></div>
                </div>

                {/* <div className="form-check form-switch">
                  <input onClick={()=>{props.toggleMode(null)}} type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" />
                  <lable className={`form-check-lable text-${props.mode==="light"? "dark" : "light"}`} htmlFor="flexSwitchCheckDefault">Toggle Mode</lable>
                </div> */}

              </div>
            </div>
          </nav>
        </div>
     </div>
    </div>


    );



}


export default Navbar;