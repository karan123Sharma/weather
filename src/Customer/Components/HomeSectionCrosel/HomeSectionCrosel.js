import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button } from "@mui/material";

const HomeSectionCarousel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  const items = [1, 1, 1, 1, 1].map((item, index) => (
    <div key={index}>
      <HomeSectionCard />
    </div>
  ));

  return (
    <div className="relative px-4 lg:px-8 border border-black">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          infinite
        />
        <Button
          className="z-50 bg-white"
          variant="contained"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor:"white"
          }}
          aria-label="next"
        >
          <ArrowBackIosIcon sx={{ transform: "rotate(90deg)",color:"black" }} />
        </Button>
        <Button
          className="z-50 bg-white"
          variant="contained"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(50%) rotate(-90deg)",
            bgcolor:"white"
          }}
          aria-label="next"
        >
          <ArrowBackIosIcon sx={{ transform: "rotate(90deg)",color:"black" }} />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
