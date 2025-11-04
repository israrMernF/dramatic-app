import React, { useEffect, useState } from 'react'
import CategoriesNavbar from './CategoriesNavbar';
import toast from 'react-hot-toast';
import MovieCard from './MovieCard';

const MovieGallary = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectCategory, setSelectCategory] = useState("All");
    const [showAll, setShowAll] = useState(false);

    useEffect(() =>{
        fetch('/Movies.json')
        .then(res => res.json())
        .then(data => setMovies(data))
        .catch((error) =>{
            console.log(error);
            toast.error("Failed to movie Data!!!")
        })
        .finally(()=> setLoading(false))
    },[])

    const categories = ["All", ...new Set(movies.map(m => m.category))];
    const filterMovies = selectCategory === "All" ? movies :movies.filter(m => m.category === selectCategory);
    const visibleMovies = showAll ? filterMovies : filterMovies.slice(0,8);
  return (
    <div className='w-11/12 mx-auto py-16'>
        <h1 className='text-lg  lg:text-xl '>RECOMMENDED FOR YOU</h1>
      <CategoriesNavbar
      categories= {categories}
      selectCategory= {selectCategory}
      setSelectCategory= {setSelectCategory}>
      </CategoriesNavbar>

      {
        loading ? 
        (<div className='flex justify-content-center items-center h-64'>
          <span className="loading loading-dots loading-xl text-yellow-500"></span>
        </div>)
        : filterMovies.length > 0 ?
        (
          <>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {
            visibleMovies.map(movies => (
              <MovieCard
              key={movies.id}
              movies = {movies}
              ></MovieCard>
            ))
          } 
          </div>

          {
            filterMovies.length > 8 && (
              <div className='flex justify-center mt-8'>
                <button
                className='px-6 py-2 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition-all duration-300'
                onClick={() => setShowAll(!showAll)}
                >{showAll ? "Show Less" : "Show More"}</button>
              </div>
            )
          }
          </>
        ) : (
          <p className='text-gray-400 text-center'>No Movie Found</p>
        )
      }
    </div>
  )
}
export default MovieGallary;