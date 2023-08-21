// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import Slider from "react-slick";
// import { HomeWraper } from "../main";
// import CardWithBorder from "./CardWithBorder";

// const CarouselCom = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     variableWidth: false,
//     slidesToScroll: 1,
//     prevArrow: <button className="slide-arrow prev-arrow"></button>,
//     nextArrow: (
//       <button className="slide-arrow next-arrow btn-category"></button>
//     ),
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   return (
//     <HomeWraper>
//       <Slider {...settings} className="w-[200px]">
//         <div>
//           <CardWithBorder
//             title={"Choose a Format"}
//             col1={"Feature Lenght"}
//             col2={"TV Series"}
//             col3={"Short Flim"}
//           />
//         </div>
//         <div>
//           <CardWithBorder
//             title={"Choose a Format"}
//             col1={"Feature Lenght"}
//             col2={"TV Series"}
//             col3={"Short Flim"}
//           />
//         </div>
//         <div>
//           <CardWithBorder
//             title={"Choose a Format"}
//             col1={"Feature Lenght"}
//             col2={"TV Series"}
//             col3={"Short Flim"}
//           />
//         </div>
//         <div>
//           <CardWithBorder
//             title={"Choose a Format"}
//             col1={"Feature Lenght"}
//             col2={"TV Series"}
//             col3={"Short Flim"}
//           />
//         </div>
//         <div>
//           <CardWithBorder
//             title={"Choose a Format"}
//             col1={"Feature Lenght"}
//             col2={"TV Series"}
//             col3={"Short Flim"}
//           />
//         </div>
//         <div>
//           <CardWithBorder
//             title={"Choose a Format"}
//             col1={"Feature Lenght"}
//             col2={"TV Series"}
//             col3={"Short Flim"}
//           />
//         </div>
//         <div>
//           <CardWithBorder
//             title={"Choose a Format"}
//             col1={"Feature Lenght"}
//             col2={"TV Series"}
//             col3={"Short Flim"}
//           />
//         </div>
//       </Slider>
//     </HomeWraper>
//   );
// };

// export default CarouselCom;

// // import React from "react";
// // import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
// // import { Carousel } from "react-responsive-carousel";

// // const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
// // const ResponsiveCarousel = () => {
// //   return (
// //     <Carousel showArrows={true} infiniteLoop={true}>
// //       {items.map((item, index) => (
// //         <div key={index} className="carousel-item">
// //           {item}
// //         </div>
// //       ))}
// //     </Carousel>
// //   );
// // };

// // export default ResponsiveCarousel;

// import React from "react";
// import Slider from "react-slick";
// import "../App.css"; // Import your custom CSS

// const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
// const SlickCarousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true, // Hide default arrows
//   };

//   return (
//     <div className="slick-carousel-container">
//       <div className="slick-carousel-arrows">
//         <div className="arrow prev">◄</div>
//         <div className="arrow next">►</div>
//       </div>
//       <Slider {...settings}>
//         {items.map((item, index) => (
//           <div key={index} className="carousel-item w-2/3">
//             {item}
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default SlickCarousel;

import React, { useState } from "react";
import "./style.css";
import CardWithBorder from "./CardWithBorder";

const CustomCarousel = () => {
  const items = [
    {
      title: "Choose a Format",
      col1: "Feature Lenght",
      col2: "TV Series",
      col3: "Short Flim",
    },
    {
      title: "Choose a Format",
      col1: "Feature Lenght",
      col2: "TV Series",
      col3: "Short Flim",
    },
    {
      title: "Choose a Format",
      col1: "Feature Lenght",
      col2: "TV Series",
      col3: "Short Flim",
    },
    {
      title: "Choose a Format",
      col1: "Feature Lenght",
      col2: "TV Series",
      col3: "Short Flim",
    },
    {
      title: "Choose a Format",
      col1: "Feature Lenght",
      col2: "TV Series",
      col3: "Short Flim",
    },
    {
      title: "Choose a Format",
      col1: "Feature Lenght",
      col2: "TV Series",
      col3: "Short Flim",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const transformValue = `translateX(calc(-100% * ${currentIndex}))`;

  return (
    <div className="custom-carousel-container">
      <div className="custom-carousel-arrows">
        <button className="arrow prev mb-4" onClick={handlePrev}>
          ◄
        </button>
        <button className="arrow next mb-4" onClick={handleNext}>
          ►
        </button>
      </div>
      <div
        className="custom-carousel-content"
        style={{ "--transform-value": transformValue }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <div>
              <CardWithBorder
                title={item.title}
                col1={item.col1}
                col2={item.col2}
                col3={item.col3}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
