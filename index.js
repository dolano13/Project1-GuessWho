
let fullArray = [
{ name:'Jon Snow',
 House:'Stark', 
 status:'Alive',
 gender:'Male',
  titles: ['King', 'Lord', 'Nights Watch',],
  marriage:'no', 
  allegiance:['Stark', 'Targaryen', 'Other'],
  // image: './imgs/jonsnow.webp',
},
{ name:'Arya Stark', 
House:'Stark', 
status:'alive', gender:'female',  
titles:['Faceless-Men','Lady','Peasant'],
marriage: 'no', allegiance: 'Stark',
//image:'./imgs/aryastark.jpg',
},
{ name: 'Sansa Stark', 
House: 'Stark', 
status: 'alive', 
gender: 'female',
titles: ['Lady', 'Handmaiden'],
marriage: 'yes', allegiance: 'Stark',
//image:'./imgs/sansa.webp',
},
{ name: 'Robb Stark',
 House: 'Stark', 
 status: 'dead', 
 gender: 'male',
  titles: ['King','Lord'],
  marriage: 'yes', allegiance: 'Stark',
  // image: './imgs/robbstark.jpg',
},
{
  name: 'Bran Stark',
  House: 'Stark',
  status: 'alive',
  gender: 'male',
  titles: 'Lord',
  marriage: 'no',
  allegiance: 'Stark',
  // image: './imgs/bran.webp',
},
{
  name: 'Catelyn Stark',
  House: 'Other',
  status: 'dead',
  gender: 'female',
  titles: ['Lady', 'Mother'],
  marriage: 'yes',
  allegiance: 'Stark',
  // image: './imgs/catstark.jpg'
},
{
  name: 'Ned Stark',
  House: 'Stark',
  status: 'dead',
  gender: 'male',
  titles: ['Lord', 'Hand'],
  marriage: 'yes',
  allegiance: 'Stark', 
  // image: './imgs/ned stark.jpeg',
  },
{
 name: 'Rickon Stark',
 House: 'Stark',
 status: 'dead',
 gender: 'male',
 titles: 'Lord',
 marriage: 'no',
 allegiance: 'Stark',
//  image: './imgs/rickon.jpg',
    },
{
  name: 'Cersei Lannister',
  House: 'Lannister',
  status: 'alive',
  gender: 'female',
  titles: ['Queen', 'Hand', 'Mother'],
  marriage: 'yes',
  allegiance: 'Lannister', //technically baratheon too?
  // image: './imgs/cersei.webp',
  },
  {
    name: 'Tyrion Lannisterr',
    House: 'Lannister',
    status: 'alive',
    gender: 'male',
    titles:  ['Lord', 'Hand', 'advisor'],
    marriage: 'yes',
    allegiance: ['Lannister', 'Targaryen'],
    // image: './imgs/tyrion.webp',
    },
{
  name: 'Jamie Lannister',
  House: 'Lannister',
  status: 'alive',
  gender: 'male',
  titles: ['Hand','Kingsgaurd'],
  marriage: 'no',
  allegiance: 'Lannister',
  // image:'./imgs/jamie.webp',
  }, 
{
  name: 'Tywinn Lannister',
  House: 'Lannister',
  status: 'dead',
  gender: 'male',
  titles: ['Hand','Lord'],
  marriage: 'yes',
  allegiance: 'Lannister',
  // image: './imgs/tywinn.jpg',
  }, 
{
  name: 'Robert Baratheon',
  House: 'Other',
  status: 'dead',
  gender: 'male',
  titles: 'King',//he had another title idr
  marriage: 'yes',
  allegiance: 'Other',
  // image: './imgs/robert.jpg',
  },
{
  name: 'Joffrey Baratheon',
  House: 'Other',
  status: 'dead',
  gender: 'male',
  titles: 'King',
  marriage: 'yes',
  allegiance: 'Lannister',
  // image: './imgs/joffrey.png',
  },
{
  name: 'Tommen Baratheon',
  House: 'Other',
  status: 'dead',
  gender: 'male',
  titles: 'King',
  marriage: 'yes',
  allegiance: 'Lannister',
  // image: './imgs/tommen.jpg',
  },
{
  name: 'Renly Baratheon',
  House: 'Other',
  status: 'dead',
  gender: 'Lord',
  titles: 'yes',
  marriage: 'yes',
  allegiance: 'Other',
  // image: './imgs/renly.jpg',
  },
{
  name: 'Stannis Baratheon',
  House: 'Other',
  status: 'dead',
  gender: 'male',
  titles: 'Lord',
  marriage: 'yes',
  allegiance: 'Other',
  // image: './imgs/stannis.jpg' ,
  },
{
  name: 'Myrcella Baratheon',
  House: 'Other',
  status: 'dead',
  gender: 'female',
  title: 'Princess',
  marriage:'no',
  allegiance: 'Other',
  // image: './imgs/myrcella.png',
  },
{
  name: 'Shireen Baratheon',
  House: 'Other',
  status: 'dead',
  gender: 'female',
  title: 'Princess',
  marriage:'no',
  allegiance: 'Other',
  // image: './imgs/shireen.jpg',
},
{
  name: 'Sandor Clegane',
  House: 'Other',
  status: 'Alive',
  gender: 'Male',
  titles: ['Knight', 'Kingsgaurd', 'Soldier'],
  marriage: 'no',
  allegiance: 'Other',
  // image: './imgs/hound.webp',
},
{
  name: 'Gregor Clegane',
  House: 'Other',
  status: 'Alive',
  gender: 'Male',
  titles: ['Queensgaurd', 'Kingsgaurd'],
  marriage: 'no',
  allegiance: ['Lannister','Other'],
  // image: './imgs/mountain.jpg',
},
{
  name: 'Danaerys Targaryen',
  House: 'Targaryen',
  status: 'Alive',
  gender: 'Female',
  titles: ['Queen','Wife'],
  marriage: 'no',
  allegiance: 'Targaryen',
  // image: './imgs/khaleesi.webp',
},
{
  name: 'Jorah Mormont',
  House: 'Other',
  status: 'Alive',
  gender: 'Male',
  titles: ['Queensgaurd','knight','small council', 'slave'],
  marriage: 'yes',
  allegiance: 'Targaryen',
  // image: './imgs/jorah.webp',
},
{
  name: 'Ramsay Snow',
  House: 'other',
  status: 'dead',
  gender: 'Male',
  titles: ['Bastard', 'Lord'],
  marriage: 'yes',
  allegiance: 'Other',
  // image: './imgs/ramsay.png',
},
{
  name: 'Melisandre',
  House: 'Other',
  status: 'Alive',
  gender: 'Female',
  titles: ['Lady','Small Council'],
  marriage: 'no',
  allegiance: ['Targaryen', 'Stark', 'Other'],
  // image: './imgs/redlady.webp',
},
{
  name: 'Euron Greyjoy',
  House: 'Greyjoy',
  status: 'Alive',
  gender: 'Male',
  titles: ['Lord', 'Soldier'],
  marriage: 'no',
  allegiance: ['Other', 'Lannister'],
  // image: './imgs/euron.webp',
  },
{
  name: 'Yara Greyjoy',
  House: 'Greyjoy',
  status: 'Alive',
  gender: 'Female',
  titles: ['Queen', 'Lady','Soldier'],
  marriage: 'no',
  allegiance: ['Other', 'Targaryen'],
  // image: './imgs/yara.jpg',
},
{
  name: 'Theon Greyjoy',
  House: ['Stark','Other'],
  status: 'Alive',
  gender: 'Male',
  titles: ['Lord','Prince', 'Kingsgaurd','Soldier'],
  marriage: 'no',
  allegiance: ['Other', 'Targaryen', 'Stark'],
  // image: './imgs/theon.webp',
},
{
  name: 'Viserys Targaryen',
  House: 'Targaryen',
  status: 'Dead',
  gender: 'Male',
  titles: ['Prince', 'Lord', 'King'],
  marriage: 'no',
  allegiance: 'Targaryen',
  // image: './imgs/viserys.jpeg',
},
{
  name: 'Greyworm',
  House: 'Other',
  status: 'Alive',
  gender: 'Male',
  titles: ['slave', 'soldier','queensgaurd'],
  marriage: 'no',
  allegiance: ['Targaryen', 'Other'],
  // image: './imgs/greyworm.webp',
},
{
  name: 'Aerys Targaryen',
  House: 'Targaryen',
  status: 'Dead',
  gender: 'Male',
  titles: 'King',
  marriage: 'yes',
  allegiance: ['Targaryen'],
  // image: './imgs/madking.jpg',
},
 {
  name: 'Lyanna Stark',
  House: 'Stark',
  status: 'dead',
  gender: 'female',
  titles: ['Lady', 'Mother'],
  marriage: 'yes',
  allegiance: ['Stark', 'Targaryen'],
  // image: './imgs/lyanna.png',
  },
{
  name: 'Benjen Stark',
  House: 'Stark',
  status: 'dead',
  gender: 'Male',
  titles: ['Ranger', 'Lord', 'Nights Watch'],
  marriage: 'no',
  allegiance: ['Stark', 'Other'],
  // image: './imgs/unclebenjen.png',
},
{
  name: 'Aemon',
  House: 'Targaryen',
  status: 'dead',
  gender: 'Male',
  titles: ['Maester', 'Prince', 'Nights Watch'],
  marriage: 'no',
  allegiance: ['Targaryen', 'Other'],
  // image: './imgs/aemon.jpg',
},
{
  name: 'Samwell Tarly',
  House: 'Other',
  status: 'alive',
  gender: 'Male',
  titles: ['Maester', 'Lord', 'Nights Watch', 'Steward'],
  marriage: 'no',
  allegiance: ['Stark', 'Other'],
  // image: './imgs/sam.webp',
},
{
  name: 'Missandei',
  House: 'Other',
  status: 'Alive',
  gender: 'Female',
  titles: ['slave', 'small council','handmaiden'],
  marriage: 'no',
  allegiance: ['Targaryen', 'Other'],
  // image: './imgs/missandei.webp',
},
{
  name: 'Varys',
  House: 'Other',
  status: 'Alive',
  gender: 'Male',
  titles: ['small council', 'lord'],
  marriage: 'no',
  allegiance: ['Targaryen', 'Lannister', 'Other'],
  // image: './imgs/varys.webp',
},
{
  name: 'Night King',
  House: 'Other',
  status: 'Dead',
  gender: 'Male',
  titles: ['king', 'soldier'],
  marriage: 'no',
  allegiance: 'Other',
  // image: './imgs/nightking.webp',
},
{
  name: 'Brienne of Tarth',
  House: 'Other',
  status: 'alive',
  gender: 'female',
  titles: ['Lady', 'Kingsgaurd', 'Protector'],
  marriage: 'no',
  allegiance: ['Stark', 'Other'],
  // image: './imgs/brienne.webp',
  },
{
  name: 'Davos Seaworth',
  House: 'Other',
  status: 'alive',
  gender: 'male',
  titles: ['Knight', 'Kingsgaurd', 'small council'],
  marriage: 'no',
  allegiance: ['Stark', 'Other'],
  // image: './imgs/davos.webp',
  },  
{
  name: 'Tormund Giantsbane',
  House: 'Other',
  status: 'alive',
  gender: 'male',
  titles: ['soldier','wildling'],
  marriage: 'no',
  allegiance: ['Stark', 'Other'],
  // image: './imgs/tormund.png',
  },   
{
  name: 'Mance Rayder',
  House: 'Other',
  status: 'dead',
  gender: 'male',
  titles: ['King','Nights Watch'],
  marriage: 'no',
  allegiance:  'Other',
  // image: './imgs/mance.jpg',
  },   
{
  name: 'Ygritte',
  House: 'Other',
  status: 'dead',
  gender: 'female',
  titles: ['soldier','wildling'],
  marriage: 'no',
  allegiance:  'Other',
  // image: './imgs/Ygritte.jpg',
    },
  {name: 'Ser Bronn',
  House: 'Other',
  status: 'alive',
  gender: 'male',
  titles: ['Knight', 'Soldier', 'Commander'],
  marriage: 'yes',
  allegiance: 'Lannister', 
  // image: ,
  },
  {name: 'Ser Bronn',
  House: 'Other',
  status: 'alive',
  gender: 'male',
  titles: ['Knight', 'Soldier', 'Commander'],
  marriage: 'yes',
  allegiance: 'Lannister', 
  // image: ,
  },
  {name: 'Khal Drogo', 
  House: 'None',
  status: 'dead',
  gender:'male',
  titles:['soldier', 'leader'],
  marriage: 'yes',
  allegiance: 'Other'
  // image: ,
  },
  {name: 'Loras Tyrell',
  House: 'Other',
  status: 'dead',
  gender: 'male',
  titles: ['knight', 'Kingsgaurd'],
  marriage: 'no',
  allegiance: 'other',
  // image: ,
  },
  {name: 'Margaery Tyrell',
  House: 'Other',
  status: 'dead',
  gender: 'female',
  titles: ['Lady','Queen'],
  marriage: 'yes',
  allegiance: ['Lannister','Other']
  // image: ,
},
{name: 'Olenna Tyrell',
House: 'Other',
status: 'dead',
gender: 'female',
titles: 'Queen',
marriage: 'yes',
allegiance: 'Targaryen',
//image: ,
},
{name: 'Petyr Baelish',
House: 'Other',
status: 'dead',
gender: 'male',
titles: ['Lord','advisor', 'small council'],
marriage: 'yes',
allegiance: ['Stark','Other'],
//image: ,
},
{name: 'Walder Frey',
House: 'Other',
status: 'dead',
gender: 'male',
titles: 'Lord',
marriage: 'yes',
allegiance: ['Stark','Lannister'],
//image: ,
},
{name: 'Lyanna Mormont',
House: 'Other',
status: 'alive',
gender: 'female',
titles: 'Lady',
marriage: 'no',
allegiance: 'Stark',
//image: ,
},
{name: 'Gendry',
House: 'none',
status: 'alive',
gender: 'male',
titles: ['Lord','soldier'],
marriage: 'no',
allegiance: 'Stark',
//image: ,
},
{name: 'Podrick Payne',
House: 'none',
status: 'alive',
gender: 'male',
titles: 'soldier',
marriage: 'no',
allegiance: ['Stark', 'Lannister'],
//image: ,
},
{name: 'Oberyn Martell',
House: 'Other',
status: 'dead',
gender: 'male',
titles: ['soldier', 'Prince'],
marriage: 'no',
allegiance: 'Other',
//image: ,
},
{name: 'Qyburn',
House: 'none',
status: 'alive',
gender: 'male',
titles: 'Hand',
marriage: 'no',
allegiance: 'Lannister',
//image: ,
},
{name: 'Hodor',
House: 'none',
status: 'dead',
gender: 'male',
titles: 'protector',
marriage: 'no',
allegiance: ['Stark', 'Other']
//image: ,
},
{name: 'Beric Dondarrion',
House: 'Other',
status: 'alive',
gender: 'male',
titles: ['solder', 'knight', 'lord'],
marriage: 'no',
allegiance: 'Stark',
//image:
}
] 

  let characters = [];

  function getRandom() {
    for (i = 0; i < 24; i++){
      let randomNum = Math.floor(Math.random() * ((fullArray.length - 1) + 1))
      let character = fullArray[randomNum]
      fullArray.splice(randomNum, 1)
      characters.push(character)
      $('#gameboard div').eq(i).html(character.name)
    }
   }
        // $('#gameboard div').eq(i).html(character.name)
      //`<img src=${character.image} width="50px">`
