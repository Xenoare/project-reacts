import React, { useState } from 'react';
import { FiMinus,FiPlus } from "react-icons/fi";


const Question = ({title,info}) => {
  const[loadInfo,setLoadInfo] = useState(false)

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => {setLoadInfo(!loadInfo)}}>
          {loadInfo ? <FiMinus /> : <FiPlus />}
        </button>
      </header>
      {loadInfo && <p>{info} </p>}
    </article>
  )
};

export default Question;
