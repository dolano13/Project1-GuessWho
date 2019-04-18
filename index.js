
let fullArray = [
{ name:'Jon Snow',
  House:'House-Stark', 
  status:'Alive',
  gender:'Male',
  marriage:'no', 
  allegiance:['Stark','Other'],
  image: './imgs/jonsnow.webp',
},
{ name:'Arya Stark', 
  house:'House-Stark', 
  status:'Alive', 
  gender:'Female',  
  marriage: 'no', 
  allegiance: 'Stark',
  image:'./imgs/aryastark.jpg',
},
{ name: 'Sansa Stark', 
  house: 'House-Stark', 
  status: 'Alive', 
  gender: 'Female',
  marriage: 'yes', allegiance: 'Stark',
  image:'./imgs/sansa.webp',
},
{ name: 'Robb Stark',
  house: 'House-Stark', 
  status: 'Dead', 
  gender: 'Male',
  marriage: 'yes', allegiance: 'Stark',
  image: './imgs/robbstark.jpg',
},
{
  name: 'Bran Stark',
  house: 'House-Stark',
  status: 'Alive',
  gender: 'Male',
  marriage: 'no',
  allegiance: 'Stark',
  image: './imgs/bran.webp',
},
{
  name: 'Catelyn Stark',
  house: 'House-Other',
  status: 'Dead',
  gender: 'Female',
  marriage: 'yes',
  allegiance: 'Stark',
  image: './imgs/catstark.jpg'
},
{
  name: 'Ned Stark',
  house: 'House-Stark',
  status: 'Dead',
  gender: 'Male',
  marriage: 'yes',
  allegiance: 'Stark', 
  image: './imgs/ned stark.jpeg',
  },
{
 name: 'Rickon Stark',
 house: 'House-Stark',
 status: 'Dead',
 gender: 'Male',
 marriage: 'no',
 allegiance: 'Stark',
image: './imgs/rickon.jpg',
    },
{
  name: 'Cersei Lannister',
  house: 'House-Lannister',
  status: 'Alive',
  gender: 'Female',
  marriage: 'yes',
  allegiance: 'Lannister', //technically baratheon too?
  image: './imgs/cersei.webp',
  },
  {
    name: 'Tyrion Lannisterr',
    house: 'House-Lannister',
    status: 'Alive',
    gender: 'Male',
    marriage: 'yes',
    allegiance: ['Lannister', 'Targaryen'],
    image: './imgs/tyrion.webp',
    },
{
  name: 'Jamie Lannister',
  house: 'House-Lannister',
  status: 'Alive',
  gender: 'Male',
  marriage: 'no',
  allegiance: 'Lannister',
  image:'./imgs/jamie.webp',
  }, 
{
  name: 'Tywinn Lannister',
  house: 'House-Lannister',
  status: 'Dead',
  gender: 'Male',
  marriage: 'yes',
  allegiance: 'Lannister',
  image: './imgs/tywinn.jpg',
  }, 
{
  name: 'Robert Baratheon',
  house: 'House-Other',
  status: 'Dead',
  gender: 'Male',
  marriage: 'yes',
  allegiance: 'Other',
  image: './imgs/robert.jpg',
  },
{
  name: 'Joffrey Baratheon',
  house: 'House-Other',
  status: 'Dead',
  gender: 'Male',
  marriage: 'yes',
  allegiance: 'Lannister',
  image: './imgs/joffrey.png',
  },
{
  name: 'Tommen Baratheon',
  house: 'House-Other',
  status: 'Dead',
  gender: 'Male',
  marriage: 'yes',
  allegiance: 'Lannister',
  image: './imgs/tommen.jpg',
  },
{
  name: 'Renly Baratheon',
  house: 'House-Other',
  status: 'Dead',
  gender: 'Male',
  marriage: 'yes',
  allegiance: 'Other',
  image: './imgs/renly.jpg',
  },
{
  name: 'Stannis Baratheon',
  house: 'House-Other',
  status: 'Dead',
  gender: 'Male',
  marriage: 'yes',
  allegiance: 'Other',
  image: './imgs/stannis.jpg' ,
  },
{
  name: 'Myrcella Baratheon',
  house: 'House-Other',
  status: 'Dead',
  gender: 'Female',
  marriage:'no',
  allegiance: 'Other',
  image: './imgs/myrcella.png',
  },
{
  name: 'Shireen Baratheon',
  house: 'House-Other',
  status: 'Dead',
  gender: 'Female',
  marriage:'no',
  allegiance: 'Other',
  image: './imgs/shireen.jpg',
},
{
  name: 'Sandor Clegane',
  house: 'House-Other',
  status: 'Alive',
  gender: 'Male',
  marriage: 'no',
  allegiance: 'Other',
  image: './imgs/hound.webp',
},
{
  name: 'Gregor Clegane',
  house: 'House-Other',
  status: 'Alive',
  gender: 'Male',
  marriage: 'no',
  allegiance: ['Lannister','Other'],
  image: './imgs/mountain.jpg',
},
{
  name: 'Danaerys Targaryen',
  house: 'House-Targaryen',
  status: 'Alive',
  gender: 'Female',
  marriage: 'no',
  allegiance: 'Targaryen',
  image: './imgs/khaleesi.webp',
},
{
  name: 'Jorah Mormont',
  house: 'House-Other',
  status: 'Alive',
  gender: 'Male',
  marriage: 'yes',
  allegiance: 'Targaryen',
  image: './imgs/jorah.webp',
},
{
  name: 'Ramsay Snow',
  house: 'House-Other',
  status: 'Dead',
  gender: 'Male',
  marriage: 'yes',
  allegiance: 'Other',
  image: './imgs/ramsay.png',
},
{
  name: 'Melisandre',
  house: 'House-None',
  status: 'Alive',
  gender: 'Female',
  marriage: 'no',
  allegiance: ['Targaryen', 'Stark', 'Other'],
  image: './imgs/redlady.webp',
},
{
  name: 'Euron Greyjoy',
  house: 'House-Other',
  status: 'Alive',
  gender: 'Male',
  marriage: 'no',
  allegiance: ['Other', 'Lannister'],
  image: './imgs/euron.webp',
  },
{
  name: 'Yara Greyjoy',
  house: 'House-Other',
  status: 'Alive',
  gender: 'Female',
  marriage: 'no',
  allegiance: ['Other', 'Targaryen'],
  image: './imgs/yara.jpg',
},
{
  name: 'Theon Greyjoy',
  house: ['House-Stark','House-Other'],
  status: 'Alive',
  gender: 'Male',
  marriage: 'no',
  allegiance: ['Other', 'Targaryen', 'Stark'],
  image: './imgs/theon.webp',
},
{
  name: 'Viserys Targaryen',
  house: 'House-Targaryen',
  status: 'Dead',
  gender: 'Male',
  marriage: 'no',
  allegiance: 'Targaryen',
  image: './imgs/viserys.jpeg',
},
{
  name: 'Greyworm',
  house: 'House-None',
  status: 'Alive',
  gender: 'Male',
  marriage: 'no',
  allegiance: ['Targaryen', 'Other'],
  image: './imgs/greyworm.webp',
},
{
  name: 'Aerys Targaryen',
  house: 'House-Targaryen',
  status: 'Dead',
  gender: 'Male',
  marriage: 'yes',
  allegiance: ['Targaryen'],
  image: './imgs/madking.jpg',
},
 {
  name: 'Lyanna Stark',
  house: 'House-Stark',
  status: 'Dead',
  gender: 'Female',
  marriage: 'yes',
  allegiance: ['Stark', 'Targaryen'],
  image: './imgs/lyanna.png',
  },
{
  name: 'Benjen Stark',
  house: 'House-Stark',
  status: 'Dead',
  gender: 'Male',
  marriage: 'no',
  allegiance: ['Stark', 'Other'],
  image: './imgs/unclebenjen.png',
},
{
  name: 'Aemon',
  house: 'House-Targaryen',
  status: 'Dead',
  gender: 'Male',
  marriage: 'no',
  allegiance: ['Targaryen', 'Other'],
  image: './imgs/aemon.jpg',
},
{
  name: 'Samwell Tarly',
  house: 'House-Other',
  status: 'Alive',
  gender: 'Male',
  marriage: 'no',
  allegiance: ['Stark', 'Other'],
  image: './imgs/sam.webp',
},
{
  name: 'Missandei',
  house: 'House-None',
  status: 'Alive',
  gender: 'Female',
  marriage: 'no',
  allegiance: ['Targaryen', 'Other'],
  image: './imgs/missandei.webp',
},
{
  name: 'Varys',
  house: 'House-Other',
  status: 'Alive',
  gender: 'Male',
  marriage: 'no',
  allegiance: ['Targaryen', 'Lannister', 'Other'],
  image: './imgs/varys.webp',
},
{
  name: 'Night King',
  house: 'House-None',
  status: 'Dead',
  gender: 'Male',
  marriage: 'no',
  allegiance: 'Other',
  image: './imgs/nightking.webp',
},
{
  name: 'Brienne of Tarth',
  house: 'House-Other',
  status: 'Alive',
  gender: 'Female',
  marriage: 'no',
  allegiance: ['Stark', 'Other'],
  image: './imgs/brienne.webp',
  },
{
  name: 'Davos Seaworth',
  house: 'House-Other',
  status: 'Alive',
  gender: 'Male',
  marriage: 'no',
  allegiance: ['Stark', 'Other'],
  image: './imgs/davos.webp',
  },  
{
  name: 'Tormund Giantsbane',
  house: 'House-None',
  status: 'Alive',
  gender: 'Male',
  marriage: 'no',
  allegiance: ['Stark', 'Other'],
  image: './imgs/tormund.png',
  },   
{
  name: 'Mance Rayder',
  house: 'House-None',
  status: 'Dead',
  gender: 'Male',
  marriage: 'no',
  allegiance:  'Other',
  image: './imgs/mance.jpg',
  },   
{
  name: 'Ygritte',
  house: 'House-None',
  status: 'Dead',
  gender: 'Female',
  marriage: 'no',
  allegiance:  'Other',
  image: './imgs/Ygritte.jpg',
    },
  {name: 'Ser Bronn',
  house: 'House-None',
  status: 'Alive',
  gender: 'Male',
  marriage: 'yes',
  allegiance: 'Lannister', 
  //image: ,
},
  {name: 'Khal Drogo', 
  house: 'House-None',
  status: 'Dead',
  gender:'Male',
  marriage: 'yes',
  allegiance: 'Other'
  // image: ,
},
  {name: 'Loras Tyrell',
  house: 'House-Other',
  status: 'Dead',
  gender: 'Male',
  marriage: 'no',
  allegiance: 'other',
  // image: ,
},
  {name: 'Margaery Tyrell',
  house: 'House-Other',
  status: 'Dead',
  gender: 'Female',
  marriage: 'yes',
  allegiance: ['Lannister','Other']
  // image: ,
 },
{name: 'Olenna Tyrell',
house: 'House-Other',
status: 'Dead',
gender: 'Female',
marriage: 'yes',
allegiance: 'Targaryen',
//image: ,
},
{name: 'Petyr Baelish',
house: 'House-Other',
status: 'Dead',
gender: 'Male',
marriage: 'yes',
allegiance: ['Stark','Other'],
//image: ,
},
{name: 'Walder Frey',
house: 'House-Other',
status: 'Dead',
gender: 'Male',
marriage: 'yes',
allegiance: ['Stark','Lannister'],
//image: ,
},
{name: 'Lyanna Mormont',
house: 'House-Other',
status: 'Alive',
gender: 'Female',
marriage: 'no',
allegiance: 'Stark',
//image: ,
},
{name: 'Gendry',
house: 'House-None',
status: 'Alive',
gender: 'Male',
marriage: 'no',
allegiance: 'Stark',
//image: ,
},
{name: 'Podrick Payne',
house: 'House-None',
status: 'Alive',
gender: 'Male',
marriage: 'no',
allegiance: ['Stark', 'Lannister'],
//image: ,
},
{name: 'Oberyn Martell',
house: 'House-Other',
status: 'Dead',
gender: 'Male',
marriage: 'no',
allegiance: 'Other',
//image: ,
},
{name: 'Qyburn',
house: 'House-None',
status: 'Alive',
gender: 'Male',
marriage: 'no',
allegiance: 'Lannister',
//image: ,
},
{name: 'Hodor',
house: 'House-None',
status: 'Dead',
gender: 'Male',
marriage: 'no',
allegiance: ['Stark', 'Other']
//image: ,
},
{name: 'Beric Dondarrion',
house: 'House-Other',
status: 'Alive',
gender: 'Male',
marriage: 'no',
allegiance: 'Stark',
//image:
}
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
    let randomCharacter = characters[Math.floor(Math.random() * (30))];
    theMainCharacter = randomCharacter;
    return randomCharacter
   };

