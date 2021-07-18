import{useState} from 'react'
import './Index.css'

const api={
  key: "f84e73f85faac17c8a02db694a0619c0",
  base: "https://api.openweathermap.org/data/2.5/"}


function Home() {
  const [query , setQuery]= useState('');
  const [weather , setWeather]= useState({});

  const search = (evt)=>{
    if (evt.key==="Enter"){
      // dar inja formate monaseb k tooye site ham gofte bood ra vared mikonim. in dar vaqw urle edameye api.base hast
      fetch(`${api.base}weather?q=${query}&APPID=${api.key} `)
      .then(res=>res.json())
      .then(result=>{
        setWeather(result);
        setQuery(""); });
        
    }
  }


  const dateBuilder=(d)=>{
    let months=['january','fabruary', 'March', 'April', 'May', 'June', 'july', 'Agust' ,'september' ,'october', 'november', 'december'];
    let days =['sunday' , 'monday' , 'Tuesday'  , 'Wendsday', 'Thursday', 'Friday', 'saturday'];

    let day= days[d.getDay()];
    let date= d.getDate();
    let month = months[d.getMonth()];
    let year= d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }


  
  return (
 
    <div className="Home">

        <main>
        <div className="searchBox">
            <input type='text' className="searchBar" placeholder="search for a city..."
                onChange={e=>setQuery(e.target.value)}
                value={query}
                onKeyPress={search}
            />
        </div>
        
        {(typeof weather.main !="undefined")?(
          <div>
            <div className='LocationBox'>
              <div className="Location">{weather.name},{weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>


            <div className='weatherBox'>
              <div className='temp'>{Math.round(weather.main.temp)}°C</div>
              <div className='weather'>{weather.weather[0].main}</div>
            </div>

          </div>
      ):( '' )}
     


    </main>
    
    </div>
  );
}

export default Home;
