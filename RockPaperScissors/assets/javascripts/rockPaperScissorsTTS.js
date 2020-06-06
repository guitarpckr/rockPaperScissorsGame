











/*let hands = ["Rock", "Paper", "Scissors"];
let getHand = function() {
  return hands[parseInt(Math.random()*10)%3];
};

let player1 = {
  name: "Fred",
  hand: "",
  wins: 0
};

let player2 = {
  name: "wilma",
  hand: "",
  wins: 0
};

let playRound = function(onePlayer, twoPlayer){
  onePlayer.hand = getHand();
  twoPlayer.hand = gethand();
  if(onePlayer.hand===twoPlayer.hand) {
    console.log(`No winner, it is a tie with ${onePlayer.hand}`);
    return null;
  } else if ((onePlayer.hand === 'Rock' && twoPlayer.hand === 'Scissors') || 
    (onePlayer.hand === 'Paper' && twoPlayer.hand === 'Rock') || 
    (onePlayer.hand==='Scissors' && twoPlayer.hand==='Paper')){
    onePlayer.wins += 1;
  console.log(`${onePlayer.name} wins with ${onePlayer.hand} over ${twoPlayer.name}\`s ${twoPlayer.hand}`);
  return onePlayer;
} else {
  twoPlayer.wins += 1;
  console.log(`${twoPlayer.name} wins with ${twoPlayer.hand} over ${onePlayer.name}\`s ${onePlayer.hand}`);
  return twoPlayer;
}
};