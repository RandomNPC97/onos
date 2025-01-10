import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import React from "react";

const swipeData = [
  {
    id: 1,
    imgUrl: "./assets/user1.jpg",
    userName: "John Anderson",
    quote: `This bank has truly made my life easier with its seamless online banking services. I can handle all my transactions from the comfort of my home.`,
  },
  {
    id: 2,
    imgUrl: "./assets/user2.jpg",
    userName: "Sarah Williams",
    quote: `The customer service here is outstanding. Any time I have a question or need assistance, the support team is always prompt and helpful.`,
  },
  {
    id: 3,
    imgUrl: "./assets/user3.webp",
    userName: "David Thompson",
    quote: `Working here has been an amazing experience. The collaborative environment and dedication to innovation make it a fantastic place to grow professionally.`,
  },
  {
    id: 4,
    imgUrl: "./assets/user4.jpg",
    userName: "Emily Johnson",
    quote: `I rely on this bank for my business transactions. The range of tools and services they provide has significantly streamlined my business finances.`,
  },
  {
    id: 5,
    imgUrl: "./assets/user5.jpg",
    userName: "Michael Smith",
    quote: `The mobile app is intuitive and user-friendly. I can easily manage my accounts, transfer funds, and pay bills on the go.`,
  },
];


function Testimonials() {
  return (
    <div id="testimonials">
      <div className="h-full w-full flex flex-col items-center justify-center pb-10 sm:pl-10 sm:pr-10 2xl:max-w-7xl">
        <div className="max-w-3xl h-full p-0 pt-10 pb-0 mx-auto text-center text-black">
          <h3 className="font-mono text-base pb-1 tracking-wider">
            Testimonials.
          </h3>
          <p className="text-2xl pb-8">What People Say About Us</p>
        </div>
      </div>
      <Swiper
        cssMode={true}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {swipeData.map((item) => (
          <SwiperSlide key={item.id} className="flex justify-center items-center">
            <div className="h-full w-full flex flex-col items-center justify-center pb-10 sm:pl-10 sm:pr-10 2xl:max-w-7xl">
              <div className="max-w-3xl h-full p-2 pt-0 pb-0 mx-auto text-center text-black">
                <div className="h-[90px] w-[90px] mx-auto rounded-full overflow-hidden shadow-md">
                  <img
                    className="w-full h-full object-cover object-center"
                    src={item.imgUrl}
                    alt={item.userName}
                  />
                </div>
                <p className="pt-2 text-xl">{item.userName}</p>
                <p className="text-lg space-x-1">{item.quote}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonials;
