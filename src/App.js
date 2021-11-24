import './App.css'
import { Grid } from "@mui/material";
import React, { useEffect, useState } from 'react';
import Cards from './Components/Cards/Cards';


function App() {
  const [isLoading, setLoading] = useState(true);

  const [numbmatiere, setNumbMatiere] = useState(0)

  function fakeRequest() {
    return new Promise((resolve) => setTimeout(() => resolve(), 1500));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);

  if (isLoading) {
    return null;
  }
  return (
    <>
      <Grid container spacing={2} className='App'>
        <Grid item xs={12} style={{
          fontSize: '32px',
          fontWeight: 'bold',
          fontFamily: 'Tajawal',
          marginTop: '60px',
          marginLeft: "20px"
        }}>

          <span style={{
            color: '#191d75',
          }}>Taki</span>
          <span style={{
            color: '#1baef0'
          }} >Academy</span>
        </Grid>
        <Grid item xs={12} style={{
          color: '#13197c',
          fontSize: '18px',
          fontWeight: 'bold',
          marginLeft: '20px'
        }}>
          il ya {numbmatiere} matières
        </Grid>
      </Grid>
      <Cards numbmatiere={numbmatiere} setNumbMatiere={setNumbMatiere} />
    </>
  );
}

export default App;
