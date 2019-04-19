let fullArray = [
{name:'Jon Snow', House:'House-Stark', status:'Alive', gender:'Male',marriage:'no',allegiance:'Targaryen',image: './imgs/joooonsnow .jpg',},
{name:'Arya Stark', house:'House-Stark', status:'Alive', gender:'Female', marriage: 'no', allegiance: 'Stark', image:'./imgs/arya.jpg',},
{name: 'Sansa Stark', house: 'House-Stark', status: 'Alive', gender: 'Female',marriage: 'yes', allegiance: 'Stark',image:'./imgs/sansa.jpg',},
{name: 'Robb Stark', house: 'House-Stark', status: 'Dead', gender: 'Male', marriage: 'yes', allegiance: 'Stark', image: './imgs/robb.png',},
{name: 'Bran Stark', house: 'House-Stark', status: 'Alive',gender: 'Male',marriage: 'no', allegiance: 'Stark', image: './imgs/bran.jpg',},
{name: 'Ned Stark', house: 'House-Stark', status: 'Dead', gender: 'Male', marriage: 'yes', allegiance: 'Stark', image: './imgs/ned.jpg',},
{name: 'Cersei Lannister', house: 'House-Lannister', status: 'Alive', gender: 'Female', marriage: 'yes', allegiance: 'Lannister', image: './imgs/cersei.jpg',},
{name: 'Tyrion Lannister', house: 'House-Lannister', status: 'Alive', gender: 'Male', marriage: 'yes', allegiance: 'Targaryen', image: './imgs/tyrion.JPG',},
{name: 'Jamie Lannister', house: 'House-Lannister', status: 'Alive', gender: 'Male', marriage: 'no', allegiance: 'Lannister', image:'./imgs/jamie.jpg',}, 
{name: 'Daenerys Targaryen', house: 'House-Targaryen', status: 'Alive', gender: 'Female', marriage: 'no', allegiance: 'Targaryen', image: './imgs/khaleesi.jpg',},
{name: 'Melisandre', house: 'House-None', status: 'Alive', gender: 'Female', marriage: 'no', allegiance:'Other', image: './imgs/melisadnre.jpg',},
{name: 'Theon Greyjoy', house: 'House-Other', status: 'Alive', gender: 'Male', marriage: 'no', allegiance: 'Stark', image: './imgs/theon.jpg',},
{name: 'Samwell Tarly', house: 'House-Other', status: 'Alive', gender: 'Male', marriage: 'no', allegiance: 'Stark' , image: './imgs/sam.jpg',},
{name: 'Missandei', house: 'House-None', status: 'Alive', gender: 'Female', marriage: 'no', allegiance: 'Targaryen', image: './imgs/missandei.png',},
{name: 'Varys', house: 'House-Other', status: 'Alive', gender: 'Male', marriage: 'no', allegiance: 'Other', image: './imgs/Varys.jpg',},
{name: 'Night King', house: 'House-None', status: 'Dead', gender: 'Male', marriage: 'no', allegiance: 'Other', image: './imgs/Night King.jpeg',},
{name: 'Tormund Giantsbane', house: 'House-None', status: 'Alive', gender: 'Male', marriage: 'no', allegiance: 'Stark', image: './imgs/tormund.jpg',},   
{name: 'Lyanna Mormont', house: 'House-Other', status: 'Alive', gender: 'Female', marriage: 'no', allegiance: 'Stark', image:'./imgs/lyanna.jpg' ,},
{name: 'Gendry', house: 'House-None', status: 'Alive', gender: 'Male', marriage: 'no', allegiance: 'Stark', image:'./imgs/Gendry.jpg',},
{name: 'Margaery Tyrell', house: 'House-Other', status: 'Dead', gender: 'Female', marriage: 'yes', allegiance: 'Lannister', image:'./imgs/margaery.jpg' ,},
{name: 'Euron Greyjoy', house: 'House-Other', status: 'Alive', gender: 'Male', marriage: 'no', allegiance: 'Lannister', image: './imgs/euron.jpg', },
{name: 'Yara Greyjoy', house: 'House-Other', status: 'Alive', gender: 'Female', marriage: 'no', allegiance: 'Targaryen', image: './imgs/yara.jpg',},
{name: 'Rhaegar Targaryen', house: 'House-Targaryen', status: 'Dead', gender: 'Male', marriage: 'no', allegiance: 'Targaryen', image: './imgs/rhager.jpg',},
{name: 'Catelyn Stark', house: 'House-Other', status: 'Dead', gender: 'Female', marriage: 'yes', allegiance: 'Stark', image: './imgs/cat.jpg'},
{name: 'Rickon Stark', house: 'House-Stark', status: 'Dead', gender: 'Male', marriage: 'no', allegiance: 'Stark', image: './imgs/rickon.jpg',},
{name: 'Robert Baratheon', house: 'House-Other', status: 'Dead', gender: 'Male', marriage: 'yes', allegiance: 'Other', image: './imgs/robert.jpg',},
{name: 'Khal Drogo', house: 'House-None', status: 'Dead', gender:'Male', marriage: 'yes', allegiance: 'Other', image:'./imgs/khal.jpg',},
{name: 'Hodor', house: 'House-None', status: 'Dead', gender: 'Male', marriage: 'no', allegiance: 'Stark', image:'./imgs/hodor.jpg' ,},
{name: 'Davos Seaworth', house: 'House-Other', status: 'Alive', gender: 'Male', marriage: 'no', allegiance: 'Stark', image: './imgs/davos.jpg',},
{name: 'Petyr Baelish', house: 'House-Other', status: 'Dead', gender: 'Male', marriage: 'yes', allegiance: 'Other',image:'./imgs/lord baelish.jpg' ,},
{name: 'Tywinn Lannister', house: 'House-Lannister', status: 'Dead', gender: 'Male', marriage: 'yes', allegiance: 'Lannister', image: './imgs/tywinn.jpg',}, 
{name: 'Joffrey Baratheon', house: 'House-Other', status: 'Dead', gender: 'Male', marriage: 'yes', allegiance: 'Lannister', image: './imgs/joffrey.jpg',},
{name: 'Tommen Baratheon', house: 'House-Other', status: 'Dead', gender: 'Male', marriage: 'yes', allegiance: 'Lannister', image: './imgs/tommen.jpg', },
{name: 'Renly Baratheon', house: 'House-Other', status: 'Dead', gender: 'Male', marriage: 'yes', allegiance: 'Other', image: './imgs/renly.jpg',},
{name: 'Stannis Baratheon', house: 'House-Other', status: 'Dead', gender: 'Male', marriage: 'yes', allegiance: 'Other', image: './imgs/stannis.jpg',},
{name: 'Myrcella Baratheon', house: 'House-Other', status: 'Dead', gender: 'Female', marriage:'no', allegiance: 'Other', image: './imgs/myrcella.jpg',},
{name: 'Shireen Baratheon', house: 'House-Other', status: 'Dead', gender: 'Female', marriage:'no', allegiance: 'Other', image: './imgs/shireen.jpg',},
{ name: 'Sandor Clegane', house: 'House-Other', status: 'Alive', gender: 'Male', marriage: 'no', allegiance: 'Other', image: './imgs/hound.jpg',},
{name: 'Gregor Clegane', house: 'House-Other', status: 'Alive', gender: 'Male', marriage: 'no', allegiance: 'Lannister', image: './imgs/mounrain.jpg',},
{name: 'Jorah Mormont', house: 'House-Other', status: 'Alive', gender: 'Male', marriage: 'yes', allegiance: 'Targaryen', image: './imgs/jorah.jpg',},
{name: 'Ramsay Snow', house: 'House-Other', status: 'Dead', gender: 'Male', marriage: 'yes', allegiance: 'Other', image: './imgs/ramsey.jpg',},
{ name: 'Greyworm', house: 'House-None', status: 'Alive', gender: 'Male', marriage: 'no', allegiance: 'Targaryen', image: './imgs/greyworm.jpg',},
{name: 'Aerys Targaryen', house: 'House-Targaryen', status: 'Dead', gender: 'Male', marriage: 'yes', allegiance: 'Targaryen', image: './imgs/madking.jpg',},
{name: 'Lyanna Stark', house: 'House-Stark', status: 'Dead', gender: 'Female', marriage: 'yes', allegiance: 'Stark', image: './imgs/lyanna stark.jpg',},
{name: 'Ser Bronn', house: 'House-None', status: 'Alive', gender: 'Male', marriage: 'yes', allegiance: 'Lannister',  image:'imgs/bronn.jpg' ,},
{name: 'Loras Tyrell', house: 'House-Other', status: 'Dead', gender: 'Male', marriage: 'no', allegiance: 'Other', image:'./imgs/loras.jpg',},
{name: 'Olenna Tyrell', house: 'House-Other', status: 'Dead', gender: 'Female', marriage: 'yes', allegiance: 'Targaryen', image:'./imgs/olenna.jpg',},
{name: 'Walder Frey', house: 'House-Other', status: 'Dead', gender: 'Male', marriage: 'yes', allegiance: 'Lannister', image:'./imgs/walder.jpg' ,},
{name: 'Podrick Payne', house: 'House-None', status: 'Alive', gender: 'Male', marriage: 'no', allegiance: 'Other', image:'imgs/pod.jpg' ,},
{name: 'Qyburn', house: 'House-None', status: 'Alive', gender: 'Male', marriage: 'no', allegiance: 'Lannister', image:'imgs/qybrun.jpg',},
{name: 'Beric Dondarrion', house: 'House-Other', status: 'Alive', gender: 'Male', marriage: 'no', allegiance: 'Other',image:'imgs/beric.jpg',},
{name: 'Elaria Sand', house: 'House-Other', status: 'Dead', gender: 'Female', marriage: 'no', allegiance: 'Other', image:'imgs/elaria.jpg' ,},
{name: 'Aemon', house: 'House-Targaryen', status: 'Dead', gender: 'Male', marriage: 'no', allegiance:'Other', image: './imgs/aemon.jpg',},
{name: 'Brienne of Tarth', house: 'House-Other', status: 'Alive', gender: 'Female', marriage: 'no', allegiance: 'Stark', image: './imgs/brienne.jpg',},
{name: 'Mance Rayder', house: 'House-None', status: 'Dead', gender: 'Male', marriage: 'no', allegiance:'Other', image: './imgs/ManceRayder.jpg',},   
{name: 'Ygritte', house: 'House-None', status: 'Dead', gender: 'Female', marriage: 'no', allegiance: 'Other', image: './imgs/ygritte.png',},
{name: 'Benjen Stark', house: 'House-Stark', status: 'Dead', gender: 'Male', marriage: 'no', allegiance: 'Other', image: './imgs/benjen.jpg',},
{name: 'Oberyn Martell', house: 'House-Other', status: 'Dead', gender: 'Male', marriage: 'no', allegiance: 'Other', image:'./imgs/oberyn.png',},
{name: 'Gilly', house: 'House-None', status: 'Alive', gender: 'Female', marriage: 'no', allegiance:'Stark', image: './imgs/gilly.png',},
] 

