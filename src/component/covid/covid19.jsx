import React, { useEffect} from 'react';
import "./covid19.css"
import axios from 'axios';



export const Covid = (props) => {
  const {value} = props;
 
  // let [coviddata, setCoviddata] = useState({});
  useEffect(() => {
    async function fetchData() {

      try {
        const response = await axios.get(`https://covid-19.dataflowkit.com/v1/${value}`);
        props.setCoviddata(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();

  }, [value, props.setCoviddata]);

  return (
    <>
      <div className='covidcontainer'>
        <h3 className='covid'>COVID-19</h3>
        <h4 className='covid'>{props.coviddata["Country_text"]}</h4>
      </div>
      <div className='container'>
        <div className='covidcontainer'>
          <div className='heading'>
            <h5>Cases</h5>
              <p>{props.coviddata["Total Cases_text"]}</p>            
          </div>
        </div>
        <div className='covidcontainer'>
          <div className='heading'>
            <h5>Recovered</h5>
              <p>{props.coviddata["Total Recovered_text"]}</p>
          </div>
        </div>
        <div className='covidcontainer'>
          <div className='heading'>
            <h5>Deaths</h5>
              <p>{props.coviddata["Total Deaths_text"]}</p>
          </div>
        </div>
      </div>
    </>
  );
  
};