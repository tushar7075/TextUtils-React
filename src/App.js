
import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/alert';
// import About from './components/About';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const[Text, setText] = useState('dark');
  const[alert,setalert] = useState(null);

  const showAlert = (message,type)=>{//this function is used to convert alert into object.
    setalert(
      {
        msg:message,
        type:type
      })
      setTimeout(() => {
        setalert(null);
      }, 1500);
  }

  const[Mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(Mode==='dark'){
      setMode('light');
      setText('dark');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled",'success');
    }
    else{
      setMode('dark');
      setText('light');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled",'success');
    }
  }
  return (
    // Code written bellow is called JSX
    // we can only return only 1 component in function 
    // syntax of JSX is same as HTML just we change class-->className
    //for ---> htmlFor
    //tab ---> tabIndex
    // if we want to return more than 1 component then we have to use JSX fragment
    <>
    {/* this is component 1 */}
    {/* <h1>Tushar</h1> */}

    {/* this is component 2 */}
    {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Tushar
        </a>
      </header>
    </div> */}





    {/* <BrowserRouter> */}
        <Navbar
          title="TextUtils2"
          aboutText="TextAbouts"
          mode={Mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        {/* <div className="container my-4" mode={Mode}>
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path="/"
              element={ */}
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={Mode}
                />
              {/* }
            ></Route>
          </Routes>
        </div> */}
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
