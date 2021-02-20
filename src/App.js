import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Forecast from "./components/Forecast";
import Error from './components/Error'
import {toggleState} from "./utility";

function App() {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  const [request, setRequest] = useState({
    city: "",
    country: "",
  });
  const [check, setCheck] = useState(false);
  const [result, setResult] = useState({});
  const [error, setError] = useState(false);

  const { city, country } = request;

  useEffect(async () => {
    if (check) {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
      );
      const data = await res.json();
      setResult(data);
      setCheck(false);

      if(result.cod ==='404'){
        toggleState(1500, setError)
      }
    }
  }, [check]);

  let component;
 if(error){
   component = <Error message='No hay resultados disponibles'/>
 }else{
   component = <Forecast main={result.main} name={result.name}/>
 }

  return (
    <div className="App">
      <Header title="La app del clima" />
      <div className="form-container">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                setRequest={setRequest}
                request={request}
                setCheck={setCheck}
              />
            </div>

            <div className="col m6 s12">
              {component}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
