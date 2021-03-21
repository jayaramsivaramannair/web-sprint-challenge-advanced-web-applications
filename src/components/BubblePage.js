import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from "../helpers/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axiosWithAuth().get('/colors')
      .then((res) => {
        console.log(res.data);
        setColorList(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  }, [setColorList])

  if (colorList.length === 0) {
    return <div>Fetching Colors.....</div>
  }

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('authToken');
    history.push('/');
  }

  return (
    <div>
      <button onClick={logout}>Logout</button>
      <div>
        <ColorList colors={colorList} updateColors={setColorList} />
        <Bubbles colors={colorList} />
      </div>
    </div>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
