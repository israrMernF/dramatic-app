import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import ImageCarousel from '../Components/ImageCarousel'
import MovieGallary from '../Components/MovieGallary'
import { Toaster } from 'react-hot-toast'
import MovieMustGallary from '../Components/MovieMustGallary'
import Footer from '../Components/Footer'

export default function Home() {
  const [searchText, setSearchText] = useState("")
  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}></Navbar>
      <ImageCarousel></ImageCarousel>


      <main>
        <MovieGallary></MovieGallary>
        <Toaster position='top-right'></Toaster>
        <MovieMustGallary searchText= {searchText}></MovieMustGallary>
      </main>
      <Footer></Footer>
    </div>
  )
}
