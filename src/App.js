import React, { Component } from 'react';
import './App.css';
import {matchDetails} from './matchDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
		  
		  {matchDetails.map(x=>
			 <Round matchList={x.games} key={x.gameSn} name={x.name} noOfMatches={x.noOfMatches} />
		  )}
			
      </div>
    );
  }
}

class Round extends Component{
	constructor(props){
		super(props);
		this.state={}
	}
	
	render(){
		const matchList = this.props.matchList;
		return(
			<div className={'round '+this.props.key} key={this.props.key} noOfMatches={this.props.noOfMatches}>
				<label className='round-title'>{this.props.name}</label>
				<label className='round-title-breadCrumb'>{this.props.noOfMatches>1?'>':''}</label>

				{matchList.map(x=>
					<GameCard lineDir={this.props.noOfMatches>1? (x.sn<x.linkedMatchId? 'top':'bottom'):'none'}
					noMatches={this.props.noOfMatches}
					key={x.sn} date={x.date} gameStatus={x.gameStatus} linkedMatchId={x.linkedMatchId} 
					team1name={x.team1.name} team1flag={x.team1.flag} team1score={x.team1.score} team1penaltyScore={x.team1.penaltyScore} 
					team2name={x.team2.name} team2flag={x.team2.flag} team2score={x.team2.score} team2penaltyScore={x.team2.penaltyScore} />
				)}
			</div>
		);
	}
}

class GameCard extends Component{
	constructor(props){
		super(props);
		this.state={}
	}
	
	render(){
		const cardHeight = 'calc(100% / ' + this.props.noMatches*1.4 + ')';
		return(
			<div className="game-card" key={this.props.key} linkedMatchId={this.props.linkedMatchId} 
			style={{height: cardHeight, 
			marginBottom: 'calc(((100%-'+(this.props.noMatches*cardHeight)+')/'+this.props.noMatches+')/2)',
			marginTop: 'calc(((100%-'+(this.props.noMatches*cardHeight)+')/'+this.props.noMatches+')/4)'
			}}>
			
			<div className={'game-card-line-'+this.props.lineDir}/>
			<div className="game-card-line-back"/>

			<div className="game-card-content">
					<div className="game-card-match-details">
						<label className="game-card-match-details-label"> {this.props.date} {this.props.gameStatus} </label>
					</div>
					
					<div className="game-card-match-team1">
						<label> {this.props.team1name} </label> 
						<img className="match-team1-flag" src={require(`./images/${this.props.team1flag}`)} alt="team1flag"></img>
						<label> {this.props.team1score} {this.props.team1penaltyScore?'('+this.props.team1penaltyScore+')' :''} </label>
					</div>
				
					<div className="game-card-match-team2">
						<label> {this.props.team2name} </label>
						<img className="match-team2-flag" src={require(`./images/${this.props.team2flag}`)} alt="team2flag"></img>
						<label> {this.props.team2score} {this.props.team2penaltyScore?'('+this.props.team2penaltyScore+')' :''} </label>
					</div>
			</div>
			
			</div>
		);
	}
}

export default App;
