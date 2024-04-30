import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './review.css';

// import required modules
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';
const CustomerReview = () => {
const [datas,setData]=useState([])
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  useEffect(()=>{
fetch('https://tourism-server-liard.vercel.app/review')
.then(res=>res.json())
.then(data=>setData(data))
  },[])
  return (
    <>
    <div className=' w-[80%] md:w-[60%] mx-auto my-16'>
    <div className=' flex justify-center '>
    <h2 className=' inline-block border-b-4 border-yellow-500  text-3xl text-center py-6 my-16'>Happy Client</h2>
    </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
      {
      datas && datas.map(data=>(
        <SwiperSlide key={data._id} className=' '>
        <div  className="p-6 space-y-6 bg-[#eaeaea] rounded-xl w-full
        ">
              <p className="text-sm text-left text-[#020202] font-medium ">{data?.comment}</p>
              <div className="flex justify-between items-center mb-4">
                <h6 className="text-sm font-medium text-gray-600">{data?.date}</h6>
                <div className="flex items-center gap-1">
                  <h6 className="text-sm font-medium text-primary">{data?.rsting}</h6>
                  <span role="img" aria-label="star" className="text-yellow-500">
                    ⭐
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 mr-4 rounded-full overflow-hidden">
                  <img src={data?.authorImageUrl} alt=''/>
                </div>
                <h5 className="text-lg font-semibold">{data?.authorName}</h5>
              </div>
            </div>
        </SwiperSlide>
      ))
      }
        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
    </>
  );
};

export default CustomerReview;