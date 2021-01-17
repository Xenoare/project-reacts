import React from 'react';

const List = ({people}) => {
  console.log(people)
  return (
    <>
      {people.map((person) => {
    const {id,name,age,image} = person
    return(
      <article key={id} className="person">
        <img src={image} alt=""/>
        <div>
          <h3>{name}</h3>
          <p>{age}</p>
        </div>
      </article>
    )
  })}
    </>
  );
};

export default List;
