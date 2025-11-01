import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../index.css'; // custom styles

// Import images
import slide1 from '../assets/banner.jpg';
import slide2 from '../assets/banner2.jpg';
import slide3 from '../assets/movie.jpg';
import slide4 from '../assets/squad.webp';
import slide5 from '../assets/Wednesday.webp';

export default function ImageCarousel() {
  const slides = [slide1, slide2, slide3, slide4, slide5];

  return (
   <div className='w-full'>
     <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true, dynamicBullets: true }}
      autoplay={{ 
        delay: 3000,
        disableOnInteraction: false 
    }}
    loop={true}
    spaceBetween={20}
    slidesPerView={1}
    className="mySwiper w-full h-[60vh] md:h-[70vh] lg:h-[90vh]"
      
    >
      {slides.map((img, index) => (
        <SwiperSlide key={index}>
          <img 
          src={img} 
          alt={`Slide ${index + 1}`} 
          className="w-full h-full object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
   </div>
  );
}
