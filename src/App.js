import React, { useState, useEffect } from "react";
import axios from 'axios';
import Photos from './Photos'; 
import "./App.css";

const photosApi = 'https://lambda-github-api-server.herokuapp.com/'; 

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
  
  useEffect(() => {
    const photosApi = axios.get(photosApi);
    Promise.all([photosPromise])
      .then(([photosPromise]) => {
        setStock({
          photos: photosAxios.data,
        });
      })
  }, []);
  
  return (
    <div className="App">
      {
        error
      }
      <Photos photos={stock.photos} addToApp={addToApp} />
    </div>
  );
}

export default App;
