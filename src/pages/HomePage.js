
import { useState } from "react";

import SearchBar from "../components/SearchBar";

import MovieList from "../components/MovieList";

import FilterDropdown from "../components/FilterDropdown";

import {fetchMovies} from "../api/api";



function HomePage(){

    const [movie,setMovies] =useState([]);
    const[filterType,setFilterType]= useState('');



    const handleSearch =async (searchTerm,type) => {
        const result =await fetchMovies(searchTerm,type);
        setMovies(result)
    }






    const handleFilterChange =(type) => {
        setFilterType(type)
    }




    return(
        <div className="home-page">
            <h1>Find your movie</h1>


            {/* searchbar */}

            <SearchBar onSearch ={handleSearch} onTypeChange ={handleFilterChange}/>
            <FilterDropdown onFilterChange ={handleFilterChange}/>
            <MovieList movies ={movie} />
        </div>
    )

}

export default HomePage

