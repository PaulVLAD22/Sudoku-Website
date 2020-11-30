import React from 'react';
import  {cards} from './cards';
import Card from './Card';

function App() {
  return (
    <div className="container-fluid">
      <div className = ' h-100 row align-items-center my-row justify-content-around'>
        {cards.map((card)=>{
          return (
              <Card key={card.id} {...card}></Card>
          )
        })}
    </div>
  </div>
  );
}

export default App;
