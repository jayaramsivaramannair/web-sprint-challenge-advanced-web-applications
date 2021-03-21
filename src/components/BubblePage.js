import React, { useEffect, useState } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  if (colorList.length === 0) {
    return <h1>Hello from BubblePage!</h1>
  }

  return (
    <>
      {/*
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
      */}
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
