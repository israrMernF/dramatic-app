import React from 'react'
import Navbar from '../Components/Navbar'
import ImageCarousel from '../Components/ImageCarousel'
import MovieGallary from '../Components/MovieGallary'
import { Toaster } from 'react-hot-toast'

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <ImageCarousel></ImageCarousel>

      <main>
        <MovieGallary></MovieGallary>
        <Toaster position='top-right'></Toaster>
      </main>
    </div>
  )
}
