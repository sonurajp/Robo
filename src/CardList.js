import React from "react";
import Card from "./Card";

// const CardList=({robots})=>
// {
// 	const cardarray=robots.map((user,i)=>
// 	{
// 		return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
// 		//explantion of key in video 209 8:00 and 8:19 key must be unique so we give i that is id
// 	})
// 	return(
// 	<div>
// 		{cardarray}
// 	</div>
// 		 );
// }
//see video 209 9:10 to understand this
const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i} //key explantion in 209 8:00
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};
export default CardList;