// for (i = 0; i < 24; i++){
// document.querySelector("#House-Stark").onclick = function() {
//   if(character.House !== 'Stark'){
//     (character).hide();
//   }

  var anchors = document.getElementsByTagName("a")
  for(let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener('click', function(e) {
      e.preventDefault()
      for (character in characters){
        if(e.path[0].id != character.House){
        (character).toggle(character.name);
        }
      console.log("the event ------- ", e.path[0].id);
      }
    })
  }
//ironcart
  // state.House = !state.House
  // renderEverything()
// }
// } 
getRandom();



    // getRandom(characters)

// function renderCharacter() {
//     document.querySelectorAll('.character').forEach(function($character){
//     if (state.character) {
//        $character.style.visibility = "visible";
//       }
//     else {
//       $character.style.visibility = "hidden";
//       }
//       })
//     }

// describe('guessWho constructor', function () {
//       beforeEach(function () {
//         guessWho = new guessWho([]);
//       });
    
    //   it('Create MemoryGame object', function () {
    //     expect(typeof MemoryGame).toBe('function');
    //   });
    
    //   it('MemoryGame should receive `cards` as a parameter and create it own `cards` property', function () {
    //     expect(memoryGame.cards).toBeDefined();
    //   });
    
    //   it('MemoryGame should have a pickedCards property', function () {
    //     expect(memoryGame.pickedCards).toBeDefined();
    //   });
    
    //   it('pickedCards property should be an array', function () {
    //     expect(typeof memoryGame.pickedCards).toBe('object');
    //   });
    
    //   it('MemoryGame should have a pairsClicked property', function () {
    //     expect(memoryGame.pairsClicked).toBeDefined();
    //   });
    
    //   it('pairsClicked property should be a number', function () {
    //     expect(typeof memoryGame.pairsClicked).toBe('number');
    //   });
    
    //   it('MemoryGame should have a pairsGuessed property', function () {
    //     expect(memoryGame.pairsGuessed).toBeDefined();
    //   });
    
    //   it('pairsGuessed property should be a number', function () {
    //     expect(typeof memoryGame.pairsGuessed).toBe('number');
    //   });
    // });
    
    // describe('shuffleCards method', function () {
    //   beforeEach(function () {
    //     var cardsArray = [
    //       { name: 'aquaman',         img: 'aquaman.jpg' },
    //       { name: 'batman',          img: 'batman.jpg' },
    //       { name: 'captain america', img: 'captain-america.jpg' },
    //       { name: 'fantastic four',  img: 'fantastic-four.jpg' },
    //       { name: 'flash',           img: 'flash.jpg' },
    //       { name: 'green arrow',     img: 'green-arrow.jpg' },
    //       { name: 'green lantern',   img: 'green-lantern.jpg' },
    //       { name: 'ironman',         img: 'ironman.jpg' },
    //       { name: 'aquaman',         img: 'aquaman.jpg' },
    //       { name: 'batman',          img: 'batman.jpg' },
    //       { name: 'captain america', img: 'captain-america.jpg' },
    //       { name: 'fantastic four',  img: 'fantastic-four.jpg' },
    //       { name: 'flash',           img: 'flash.jpg' },
    //       { name: 'green arrow',     img: 'green-arrow.jpg' },
    //       { name: 'green lantern',   img: 'green-lantern.jpg' },
    //       { name: 'ironman',         img: 'ironman.jpg' },
    //     ]
    //     memoryGame = new MemoryGame(cardsArray);
    //   });
    
    //   it('Should be declare', function () {
    //     expect(typeof memoryGame.shuffleCards).toBe('function');
    //   });
    
    //   it('Should return undefined', function () {
    //     expect(typeof memoryGame.shuffleCards()).toBe('undefined');
    //   });
    
    //   it('Should mixed the cards property', function () {
    //     var formerCardsString = memoryGame.cards.map(function(card) { return card.name }).toString();
    //     memoryGame.shuffleCards();
    //     var newCardsString = memoryGame.cards.map(function(card) { return card.name }).toString();
    //     expect(formerCardsString === newCardsString).toBe(false);
    //   });
    // });
    
    // describe('checkIfPair method', function () {
    //   it('Should be declare', function () {
    //     expect(typeof memoryGame.checkIfPair).toBe('function');
    //   });
    
    //   it('It should add 1 to `pairsClicked` when we call it', function () {
    //     memoryGame.checkIfPair('batman', 'ironman');
    //     expect(memoryGame.pairsClicked).toBe(1);
    //   });
    
    //   it('It should return true when the comparing cards are the same', function () {
    //     expect(memoryGame.checkIfPair('ironman','ironman')).toBe(true);
    //   });
    
    //   it('It should return false when the comparing cards are the same', function () {
    //     expect(memoryGame.checkIfPair('ironman','flash')).toBe(false);
    //   });
    
    //   it('It should add 1 to pairsGuessed if they are the same card', function () {
    //     memoryGame.pairsGuessed = 0;
    //     memoryGame.checkIfPair('ironman','ironman')
    //     expect(memoryGame.pairsGuessed).toBe(1);
    //   });
    
    //   it('It should not add anything to pairsGuessed if the not the same card', function () {
    //     memoryGame.pairsGuessed = 0;
    //     memoryGame.checkIfPair('ironman','green lantern')
    //     expect(memoryGame.pairsGuessed).toBe(0);
    //   });
    // });
    
    // describe('isFinished method', function () {
    //   it('Should be declare', function () {
    //     expect(typeof memoryGame.isFinished).toBe('function');
    //   });
    
    //   it('It should return false at the beggining of the game', function () {
    //     expect(memoryGame.isFinished()).toBe(false);
    //   });
    
    //   it('It should return false if there still some pairs to be guessed', function () {
    //     memoryGame.pairsGuessed = 4;
    //     expect(memoryGame.isFinished()).toBe(false);
    //   });
    
    //   it('It should return true if all pairs were guessed', function () {
    //     memoryGame.pairsGuessed = 8;
    //     expect(memoryGame.isFinished()).toBe(true);
    //   });
    
    // }