import React from "react";

//using distrutor
//const Card=(props)=>{
//	const {name,email,id}=props; return(your code); //(watch video 207 15:00)using destructor so that we dont need to use props.id,props.name,props.email oder doesent matter just give them the sname name as in array

//or to make it cleaner
const Card = ({ id, name, email }) => {
  //id,name,email are properties which we have given
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadows-5">
      <div>
        <img alt="robots" src={`https://robohash.org/${id}?size=200x200`} />
      </div>
      <div>
        <p>{name}</p>

        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;
