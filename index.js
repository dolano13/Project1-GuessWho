
let fullArray = [
{ name:'Jon Snow',
 House:'House-Stark', 
 status:'Alive',
 gender:'Male',
  titles: ['King', 'Lord', 'Nights Watch',],
  marriage:'no', 
  allegiance:['Stark', 'Targaryen', 'Other'],
  image: './imgs/jonsnow.webp',
},
{ name:'Arya Stark', 
house:'House-Stark', 
status:'Alive', gender:'female',  
titles:['Faceless-Men','Lady','Peasant'],
marriage: 'no', allegiance: 'Stark',
image:'./imgs/aryastark.jpg',
},
{ name: 'Sansa Stark', 
house: 'House-Stark', 
status: 'Alive', 
gender: 'female',
titles: ['Lady', 'Handmaiden'],
marriage: 'yes', allegiance: 'Stark',
image:'./imgs/sansa.webp',
},
{ name: 'Robb Stark',
 house: 'House-Stark', 
 status: 'Dead', 
 gender: 'male',
  titles: ['King','Lord'],
  marriage: 'yes', allegiance: 'Stark',
  image: './imgs/robbstark.jpg',
},
{
  name: 'Bran Stark',
  house: 'House-Stark',
  status: 'Alive',
  gender: 'male',
  titles: 'Lord',
  marriage: 'no',
  allegiance: 'Stark',
  image: './imgs/bran.webp',
},
{
  name: 'Catelyn Stark',
  house: 'House-Other',
  status: 'Dead',
  gender: 'female',
  titles: ['Lady', 'Mother'],
  marriage: 'yes',
  allegiance: 'Stark',
  image: './imgs/catstark.jpg'
},
{
  name: 'Ned Stark',
  house: 'House-Stark',
  status: 'Dead',
  gender: 'male',
  titles: ['Lord', 'Hand'],
  marriage: 'yes',
  allegiance: 'Stark', 
  image: './imgs/ned stark.jpeg',
  },
{
 name: 'Rickon Stark',
 house: 'House-Stark',
 status: 'Dead',
 gender: 'male',
 titles: 'Lord',
 marriage: 'no',
 allegiance: 'Stark',
image: './imgs/rickon.jpg',
    },
{
  name: 'Cersei Lannister',
  house: 'House-Lannister',
  status: 'Alive',
  gender: 'female',
  titles: ['Queen', 'Hand', 'Mother'],
  marriage: 'yes',
  allegiance: 'Lannister', //technically baratheon too?
  image: './imgs/cersei.webp',
  },
  {
    name: 'Tyrion Lannisterr',
    house: 'House-Lannister',
    status: 'Alive',
    gender: 'male',
    titles:  ['Lord', 'Hand', 'advisor'],
    marriage: 'yes',
    allegiance: ['Lannister', 'Targaryen'],
    image: './imgs/tyrion.webp',
    },
{
  name: 'Jamie Lannister',
  house: 'House-Lannister',
  status: 'Alive',
  gender: 'male',
  titles: ['Hand','Kingsgaurd'],
  marriage: 'no',
  allegiance: 'Lannister',
  image:'./imgs/jamie.webp',
  }, 
{
  name: 'Tywinn Lannister',
  house: 'House-Lannister',
  status: 'Dead',
  gender: 'male',
  titles: ['Hand','Lord'],
  marriage: 'yes',
  allegiance: 'Lannister',
  image: './imgs/tywinn.jpg',
  }, 
{
  name: 'Robert Baratheon',
  house: 'House-Other',
  status: 'Dead',
  gender: 'male',
  titles: 'King',//he had another title idr
  marriage: 'yes',
  allegiance: 'Other',
  image: './imgs/robert.jpg',
  },
{
  name: 'Joffrey Baratheon',
  house: 'House-Other',
  status: 'Dead',
  gender: 'male',
  titles: 'King',
  marriage: 'yes',
  allegiance: 'Lannister',
  image: './imgs/joffrey.png',
  },
{
  name: 'Tommen Baratheon',
  house: 'House-Other',
  status: 'Dead',
  gender: 'male',
  titles: 'King',
  marriage: 'yes',
  allegiance: 'Lannister',
  image: './imgs/tommen.jpg',
  },
{
  name: 'Renly Baratheon',
  house: 'House-Other',
  status: 'Dead',
  gender: 'Lord',
  titles: 'yes',
  marriage: 'yes',
  allegiance: 'Other',
  image: './imgs/renly.jpg',
  },
{
  name: 'Stannis Baratheon',
  house: 'House-Other',
  status: 'Dead',
  gender: 'male',
  titles: 'Lord',
  marriage: 'yes',
  allegiance: 'Other',
  image: './imgs/stannis.jpg' ,
  },
{
  name: 'Myrcella Baratheon',
  house: 'House-Other',
  status: 'Dead',
  gender: 'female',
  title: 'Princess',
  marriage:'no',
  allegiance: 'Other',
  image: './imgs/myrcella.png',
  },
{
  name: 'Shireen Baratheon',
  house: 'House-Other',
  status: 'Dead',
  gender: 'female',
  title: 'Princess',
  marriage:'no',
  allegiance: 'Other',
  image: './imgs/shireen.jpg',
},
{
  name: 'Sandor Clegane',
  house: 'House-Other',
  status: 'Alive',
  gender: 'Male',
  titles: ['Knight', 'Kingsgaurd', 'Soldier'],
  marriage: 'no',
  allegiance: 'Other',
  image: './imgs/hound.webp',
},
{
  name: 'Gregor Clegane',
  house: 'House-Other',
  status: 'Alive',
  gender: 'Male',
  titles: ['Queensgaurd', 'Kingsgaurd'],
  marriage: 'no',
  allegiance: ['Lannister','Other'],
  image: './imgs/mountain.jpg',
},
{
  name: 'Danaerys Targaryen',
  house: 'House-Targaryen',
  status: 'Alive',
  gender: 'Female',
  titles: ['Queen','Wife'],
  marriage: 'no',
  allegiance: 'Targaryen',
  image: './imgs/khaleesi.webp',
},
{
  name: 'Jorah Mormont',
  house: 'House-Other',
  status: 'Alive',
  gender: 'Male',
  titles: ['Queensgaurd','knight','small council', 'slave'],
  marriage: 'yes',
  allegiance: 'Targaryen',
  image: './imgs/jorah.webp',
},
{
  name: 'Ramsay Snow',
  house: 'House-Other',
  status: 'Dead',
  gender: 'Male',
  titles: ['Bastard', 'Lord'],
  marriage: 'yes',
  allegiance: 'Other',
  image: './imgs/ramsay.png',
},
{
  name: 'Melisandre',
  house: 'House-None',
  status: 'Alive',
  gender: 'Female',
  titles: ['Lady','Small Council'],
  marriage: 'no',
  allegiance: ['Targaryen', 'Stark', 'Other'],
  image: './imgs/redlady.webp',
},
{
  name: 'Euron Greyjoy',
  house: 'House-Other',
  status: 'Alive',
  gender: 'Male',
  titles: ['Lord', 'Soldier'],
  marriage: 'no',
  allegiance: ['Other', 'Lannister'],
  image: './imgs/euron.webp',
  },
{
  name: 'Yara Greyjoy',
  house: 'House-Other',
  status: 'Alive',
  gender: 'Female',
  titles: ['Queen', 'Lady','Soldier'],
  marriage: 'no',
  allegiance: ['Other', 'Targaryen'],
  image: './imgs/yara.jpg',
},
{
  name: 'Theon Greyjoy',
  house: ['House-Stark','House-Other'],
  status: 'Alive',
  gender: 'Male',
  titles: ['Lord','Prince', 'Kingsgaurd','Soldier'],
  marriage: 'no',
  allegiance: ['Other', 'Targaryen', 'Stark'],
  image: './imgs/theon.webp',
},
{
  name: 'Viserys Targaryen',
  house: 'House-Targaryen',
  status: 'Dead',
  gender: 'Male',
  titles: ['Prince', 'Lord', 'King'],
  marriage: 'no',
  allegiance: 'Targaryen',
  image: './imgs/viserys.jpeg',
},
{
  name: 'Greyworm',
  house: 'House-None',
  status: 'Alive',
  gender: 'Male',
  titles: ['slave', 'soldier','queensgaurd'],
  marriage: 'no',
  allegiance: ['Targaryen', 'Other'],
  image: './imgs/greyworm.webp',
},
{
  name: 'Aerys Targaryen',
  house: 'House-Targaryen',
  status: 'Dead',
  gender: 'Male',
  titles: 'King',
  marriage: 'yes',
  allegiance: ['Targaryen'],
  image: './imgs/madking.jpg',
},
 {
  name: 'Lyanna Stark',
  house: 'House-Stark',
  status: 'Dead',
  gender: 'female',
  titles: ['Lady', 'Mother'],
  marriage: 'yes',
  allegiance: ['Stark', 'Targaryen'],
  image: './imgs/lyanna.png',
  },
{
  name: 'Benjen Stark',
  house: 'House-Stark',
  status: 'Dead',
  gender: 'Male',
  titles: ['Ranger', 'Lord', 'Nights Watch'],
  marriage: 'no',
  allegiance: ['Stark', 'Other'],
  image: './imgs/unclebenjen.png',
},
{
  name: 'Aemon',
  house: 'House-Targaryen',
  status: 'Dead',
  gender: 'Male',
  titles: ['Maester', 'Prince', 'Nights Watch'],
  marriage: 'no',
  allegiance: ['Targaryen', 'Other'],
  image: './imgs/aemon.jpg',
},
{
  name: 'Samwell Tarly',
  house: 'House-Other',
  status: 'Alive',
  gender: 'Male',
  titles: ['Maester', 'Lord', 'Nights Watch', 'Steward'],
  marriage: 'no',
  allegiance: ['Stark', 'Other'],
  image: './imgs/sam.webp',
},
{
  name: 'Missandei',
  house: 'House-None',
  status: 'Alive',
  gender: 'Female',
  titles: ['slave', 'small council','handmaiden'],
  marriage: 'no',
  allegiance: ['Targaryen', 'Other'],
  image: './imgs/missandei.webp',
},
{
  name: 'Varys',
  house: 'House-Other',
  status: 'Alive',
  gender: 'Male',
  titles: ['small council', 'lord'],
  marriage: 'no',
  allegiance: ['Targaryen', 'Lannister', 'Other'],
  image: './imgs/varys.webp',
},
{
  name: 'Night King',
  house: 'House-None',
  status: 'Dead',
  gender: 'Male',
  titles: ['king', 'soldier'],
  marriage: 'no',
  allegiance: 'Other',
  image: './imgs/nightking.webp',
},
{
  name: 'Brienne of Tarth',
  house: 'House-Other',
  status: 'Alive',
  gender: 'female',
  titles: ['Lady', 'Kingsgaurd', 'Protector'],
  marriage: 'no',
  allegiance: ['Stark', 'Other'],
  image: './imgs/brienne.webp',
  },
{
  name: 'Davos Seaworth',
  house: 'House-Other',
  status: 'Alive',
  gender: 'male',
  titles: ['Knight', 'Kingsgaurd', 'small council'],
  marriage: 'no',
  allegiance: ['Stark', 'Other'],
  image: './imgs/davos.webp',
  },  
{
  name: 'Tormund Giantsbane',
  house: 'House-None',
  status: 'Alive',
  gender: 'male',
  titles: ['soldier','wildling'],
  marriage: 'no',
  allegiance: ['Stark', 'Other'],
  image: './imgs/tormund.png',
  },   
{
  name: 'Mance Rayder',
  house: 'House-None',
  status: 'Dead',
  gender: 'male',
  titles: ['King','Nights Watch'],
  marriage: 'no',
  allegiance:  'Other',
  image: './imgs/mance.jpg',
  },   
{
  name: 'Ygritte',
  house: 'House-None',
  status: 'Dead',
  gender: 'female',
  titles: ['soldier','wildling'],
  marriage: 'no',
  allegiance:  'Other',
  image: './imgs/Ygritte.jpg',
    },
//   {name: 'Ser Bronn',
//   house: 'House-None',
//   status: 'Alive',
//   gender: 'male',
//   titles: ['Knight', 'Soldier', 'Commander'],
//   marriage: 'yes',
//   allegiance: 'Lannister', 
//   //image: ,
//   },
//   {name: 'Khal Drogo', 
//   house: 'House-None',
//   status: 'Dead',
//   gender:'male',
//   titles:['soldier', 'leader'],
//   marriage: 'yes',
//   allegiance: 'Other'
//   // image: ,
//   },
//   {name: 'Loras Tyrell',
//   house: 'House-Other',
//   status: 'Dead',
//   gender: 'male',
//   titles: ['knight', 'Kingsgaurd'],
//   marriage: 'no',
//   allegiance: 'other',
//   // image: ,
//   },
//   {name: 'Margaery Tyrell',
//   house: 'House-Other',
//   status: 'Dead',
//   gender: 'female',
//   titles: ['Lady','Queen'],
//   marriage: 'yes',
//   allegiance: ['Lannister','Other']
//   // image: ,
// },
// {name: 'Olenna Tyrell',
// house: 'House-Other',
// status: 'Dead',
// gender: 'female',
// titles: 'Queen',
// marriage: 'yes',
// allegiance: 'Targaryen',
// //image: ,
// },
// {name: 'Petyr Baelish',
// house: 'House-Other',
// status: 'Dead',
// gender: 'male',
// titles: ['Lord','advisor', 'small council'],
// marriage: 'yes',
// allegiance: ['Stark','Other'],
// //image: ,
// },
// {name: 'Walder Frey',
// house: 'House-Other',
// status: 'Dead',
// gender: 'male',
// titles: 'Lord',
// marriage: 'yes',
// allegiance: ['Stark','Lannister'],
// //image: ,
// },
// {name: 'Lyanna Mormont',
// house: 'House-Other',
// status: 'Alive',
// gender: 'female',
// titles: 'Lady',
// marriage: 'no',
// allegiance: 'Stark',
// //image: ,
// },
// {name: 'Gendry',
// house: 'House-None',
// status: 'Alive',
// gender: 'male',
// titles: ['Lord','soldier'],
// marriage: 'no',
// allegiance: 'Stark',
// //image: ,
// },
// {name: 'Podrick Payne',
// house: 'House-None',
// status: 'Alive',
// gender: 'male',
// titles: 'soldier',
// marriage: 'no',
// allegiance: ['Stark', 'Lannister'],
// //image: ,
// },
// {name: 'Oberyn Martell',
// house: 'House-Other',
// status: 'Dead',
// gender: 'male',
// titles: ['soldier', 'Prince'],
// marriage: 'no',
// allegiance: 'Other',
// //image: ,
// },
// {name: 'Qyburn',
// house: 'House-None',
// status: 'Alive',
// gender: 'male',
// titles: 'Hand',
// marriage: 'no',
// allegiance: 'Lannister',
// //image: ,
// },
// {name: 'Hodor',
// house: 'House-None',
// status: 'Dead',
// gender: 'male',
// titles: 'protector',
// marriage: 'no',
// allegiance: ['Stark', 'Other']
// //image: ,
// },
// {name: 'Beric Dondarrion',
// house: 'House-Other',
// status: 'Alive',
// gender: 'male',
// titles: ['soldier', 'knight', 'lord'],
// marriage: 'no',
// allegiance: 'Stark',
// //image:
// }
] 

  let characters = [];

  function getRandom() {
    for (i = 0; i < 24; i++){
      let randomNum = Math.floor(Math.random() * ((fullArray.length - 1) + 1))
      let character = fullArray[randomNum]
      fullArray.splice(randomNum, 1)
      characters.push(character)
     // console.log(character)
      //$('#gameboard div').eq(i).html(character.name)
      $('#gameboard div').eq(i).html(`<img src="${character.image}" name="${character.name}" width="50px" />`)
    }
   }
        // $('#gameboard div').eq(i).html(character.name)
      //`<img src=${character.image} width="50px">`

