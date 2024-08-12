import { useEffect } from "react";
import Places from "./Places.jsx";
import { useState } from "react";


// const places =  localStorage.getItem('places');

export default function AvailablePlaces({ onSelectPlace }) {
  
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
 
useEffect(() => {
  async function fetchPlaces() {
  setIsFetching(true);
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();
  setAvailablePlaces(resData.places);
  setIsFetching(false);
}
fetchPlaces();
  }, []);



  // useEffect(() => {
  //   fetch("http://localhost:3000/places")
  //   .then((response) => {      
  //     return response.json();
  //   })
  //   .then ((resData) =>{
  //     setAvailablePlaces(resData.places);
  //   });
  // }, []);

   
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
