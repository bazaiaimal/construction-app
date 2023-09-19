import { ChakraProvider, Box, extendTheme, theme } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slider1 from "../../assets/Images/home slider 1.jpg";
import slider2 from "../../assets/Images/home slider 2.jpg";
import slider3 from "../../assets/Images/home slider 3.jpg";

export const HomePageSlider = () => {
  return (
    <>
      <ChakraProvider theme={extendTheme(theme)}>
        <Box p={5}>
          <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}>
            <div>
              <img src={slider1} alt="Image 1" />
            </div>
            <div>
              <img src={slider2} alt="Image 2" />
            </div>
            <div>
              <img src={slider3} alt="Image 3" />
            </div>
          </Carousel>
        </Box>
      </ChakraProvider>
    </>
  );
};

// ImageSlider.js

// import { ChakraProvider, Box } from "@chakra-ui/react";
// import { Key } from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const HomePageSlider = ({ images }: any) => {
//   return (
//     <ChakraProvider>
//       <Box p={5}>
//         <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}>
//           {images.map((image, index) => (
//             <div key={index}>
//               <img src={image.src} alt={image.alt} />
//             </div>
//           ))}
//         </Carousel>
//       </Box>
//     </ChakraProvider>
//   );
// };

// export default HomePageSlider;
