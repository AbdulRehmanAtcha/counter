import './App.css';
import plus from "./icons/plus.png";
import minus from "./icons/minus.png";
import moonIcon from "./icons/moon.png";
import sunIcon from "./icons/sun.png";
import { useState } from 'react';
function App() {
  const [counter, SetNum] = useState(0);
  const [themeMode, setThemeMode] = useState(true);

  

  return (
    <body id='body' className={themeMode ? "dark" : "light"}>
      <div className="head">
        <div className="toggle">
          <button id='moon' onClick={()=>{
            setThemeMode(!themeMode)
          }}><img src={themeMode? sunIcon: moonIcon} alt="moon" width="25" height="25" /></button>
          {/* <button id='sun' onClick={()=>{
            setThemeMode(themeMode)
          }}><img src={sunIcon} alt="sun" width="30" height="30" /></button> */}
        </div>
      </div>
      <div className='main-box'>
        <div className="counter">
          <h2>{counter}</h2>
        </div>
        {/* <br /> */}
        <div className="counter-buttons">
          <div className="less" onClick={() => {
            SetNum(counter - 1);
          }}>
            <button className='less-button' ><img src={minus} width="20" height="20" alt='minus' /></button>
          </div>
          <div className="high" onClick={() => {
            SetNum(counter + 1);
          }}>
            <button className='high-button' ><img src={plus} width="24" height="24" alt='plus' /></button>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;


// let body = document.getElementById("body");
// {
//   // body.classList.add("dark");
//   document.getElementById("moon").style.visibility = "hidden";
//   let moon = document.getElementById("moon");
//   let sun = document.getElementById("sun");
//   moon.addEventListener("click", () => {
//     body.classList.add("dark");
//     body.classList.remove("light");
//     document.getElementById("moon").style.visibility = "hidden";
//     document.getElementById("sun").style.visibility = "visible";
//   });
//   sun.addEventListener("click", () => {
//     body.classList.remove("dark");
//     body.classList.add("light");
//     document.getElementById("sun").style.visibility = "hidden";
//     document.getElementById("moon").style.visibility = "visible";
//   });
// }
