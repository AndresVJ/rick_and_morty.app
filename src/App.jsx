import { useEffect, useRef, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import getRandomNumber from "./utils/getRamdomNumber";
import InfoLocation from "./components/InfoLocation";
import axios from "axios";
import ResidentCard from "./components/ResidentCard";

function App() {
  const [locationId, setLocationId] = useState(
    Math.floor(Math.random() * 126) + 1
  );

  const url = `https://rickandmortyapi.com/api/location/${locationId}`;
  const [location, getLocation, isLoading, hasError] = useFetch(url);
  useEffect(() => {
    getLocation();
  }, [locationId]);

  const inputLocation = useRef();

  const handleLocation = (e) => {
    e.preventDefault();
    setLocationId(inputLocation.current.value.trim());
  };

  return (
    <div className="app">
      <header className='head'> 
      <img className='head_image' src="/images/image 3.jpg" alt="" />
      <img className='small-img'src="/images/image 2.png" alt="" />
      </header>
      <form className="app_form" onSubmit={handleLocation}>
        <input className="app_input" ref={inputLocation} type="text" />
        <button className="app_btn">search</button>
      </form>
      <InfoLocation location={location} />
      {isLoading ? (
        <h2>Loading...</h2>
      ) : hasError || locationId === '0'? (
        <h2> ❌ hey! you must provide and id from 1 to 126 </h2>
      ) : (
        <>
          <div className='app_card-container'>
            {location?.residents ? (
              location.residents.map((url, index) => (
                <ResidentCard key={index} url={url} />
              ))
            ) : (
              <p>No residents availaSle</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
