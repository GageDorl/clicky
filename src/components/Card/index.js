import React from 'react';
import "./style.css";
let shuffle=(array)=>{
    let arrayLen = array.length;
    let newArray=[];
  for(let i=0; i<arrayLen; i++){
    let thisNum = Math.floor(Math.random()*array.length)
    newArray.push(array[thisNum]);
    array.splice(thisNum,1)
  }
  return newArray;
} 
let cards;

function Card(props) {
    return(
        cards=shuffle(props.cards),
        cards.map(card=> {console.log(cards);return(
            <div className="col-md-3">
                <div key={card.name} className="char-card" onClick={card.beenClicked ? ()=>props.endGame(cards) : ()=>{card.beenClicked=true;props.reshuffle(cards)}}>
                    <img src={card.image} alt={"picture of "+card.name} />
                </div>
            </div>
            )
        }
        )
    )
}
export default Card;