let characters = [];
let theMainCharacter;

function getRandom() {
  for (i = 0; i < 24; i++){
    let randomNum = Math.floor(Math.random() * ((fullArray.length - 1) + 1))
    let character = fullArray[randomNum]
    fullArray.splice(randomNum, 1)
    characters.push(character)
    $('#gameboard div').eq(i).html(`<img src="${character.image}" name="${character.name}" />`)
  }
};
function guessCharacter() {
  let randomCharacter = characters[Math.floor(Math.random() * characters.length)];
  theMainCharacter = randomCharacter;
  return randomCharacter
};

var anchors = document.getElementsByTagName("a")
let names = document.querySelectorAll('#gameboard > div');

let newArray = []

function playGame(){
for (let i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener('click', function(e) {
    let name = this.name;
    let id = this.id
    newArray.push({[name]:id}) 
  let filteredCharacters = characters.filter(character=>{
    let q= true; 
    // console.log("this is before the for in loop")
    for (query of newArray){
      // console.log("what is the name of the query  ", name);
      if(name === 'house' || name === 'allegiance') {
        // console.log("Checking house and/or allegiance")
        if(theMainCharacter[name] !== character[Object.keys(query)] && character[Object.keys(query)] === id && character.name !== theMainCharacter.name) {
          console.log("did not match the main character")
          q = false;
        // }  else if(theMainCharacter[name] === character[Object.keys(query)] && character[Object.keys(query)] !== id && character.name !== theMainCharacter.name) {
        } else if(theMainCharacter[name] !== character[Object.keys(query)] && character[Object.keys(query)] !== id && character.name !== theMainCharacter.name) {
          console.log("matched the main character")
          q = false;
        } else {
          console.log('the else condition for whether it is part of house or allegiance')
          q =true;
        }
      } else {
        if(theMainCharacter[name] !== character[Object.keys(query)] && character.name !== theMainCharacter.name){
          q = false
        } else {
          q = true;
        }
      }
    }
    if(q){
      // console.log(">>>>>>>>>  returning character <<<<<<<<<<< ", character[Object.keys(query)])
      return character
    }
  })
    showCharacters(filteredCharacters)
})
}
}
function showCharacters(characters){
  names.forEach(name=>{ 
    if(name.firstChild){
      let theName = name.firstChild.name;
      let theNameExistsInCharacters = false;  
      for (character of characters){ 
        if(character.name === theName){ 
          theNameExistsInCharacters = true; 
        }  
      }
      if(!theNameExistsInCharacters){ 
        name.innerHTML = '';
      }
    }
  })
}
let counter = 3
$("a[target!='_blank']").click(function (){
  counter -= 1;
  document.getElementById("clicks").innerHTML = counter
  if (counter === 0){
   $('#gameboard div').click(function(e){
     if(theMainCharacter.name.includes(e.currentTarget.firstChild.name)){
       alert('Prepare for your coronation day, the throne is yours.')
       location.reload()
     }
     else{
       alert('Bend the knee, another has taken the throne from you.')
       location.reload()
     }
   }) 
  }
})
// var audio = new Audio('./Game of Thrones - Main Theme (Extended) HD.mp3');
// audio.play();


playGame()
getRandom();
guessCharacter();
console.log(">> the main character <<    ", theMainCharacter)