var anchors = document.getElementsByTagName("a")
let names = document.querySelectorAll('#gameboard > div');

let newArray = []

function playGame(){
for (let i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener('click', function(e) {
    console.log("=========>", e,this)
    let name = this.name;
    let id = this.id
    console.log("--------- >>> ",theMainCharacter, theMainCharacter[name]);
    newArray.push({[name]:id}) 
  let filteredCharacters = characters.filter(character=>{
    let q= true; 
    for (query of newArray){
        console.log("the name --------- >> ", name);
        console.log("the id --------- >>> ", id);
        console.log("the query --------- >>>> ", query);
        console.log('the chacacter ====== >> ', character);

      if(name === 'house' || name === 'allegiance') {
        if(theMainCharacter[name] !== character[Object.keys(query)] && character[Object.keys(query)] === id && character.name !== theMainCharacter.name) {
          q = false;
        } else if(theMainCharacter[name] === character[Object.keys(query)] && character[Object.keys(query)] !== id && character.name !== theMainCharacter.name) {
          q = false;
        } else {
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
      console.log(">>>>>>>>>  returning character <<<<<<<<<<< ", character[Object.keys(query)])
      return character
    }
  })
    console.log("filtered characters array %%%%%%%%%%%%%%% ", filteredCharacters)
    showCharacters(filteredCharacters)
    // console.log("**********", characters)
})
}
}
function showCharacters(characters){
  // console.log(names, characters)
  names.forEach(name=>{ //Loop thru all the peeps on screen
    // console.log(name)
    // console.log(name.firstChild)
    if(name.firstChild){
      let theName = name.firstChild.name;
      let theNameExistsInCharacters = false;  
      for (character of characters){ //loop through all the filtered characters
        if(character.name === theName){ 
          theNameExistsInCharacters = true; //found a match 
        }  
      }
      if(!theNameExistsInCharacters){ //if i never found a match empty out that div

        name.innerHTML = '';
      }
    }

  })

}
let counter = 3
$("a[target!='_blank']").click(function clues(){
  counter -= 1;
  document.getElementById("clicks").innerHTML = counter
})
if( counter === 0){
  $("a[target!='_blank']").click(function(){
    $(this).toggle()
  })
  }


playGame()
//call function on the click event
//global counter  --> pop up -->input box
 //audio variable and use url to put in song
 //modal doesnt do anything until they click ok on the modal or make a second page of the splash page
 //when you lose or win you can put replay and then jsut have the window reload
getRandom();
guessCharacter();
console.log(">> the main character <<    ", theMainCharacter)
//for guessing make a button you click that opens up text box
// var button = document.createElement("button");
// button.innerHTML = "Guess";
// var guess = document.getElementsByTagName(span)[0];
// body.appendChild(button);
// button.addEventListener ("click", function() {
//   alert("did something");
// });
