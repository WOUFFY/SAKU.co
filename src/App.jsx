import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Main_content_wrap } from './components/Main_content_wrap'
import { Footer } from './components/Footer'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="kurni turu Moment">
        <Navbar></Navbar>

        <div className="nama">
            <h2>SAKU.co</h2>
            <h3>Sistem Pemesanan Kantin UPNVJ</h3>
        </div>

        <Main_content_wrap></Main_content_wrap>

        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          >
          <SwiperSlide><img className="sushi rounded-lg" src="./img/sushi.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className="burger rounded-lg" src="./img/burgir.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className="salmon rounded-lg" src="./img/chicken.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className="spaghetti object-bottom rounded-lg" src="./img/spaghett.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className="telur rounded-lg" src="./img/telur.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className="mie rounded-lg" src="./img/mie.jpg" alt="" /></SwiperSlide>
        </Swiper>
        
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
