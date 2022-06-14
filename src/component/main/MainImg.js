import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function mainImg() {
  return (
    <figure id='visual'>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        loop={true}
        centeredSlides={true}>
        <SwiperSlide>
          <div className='inner'>
            <img src={`${process.env.PUBLIC_URL}/img/visual_img10.jpg`} alt="" />
            <div className='tCon'>
              <h2>
                Lorem ipsum dolor<br />
                sit amet consectetur,
                <span>
                  adipisicing elit. Odio, nesciunt?
                </span>
              </h2>
            </div>
            <div className="t1">Lorem ipsum<br /> dolor sit amet.</div>
            <div className="t2">Lorem ipsum<br /> dolor sit amet.</div>
            <div className="t3">Lorem ipsum<br /> dolor sit.</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='inner'>
            <img src={`${process.env.PUBLIC_URL}/img/visual_img12.jpg`} alt="" />
            <div className='tCon'>
              <h2>
                Lorem ipsum dolor<br />
                sit amet consectetur,
                <span>
                  adipisicing elit. Odio, nesciunt?
                </span>
              </h2>
            </div>
            <div className="t1">Lorem ipsum<br /> dolor sit amet.</div>
            <div className="t2">Lorem ipsum<br /> dolor sit amet.</div>
            <div className="t3">Lorem ipsum<br /> dolor sit.</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='inner'>
            <img src={`${process.env.PUBLIC_URL}/img/visual_img11.jpg`} alt="" />
            <div className='tCon'>
              <h2>
                Lorem ipsum dolor<br />
                sit amet consectetur,
                <span>
                  adipisicing elit. Odio, nesciunt?
                </span>
              </h2>
            </div>
            <div className="t1">Lorem ipsum<br /> dolor sit amet.</div>
            <div className="t2">Lorem ipsum<br /> dolor sit amet.</div>
            <div className="t3">Lorem ipsum<br /> dolor sit.</div>
          </div>
        </SwiperSlide>

      </Swiper>
    </figure>
  )
}

export default mainImg