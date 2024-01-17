import './App.css';
import Axios from "axios"
import { useState } from "react";
const KEY='a0fe767be39a0cd3f02867933cb8f471';

const App =()=> {
  const [city,setCity]=useState("");
  const [data,setData]=useState();
  const fetchData = async () => {
    try{
      const response=await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`)
      setData(response.data);
    }catch(err){
      alert('Please Enter the City Name');
    }
   
  } 


  return (
    <div className='App'> <h1>SR Weather App</h1> 
    <div className='input-container'>
    <input type="text" className='input' value={city}
    onChange={e=>setCity(e.target.value)} placeholder="Enter city name"></input>
    
    <button className="button"  onClick={fetchData}>fetch</button>

      </div>
    
<div>
{data &&(
<div className='container'>
<h1 className='city-name'> {data.name},{data.sys.country}</h1>
<div className='weather-info'> 
<div className='temp'>{Math.round(data.main.temp)} C</div>
<div>
  <div>Lat -{data.coord.lat}</div>
  <div>Lon -{data.coord.lon}</div>
</div>
</div>


</div>

)}


</div>

     </div>
  )
}

export default App;
