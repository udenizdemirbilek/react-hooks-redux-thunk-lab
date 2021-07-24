import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CatList from "./CatList"
import { fetchCats } from "./catsSlice";


function Cats() {
  const dispatch = useDispatch()
  const catPics = useSelector(state => state.entities)
  useEffect(() => {
    dispatch(fetchCats())
  }, [dispatch])

  return (
    <div>
      <h1>CatBook</h1>
      {<CatList catPics={catPics}/>}
    </div>
  );
}

export default Cats;
