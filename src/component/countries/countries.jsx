import { useState , useEffect } from "react";
import axios from "axios";
import { Covid } from "../covid/covid19";
import"./input.css"
export default function Countries(props) {

  const [countries, setCountries] = useState([]);
  const [value, setValue] = useState('pakistan');

  async function fetchCountries() {
    let resp = await axios.get("https://restcountries.com/v3.1/all");
    setCountries(resp.data);
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  function handleSelectChange(e) {
    setValue(e.target.value);
  }

  return (
    <>
      <Covid value={value} coviddata={props.coviddata} setCoviddata={props.setCoviddata} />
      <div className="containeroption">
      <select onChange={handleSelectChange}>

        <option  value='' disabled >choose country</option>

        {
        countries.map((country, index) => (
       <option key={index} value={country.name.common}>{country.name.common}</option>
        ))
        }
      </select>
      </div>
    </>
  );
}