import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import cards from "./cards.js"

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      score:0,
      topscore:0,
      cards:cards,
      correct:0
    }
}

reshuffle=(cards)=>{
  this.setState({score:this.state.score+1,cards:cards, correct:1})
  console.log(cards)
  console.log("reshuffled")
}
endGame=(cards)=>{
  if(this.state.score>this.state.topscore){
    this.setState({topscore:this.state.score})
  }
  cards.map(card=> (card.beenClicked=false));
  this.setState({score:0,cards:cards,correct:2})
  console.log("ended")

}

  render(){
  return (
    <div className="App">
      <div className="Nav">
        <span className="nav-left">Minecraft Clicky Game</span> <span className="nav-center">{this.state.correct===0? "Start PLaying" : (this.state.correct===1?"You Guessed Correct":"You guessed Wrong")}</span> <span className="nav-right">Score={this.state.score} Topscore={this.state.topscore}</span>
      </div>
      <div className="container">
        <div className="row"> 
        {console.log(this.state)}
          <Card cards={this.state.cards} endGame={this.endGame} reshuffle={this.reshuffle} state={this.state}/>
          {console.log(this.state)}
        </div>
      </div>
    </div>
  );}
}

export default App;
