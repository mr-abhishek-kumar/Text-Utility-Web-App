

import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import  Alert  from './component/Alert';
import About from './component/About';

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'



function App() {

  const [mode, setMode] = useState("light");
  
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    });

    setTimeout(()=>{
      setAlert(null);
    },2000)
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
  }

  const toggleMode = (cls)=>{

      removeBodyClasses();
     document.body.classList.add('bg-'+cls);
     showAlert(cls+"  mode has been enabled",cls);
     setMode(mode=='dark'?'light':'dark')

    // if(mode==='light'){
    //   setMode("dark");
    //   document.body.style.backgroundColor="#042743";
    //   showAlert("Dark mode has been enabled","success");
    // }
    // else{
    //   setMode("light");
    //   document.body.style.backgroundColor="white";
    //   showAlert("light mode has been enabled","light");

    // }

  
    
  }



  return (
    <>
        <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
          <Routes>
            <Route path='/about' element={<About mode={mode} />} />
            <Route path='/' element={<TextForm heading="Enter Text To Analyze." showAlert={showAlert} mode={mode}/>} />
          </Routes>
        </BrowserRouter>

    </>
  );
}

export default App;
