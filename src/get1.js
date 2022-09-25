import React from "react"
import { useState, useEffect } from "react";
import axios from "axios"

const url = "https://catfact.ninja/fact";
//const url = "https://dummyjson.com/products";

export default function App() {
  const [cat, setCat] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCats = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const cat = await response.json()
      setCat(cat);
      console.log(cat);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error)
    }
  };

  useEffect(() => {
    getCats();
  },[]);

  if(loading) {
    return(  <main>
    <section>
      <h1>Loading...</h1>
    </section>
  </main>)
  } else {

  return (
    <main>
      <h1>Interesting facts about cats</h1>
      <h3>Created by Milan Matejic</h3>
      <section>
        <p>{cat.fact}</p>
        <button type='button' onClick={()=> getCats()}>Reload</button>
      </section>
    </main>
  );
  }
}