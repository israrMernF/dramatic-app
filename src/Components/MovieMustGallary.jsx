import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";
import toast from "react-hot-toast";
import { BiSolidErrorAlt } from "react-icons/bi";

const MovieMustGallary = ({ searchText = "" }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/Movies.json")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
          toast.success(`Loaded ${data.length} movies successfully!`);
      })
      .catch((err) => {
        console.error("Error loading movies:", err);
        setLoading(false);
        toast.error("Failed to load movies. Please try again later!");
      });
  }, []);

  // ✅ Filter movies safely
  const filteredMovies = movies
    .filter((movies) => movies.rating > 7)
    .filter((movies) =>
      movies.title.toLowerCase().includes(searchText.toLowerCase())
    );

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  if (loading) {
    return <div className="flex justify-center items-center h-64">
          <span className="loading loading-dots loading-xl text-yellow-400"></span>
        </div>
  }

  return (
    <div className="py-16 w-11/12 mx-auto">
      {filteredMovies.length > 0 ? (
        <Carousel
          autoPlay
          infinite
          arrows
          autoPlaySpeed={2500}
          responsive={responsive}
          pauseOnHover
          containerClass="pb-8"
        >
          {filteredMovies.map((movies) => (
            <div key={movies.id} className="px-2">
              <MovieCard movies={movies} />
            </div>
          ))}
        </Carousel>
      ) : (
        <p className="text-gray-400 text-center flex justify-center items-center gap-2">
            <BiSolidErrorAlt  className="text-3xl"/>
          No matching movies found
        </p>
      )}
    </div>
  );
};

export default MovieMustGallary;
