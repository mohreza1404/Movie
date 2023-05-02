import { Carousel } from "flowbite-react";

const Carousels = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 m-3 p-3">
        <Carousel>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/83e8c151-107d-4e8f-b95a-d2ba99d49bb9/35dd0959-082c-4a63-9fcc-1b1094e86b05/ID-en-20230213-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
            alt="LUTFLIX"/>
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <img src="https://assets-a1.kompasiana.com/items/album/2021/07/18/fast-furious-10-ibu-dom-f10-fast-and-furious-10-fast-furious-60f3d6e41525106496071fc2.jpg" 
            alt="FAST & FORIUS"/>
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <img src="https://wallpaperaccess.com/full/45790.jpg" 
            alt="MARVEL"/>
          </div>
        </Carousel>
      </div>
    )
}

export default Carousels;