//do this for every var
var anchors = document.getElementsByTagName("a")
let names = document.querySelectorAll('#gameboard > div');

// let newArray = []
//console.log(names)
// function playGame(){
// for (let i = 0; i < anchors.length; i++) {
//   anchors[i].addEventListener('click', function(e) {
//     for (character in characters){
//       if (e.path[0].id !== characters[character].status) {
//         names.forEach(elem => {
//           if (elem.innerText.includes(characters[character].name)) {
//             elem.innerText = ''
//           }
//          })
//        }
//     //   // console.log(characters[character].House)
//      }
    
//    // console.log(e)
//   })
// }
//};


let newArray = []


function playGame(){
for (let i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener('click', function(e) {
    console.log(e,this)
  let name = this.name;
  let id = this.id
  newArray.push({[name]:id})
  let filteredCharacters = characters.filter(character=>{
    //onsole.log(character)
    let q= true; 
    for (query of newArray){
      //console.log(Object.keys(query))
      if(character[Object.keys(query)] !== query[Object.keys(query)]){
        q = false
      }
    }
    if(q){
      return character
    }
  })
    console.log(filteredCharacters)
    showCharacters(filteredCharacters)
})
}
}



function showCharacters(characters){
  console.log(names, characters)
  names.forEach(name=>{ //Loop thru all the peeps on screen
    console.log(name)
    console.log(name.firstChild)
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

playGame()
//call function on the click event

    // console.log(e,this)
    // let name = this.name;
    // let id = this.id
    // newArray.push({[name]:id})
    // let filteredCharacters = characters.filter(character=>{
    //   console.log(character)
    //   let q= true; 
    //   for (query of newArray){
    //     console.log(Object.keys(query))
    //     if(character[Object.keys(query)] !== query[Object.keys(query)]){
    //       q = false
    //     }
    //   }
    //   if(q){
    //     return character
    //   }
    // })
    //   console.log(filteredCharacters)

    // filteredCharacters.forEach(eachCharacter=>{

    

  
    // console.log(anchors[i])

 
//global counter  --> pop up -->input box
 
// } 
getRandom();

//for guessing make a button you click that opens up text box
// var button = document.createElement("button");
// button.innerHTML = "Guess";
// var guess = document.getElementsByTagName(span)[0];
// body.appendChild(button);
// button.addEventListener ("click", function() {
//   alert("did something");
// });
