import React from "react"
import { useState, useEffect } from "react";
import axios from "axios"
import "./rstyles.css";

const url = "https://catfact.ninja/fact";


export default function App() {
  const [fc, setFc] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true);
    axios
    .get(url)
    .then(
      response => 
      {
        setLoading(false);
        setFc(response.data);
      }
    )
    .catch (error =>
      {
      setLoading(false);
      console.log(error)
      }
    )
  };

  useEffect(() => {
    getData();
  },[]);

  return(
    <>
    {loading?
    (
    <div>
      <h1>Loading...</h1>
    </div>
    )
    :
    (
      <>
      <h1>Facts refresh on reload</h1>
      <div>
        <p>{fc.fact}</p>
        <button type='button' className='btn' onClick={()=> getData()}>Reload</button>
      </div>
      </>
    )
    }
    </>
  )
}