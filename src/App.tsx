import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import movieService from './services/MovieService';
import PaginatedTable from './components/PaginatedTable';
import MovieSearch from './components/MovieSearch';
import { Movie } from './interfaces/MovieInterface';
import { SearchCriteriaInterfaceWithPagination } from './interfaces/SearchCriteriaInterface';


function App(): JSX.Element {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearch = async (searchCriteria: SearchCriteriaInterfaceWithPagination) => {
    try {
      searchCriteria.pageNumber = 1;
      searchCriteria.pageSize = 10;
      const results = await movieService.getAll(searchCriteria);
      setMovies(results.data);
      console.log('Request successful', results);
    } catch (error) {
      console.error('Error searching for movies:', error);
    }
  };

  useEffect(() => {
    let searchCriteria = {
      pageNumber: 1,
      pageSize: 10
    };

    movieService.getAll(searchCriteria).then((response) => {
      setMovies(response.data);
    });
  }, []);

  return (
    <>
      <h1 className="mainText my-4">Movie Search</h1>
      <MovieSearch onSearch={handleSearch} />
      <PaginatedTable data={movies} itemsPerPage={10} />
    </>
  );
}

export default App;