import React from 'react';
import Card from './Card';


const CardList = ({robots}) => {
  const cardsArray = robots.map((user, index) => {
    return <Card key={user.id} id={user.id} name={user.name} email={user.email} />
    // return <Card key={index} id={robots[index].id} name={robots[index].name} email={robots[index].email} />
  });
  return (
    <div>
      {cardsArray}
    </div>
  );
}

export default CardList;