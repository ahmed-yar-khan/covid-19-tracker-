import { useState } from "react";
import { MylineChart } from "./component/graph/graph";
import Countries from "./component/countries/countries";

function App() {
  let [coviddata, setCoviddata] = useState({});
 
  return <>
    
    <Countries coviddata={coviddata} setCoviddata={setCoviddata}/>
    <MylineChart coviddata={coviddata} setCoviddata={setCoviddata}/>
  </>
}



export default App;