import React, { useState, useEffect } from "react";
import axios from 'axios';
import Photos from './Photos'; 
import "./App.css";

const photosApi = 'https://lambda-github-api-server.herokuapp.com/'; 

function App() {
  const [nasaData, setNasaData] = useState({});

  useEffect(() => {
    axios.get(photosApi)
      .then(response => {
        setNasaData(response.data);
      })
      .catch(error => {
        console.log("PROBLEMS!")
      });
  }, []);

  return (
    <div className="App">
      <Photos 
        Title={nasaData.title}
        Image={nasaData.url}
        Story={nasaData.explanation}
      />
    </div>
  );
  
}

export default App;
