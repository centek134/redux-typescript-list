import React, { useState } from "react";
import "./list.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addJob, deleteJob, selectList } from "./listSlice";

export const List = () => {
  const [text, setText] = useState<string>("");
  const dispatch = useAppDispatch();
  const list = useAppSelector(selectList);
  
  const strikeThrough = (e: any ) => {
    e.target.nextElementSibling.classList.toggle("complete");
  };

  return (
    <div className="list-container">
      <h1>Things to do!</h1>
      <input
        className="text-input"
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={() => dispatch(addJob(text))}>Add Job</button>
      <div className="list">
        {list.map((item, i) => {
          return (
            <div key={i} className="item">
                <input onClick={(e) => strikeThrough(e)} type="checkbox"/>
                <p onClick={() => dispatch(deleteJob(i))}>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default List;
