import React from 'react';
import './App.css';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa6';

function App(){
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = ()=>{
    setIsOpen(!isOpen);
  };

  return (
    <>
        <div className='header'>
          <div className='container'>
              <div className='logo' style={{
                backgroundImage: `url(${require('./images/boylogo.png')})`, //It's working using require in public>imagesP>boylogo.png
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                margin: "10px 30px",
                }}>
                  {/* Import result is the URL of your image */}
                  {/* <img src={boylogo} alt="Logo" style={{weith:100,height:80}} /> */}
                  <a href='/' className='logo'>Soonaakil</a>
              </div>{/* End of logo */}
              <nav className='navbar'>
              <ul className={isOpen ? "nav-link active" : "nav-link"}>
                    <a href='/' className='active'>Home</a>
                    <a href='/'>About</a>
                    <a href='/'>Contact</a>
                    <a href='/'>Sevices</a>
                    <a href='/'>Sign up</a>
                 </ul>
                 <div className="icon" onClick={toggleMenu}>
                    <FaBars />
                </div>
              </nav>
          </div>{/* End of container */}
        </div>{/* End of header */}
        {/* <div className='content'>
          <AddImage />
        </div> */}
    </>
  )
}

export default App
