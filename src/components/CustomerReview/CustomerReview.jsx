// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './review.css';

// // import required modules
// import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';
// const CustomerReview = () => {
//   const progressCircle = useRef(null);
//   const progressContent = useRef(null);
//   const onAutoplayTimeLeft = (s, time, progress) => {
//     progressCircle.current.style.setProperty('--progress', 1 - progress);
//     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
//   return (
//     <>
//     <div className=' my-16'>
//     <div>
//     <h2 className=' text-3xl text-center py-16'>Happy Client</h2>
//     </div>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         onAutoplayTimeLeft={onAutoplayTimeLeft}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//         <div className="p-6 space-y-6 bg-[#eaeaea] rounded-xl mb-10">
              
//               <p className="text-sm text-left text-[#020202] font-medium ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere in omnis autem. Dolorum, dolorem fugiat. Non rerum consequuntur molestias optio quia soluta maiores illo, provident sit animi temporibus? Accusamus, dolores?.</p>
//               <div className="flex justify-between items-center mb-4">
//                 <h6 className="text-sm font-medium text-gray-600">02-43-2004</h6>
//                 <div className="flex items-center gap-1">
//                   <h6 className="text-sm font-medium text-primary">4.6</h6>
//                   <span role="img" aria-label="star" className="text-yellow-500">
//                     ⭐
//                   </span>
//                 </div>
//               </div>
//               <div className="flex items-center justify-between mb-4">
//                 <div className="w-12 h-12 mr-4 rounded-full overflow-hidden">
//                   <img src="https://t4.ftcdn.net/jpg/01/04/47/13/240_F_104471360_1xohRUSRjfdGxoaRDtLg2z4ztBHkT21K.jpg" alt=''/>
//                 </div>
//                 <h5 className="text-lg font-semibold">mahim</h5>
//               </div>
//             </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className="p-6 space-y-6 bg-[#eaeaea] rounded-xl">
              
//               <p className="text-sm text-left text-[#020202] font-medium ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere in omnis autem. Dolorum, dolorem fugiat. Non rerum consequuntur molestias optio quia soluta maiores illo, provident sit animi temporibus? Accusamus, dolores?.</p>
//               <div className="flex justify-between items-center mb-4">
//                 <h6 className="text-sm font-medium text-gray-600">02-43-2004</h6>
//                 <div className="flex items-center gap-1">
//                   <h6 className="text-sm font-medium text-primary">4.6</h6>
//                   <span role="img" aria-label="star" className="text-yellow-500">
//                     ⭐
//                   </span>
//                 </div>
//               </div>
//               <div className="flex items-center justify-between mb-4">
//                 <div className="w-12 h-12 mr-4 rounded-full overflow-hidden">
//                   <img src="https://t4.ftcdn.net/jpg/01/04/47/13/240_F_104471360_1xohRUSRjfdGxoaRDtLg2z4ztBHkT21K.jpg" alt=''/>
//                 </div>
//                 <h5 className="text-lg font-semibold">mahim</h5>
//               </div>
//             </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className="p-6 space-y-6 bg-[#eaeaea] rounded-xl">
              
//               <p className="text-sm text-left text-[#020202] font-medium ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere in omnis autem. Dolorum, dolorem fugiat. Non rerum consequuntur molestias optio quia soluta maiores illo, provident sit animi temporibus? Accusamus, dolores?.</p>
//               <div className="flex justify-between items-center mb-4">
//                 <h6 className="text-sm font-medium text-gray-600">02-43-2004</h6>
//                 <div className="flex items-center gap-1">
//                   <h6 className="text-sm font-medium text-primary">4.6</h6>
//                   <span role="img" aria-label="star" className="text-yellow-500">
//                     ⭐
//                   </span>
//                 </div>
//               </div>
//               <div className="flex items-center justify-between mb-4">
//                 <div className="w-12 h-12 mr-4 rounded-full overflow-hidden">
//                   <img src="https://t4.ftcdn.net/jpg/01/04/47/13/240_F_104471360_1xohRUSRjfdGxoaRDtLg2z4ztBHkT21K.jpg" alt=''/>
//                 </div>
//                 <h5 className="text-lg font-semibold">mahim</h5>
//               </div>
//             </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className="p-6 space-y-6 bg-[#eaeaea] rounded-xl">
              
//               <p className="text-sm text-left text-[#020202] font-medium ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere in omnis autem. Dolorum, dolorem fugiat. Non rerum consequuntur molestias optio quia soluta maiores illo, provident sit animi temporibus? Accusamus, dolores?.</p>
//               <div className="flex justify-between items-center mb-4">
//                 <h6 className="text-sm font-medium text-gray-600">02-43-2004</h6>
//                 <div className="flex items-center gap-1">
//                   <h6 className="text-sm font-medium text-primary">4.6</h6>
//                   <span role="img" aria-label="star" className="text-yellow-500">
//                     ⭐
//                   </span>
//                 </div>
//               </div>
//               <div className="flex items-center justify-between mb-4">
//                 <div className="w-12 h-12 mr-4 rounded-full overflow-hidden">
//                   <img src="https://t4.ftcdn.net/jpg/01/04/47/13/240_F_104471360_1xohRUSRjfdGxoaRDtLg2z4ztBHkT21K.jpg" alt=''/>
//                 </div>
//                 <h5 className="text-lg font-semibold">mahim</h5>
//               </div>
//             </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className="p-6 space-y-6 bg-[#eaeaea] rounded-xl">
              
//               <p className="text-sm text-left text-[#020202] font-medium ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere in omnis autem. Dolorum, dolorem fugiat. Non rerum consequuntur molestias optio quia soluta maiores illo, provident sit animi temporibus? Accusamus, dolores?.</p>
//               <div className="flex justify-between items-center mb-4">
//                 <h6 className="text-sm font-medium text-gray-600">02-43-2004</h6>
//                 <div className="flex items-center gap-1">
//                   <h6 className="text-sm font-medium text-primary">4.6</h6>
//                   <span role="img" aria-label="star" className="text-yellow-500">
//                     ⭐
//                   </span>
//                 </div>
//               </div>
//               <div className="flex items-center justify-between mb-4">
//                 <div className="w-12 h-12 mr-4 rounded-full overflow-hidden">
//                   <img src="https://t4.ftcdn.net/jpg/01/04/47/13/240_F_104471360_1xohRUSRjfdGxoaRDtLg2z4ztBHkT21K.jpg" alt=''/>
//                 </div>
//                 <h5 className="text-lg font-semibold">mahim</h5>
//               </div>
//             </div>
//         </SwiperSlide>
//         <div className="autoplay-progress" slot="container-end">
//           <svg viewBox="0 0 48 48" ref={progressCircle}>
//             <circle cx="24" cy="24" r="20"></circle>
//           </svg>
//           <span ref={progressContent}></span>
//         </div>
//       </Swiper>
//     </div>
//     </>
//   );
// };

// export default CustomerReview;