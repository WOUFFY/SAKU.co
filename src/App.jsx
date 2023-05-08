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
      <div className="container">
        <Navbar></Navbar>

        <div className="nama">
            <h2>SAKU.co</h2>
            <h3>Sistem Pemesanan Kantin Online</h3>
        </div>

        <Main_content_wrap></Main_content_wrap>

        {/* <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          >
          <SwiperSlide><img className="h-72 w-full object-cover" src="./img/kurni_turu.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className="h-72 w-full object-cover" src="./img/burger.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className="h-72 w-full object-cover" src="./img/salmon.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className="h-72 w-full object-cover" src="./img/spaghett.jpg" alt="" /></SwiperSlide>
        </Swiper> */}

        <Footer></Footer>
      </div>
    </>
  )
}

export default App
