import axios from "axios";
import  { useEffect, useState } from "react";

function Add() {
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    const getResults = async () => {
      if (searchValue !== "") {
        axios.get(`https://www.omdbapi.com/?s=${searchValue}&apikey=adb0d0ae`)
        .then(res => {
          res.data.Search&& console.log(res.data.Search)
          res.data.Search&& setResults(res.data.Search)
        })
      }
    };
    getResults();
  }, [searchValue]);
  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content pd-2 mg-auto 
        ">
          <div className="input-container flex  justify-center align-center mt-10 
          ">
            <input type="text" placeholder="search for a movie" className="  border-inherit	 border-2 border-solid rounded px-2 py-1 w-100 border-radius-10 shadow-2xl "  
            value={searchValue} name="search"
            onChange={handleSearchChange}/>
          </div>
          <ul className="results list-unstyled w-100 flex d-flex flex-wrap justify-content-center align-items-center p-0 m-0 mt-4 gap-4
          ">
            {results&&results.map((movie) => (
              <>
              <li className="result-item list-unstyled d-flex flex-wrap justify-content-center align-items-center gap-4
              ">
                <img src={movie.Poster} alt="movie poster" className="img-fluid rounded shadow-2xl border-radius-10" />
                <div className="movie-info">
                  <h3>{movie.Title}</h3>
                  <span>{movie.Year}</span>
                  <button className="btn btn-primary">Add to Watchlist</button>
                </div>
              </li>
              </>
            ))}


          </ul>
        </div>
      </div>
    </div>
  );
}

export default Add;
