//player1
let randomNumberOne = Math.floor(Math.random() *6 )+1;

let randomDiceImage = 'dice' + randomNumberOne + '.png'; //dice1.png

let randomImageSource = 'img/'  + randomDiceImage

let image1 = document.querySelectorAll('img')[0]

image1.setAttribute('src', randomImageSource)

//player2

let randomNumberTwo = Math.floor(Math.random() *6 )+1;

let randomDiceImageTwo = 'dice' + randomNumberTwo + '.png';

let randomImageSourceTwo = 'img/' + randomDiceImageTwo;

let image2 = document.querySelectorAll('img')[1];

image2.setAttribute('src', randomImageSourceTwo);

if(randomNumberOne > randomNumberTwo){
    document.querySelector('h1').innerHTML = '🏆 O jogador um GANHOU'
}else{} if(randomNumberOne < randomNumberTwo){document.querySelector ('h1').innerHTML = '🏆 O jogador dois GANHOU'}
else{}
if(randomNumberOne === randomNumberTwo){
    document.querySelector('h1').innerHTML = "Empate"
}else{}