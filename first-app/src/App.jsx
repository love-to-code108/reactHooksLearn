import { useState } from "react";

function App() {


  // hooks can be only used inside of functional components it cant be used inside class components

  // every time my function runs hooks should run in the exact same order that  it is in  which basically means hooks cant be conditionally rendered or used ,          we basically cant use hooks inside a if else or inside ternery operators.  so basically no conditional rendering   the easiest way to solve any problems related to this is keep the hooks as global components rather than inside any loops or any other blocks to solve this issue. 


  //------------------------ ABOUT USESTATE HOOK BELOW HERE ---------------------


  // the useState hook always returns an array containing 2 elements , the first element is the current state of the element and the second element is the function to update the state of that element

  const [count, setCount] = useState(0);
  const [object, setObject] = useState({ value: 1, theme: "dark" });
  const [runOnce, setRunOnce] = useState(() => { console.log("Hello world"); return 69 })


  // call this function is to decrease the count of the count state by 1
  const decreaseCount = () => {
    setCount(count - 1)
    // but there is a slight problem with this because with count we get the current state of count from when the component has been rendered as a resut even if you do setCount(count - 1) two times only only 1 is being substracted because the value of count is 0 during component render so 0 -1 = -1 and 0 - 1 =-1 again ........ so inorder to  solve this problem we use the function version of setCount that is like this line below

    setCount(variableName => variableName - 100);

    // this variableName variable has the current value of count that has been changed after the component render so now the value of count will go down by 2 instead of by 1
  }

  //  call this function to increase the count of the count state by 1
  const increaseCount = () => {
    return setCount(prevCount => prevCount + 100)
  }





  // this if for the run once and setObject things
  const changeRunOnce = () => {

    setRunOnce(e => e + 69)
  }



  // call to change the value by 10
  const changeValue = () => {
    setObject(previousState =>  {
    
    return { ...previousState , value : previousState.value + 1};
    
    })
      
  }
  
  
  const changeTheme = () => {
    setObject( (e) => {
      return { ...e , theme : "green" };

    })
  }



  return (
    <div>
      <button onClick={increaseCount}>+</button>

      <span>{count}</span>

      <button onClick={decreaseCount}>-</button>

      <h1>{object.value}</h1>
      <h1>{object.theme}</h1>
      <button onClick={changeValue}>click to change value</button>
      <button onClick={changeTheme}>click to change theme</button>

      <br />
      <br />
      <br />
      <h1>{runOnce}</h1>
      <button onClick={changeRunOnce}>Click to change runOnce</button>
    </div>
  );
}

export default App

