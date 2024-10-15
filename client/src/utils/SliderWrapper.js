// SliderWrapper.js
import React, { forwardRef } from "react";
import Slider from "react-slick";

const SliderWrapper = forwardRef((props, ref) => {
  return <Slider ref={ref} {...props} />;
});

export default SliderWrapper;
