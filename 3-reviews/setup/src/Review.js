import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex] = useState(2)
  const {id,name,job,image,text} = people[index]
  const checkNumber = (newIndex) => {
    if(newIndex > people.length - 1){
      return 0
    }
    if(newIndex < 0){
      return people.length - 1
    }
    return newIndex
  }
  const handlePrevBtn = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }
  const handleNextBtn = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }
  const handleRandom = () => {
    setIndex((index) => {
      let randomNumber = Math.floor(Math.random() * people.length)
      if(randomNumber === index){
        randomNumber = index + 1
        return checkNumber(randomNumber)
      }
      return randomNumber
    })
  }
  
  return(
  <article className="review">
    <div className="img-container">
      <img src={image} alt={name} className="person-img"/>
    </div>
    <h2 className="author">{name}</h2>
    <p className="job">{job}</p>
    <p className="text">{text}</p>
    <div className="button-container">
      <button className="prev-btn" onClick={handlePrevBtn}><FaChevronLeft /></button>
      <button className="next-btn" onClick={handleNextBtn}><FaChevronRight /></button>
    </div>
    <button className="random-btn" onClick={handleRandom}>Surprise Me!</button>

  </article>
  )
};

export default Review;
