import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [question,setQuestion] = useState(data)
  return(
  <main>
    <section className="container">
      <h2>Question about QNA</h2>
        <section className="info">
          {question.map((quest) => {
            return<SingleQuestion key={quest.id} {...quest}></SingleQuestion>
          })}
        </section>
    </section>
  </main>
  );
}

export default App;
