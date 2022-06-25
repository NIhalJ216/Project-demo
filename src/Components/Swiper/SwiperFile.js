import React from "react";
import "./SwiperFile.css";

const Swiperfile = () => {
  // const swiper = new Swiper(".swiper", {
  //   // Optional parameters
  //   direction: "horizontal",
  //   loop: true,
  //   autoHeight: false,
  //   centeredSlides: true,
  //   slidesPerView: 1,
  //   // Responsive breakpoints
  //   breakpoints: {
  //     640: {
  //       slidesPerView: 2,
  //       spaceBetween: 40,
  //     },
  //     992: {
  //       slidesPerView: 3,
  //       spaceBetween: 40,
  //     },
  //   },

  //   // If we need pagination
  //   pagination: {
  //     el: ".swiper-pagination",
  //   },

  //   // Navigation arrows
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },

  //   // And if we need scrollbar
  //   /*scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },*/
  // });

  return (
    <div class="wrapper">
      <header>
        <h1>TESTIMONIALS</h1>
      </header>
      {/* <!-- Slider main container --> */}
      <div class="swiper">
        {/* <!-- Additional required wrapper --> */}
        <div class="swiper-wrapper">
          {/* <!-- Slides --> */}
          <div class="swiper-slide">
            <div class="content-wrapper">
              <div class="content">
                <div class="swiper-avatar">
                  <img src="https://bikes-n-stuff.com/wp-content/uploads/sb-instagram-feed-images/julietelliott.jpg" />
                </div>
                <p>
                  "Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula, eget lacinia odio sem nec elit. Donec id elit non mi
                  porta gravida at eget metus. Aenean eu leo quam. Pellentesque
                  ornare sem lacinia quam venenatis vestibulum."
                </p>
                <p class="cite">- Juliet Elliott, Cyclist</p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="content-wrapper">
              <div class="content">
                <div class="swiper-avatar">
                  <img src="https://dgtzuqphqg23d.cloudfront.net/aqUDdv8fco91cPIeBAetAcpDfUEOIuaIrivU11PMnBs-2048x1942.jpg" />
                </div>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  posuere consectetur est at lobortis. Nullam id dolor id nibh
                  ultricies vehicula ut id elit. Curabitur blandit tempus
                  porttitor. Duis mollis, est non commodo luctus, nisi erat
                  porttitor ligula, eget lacinia odio sem nec elit. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros."
                </p>
                <p class="cite">- Katie Kookaburra, Cyclist</p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="content-wrapper">
              <div class="content">
                <div class="swiper-avatar">
                  <img src="https://dgalywyr863hv.cloudfront.net/pictures/athletes/188112/45714/8/full.jpg" />
                </div>
                <p>
                  "Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula, eget lacinia odio sem nec elit. Donec id elit non mi
                  porta gravida at eget metus. Aenean eu leo quam. Pellentesque
                  ornare sem lacinia quam venenatis vestibulum."
                </p>
                <p class="cite">- Alison Tetrick, Cyclist</p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- If we need pagination --> */}
        {/* <!-- If we need navigation buttons --> */}
        <div class="swiper-nav-wrapper">
          <div class="swiper-button-prev"></div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </div>
  );
};

export default Swiperfile;
