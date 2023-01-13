import { useState } from "react";
import App2 from "./App2";
import View from "./View";


function App() {
  const [array,setArray] = useState([{name:"test1",ischecked:true},{name:"test2",ischecked:true},{name:"test3",ischecked:true}])
  const handleChange = (e, indx) => {
    let temp =[...array];
    temp[indx].ischecked = ! temp[indx].ischecked;
    //console.log(temp)
    setArray(temp)
  }
  return (
    <>
   Heading <br/>
   <App2 array={array} handleChange ={handleChange} />
   <View array={array} />
   </>
  )
}

export default App;
