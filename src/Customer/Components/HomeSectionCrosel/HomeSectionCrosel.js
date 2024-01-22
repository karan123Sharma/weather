import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button } from "@mui/material";

const HomeSectionCarousel = ({data,sectionName}) => {
  const [activeIndex, setactiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  const Slideprev = () => setactiveIndex(activeIndex - 1);
  const Slidenext = () => setactiveIndex(activeIndex + 1);
  const syncActiveIndex = ({item}) => setactiveIndex(item);
  const items = data.slice(0,10).map(
    (item, index) => (
      <div key={index}>
        <HomeSectionCard product={item}/>
      </div>
    )
  );

  return (
    <div className=" ">
    <h2 className="text-2xl font-extrabold text-gray-800">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
        />
        { activeIndex !== items.length-5 && <Button
          className="z-50 bg-white"
          variant="contained"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
          onClick={Slidenext} >
          <ArrowBackIosIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          /> 
        </Button> }
        { activeIndex !== 0 &&  <Button
          className="z-50 bg-white"
          variant="contained"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(-90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
          onClick={Slideprev}
        >
          <ArrowBackIosIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button> }
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
