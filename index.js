
let fullArray = [
{
  first_name: 'Jon',
  last_name: 'Snow',
  House: ['Stark','Targaryen'],
  status: 'Alive',
  gender: 'Male',
  titles: ['King', 'Lord', 'Nights Watch','Bastard'],
  marriage: 'no',
  allegiance: ['Stark', 'Targaryen', 'Other'],
  specialty: ['direwolf', 'sword'],
  image: './imgs/jonsnow.webp',
},
{
  first_name: 'Arya',
  last_name: 'Stark',
  House: 'Stark',
  status: 'alive',
  gender: 'female',
  titles: ['Faceless-Men','Lady','Peasant'],
  marriage: 'no',
  allegiance: 'Stark',
  specialty: ['direwolf', 'sword'],
  image:'./imgs/arya.webp',
},
{
  first_name: 'Sansa',
  last_name: 'Stark',
  House: 'Stark',
  status: 'alive',
  gender: 'female',
  titles: ['Lady', 'Handmaiden'],
  marriage: 'yes',
  allegiance: 'Stark',
  image:'./imgs/sansa.webp',
},
{
  first_name: 'Robb',
  last_name: 'Stark',
  House: 'Stark',
  status: 'dead',
  gender: 'male',
  titles: ['King','Lord'],
  marriage: 'yes',
  allegiance: 'Stark',
  image: './imgs/robbstark.jpg',
},
{
  first_name: 'Bran',
  last_name: 'Stark',
  House: 'Stark',
  status: 'alive',
  gender: 'male',
  titles: ['Three-eyed Raven','Lord'],
  marriage: 'no',
  allegiance: ['Stark','Other'],
  image: './imgs/bran.webp',
},
{
  first_name: 'Catelyn',
  last_name: 'Stark',
  House: ['Stark', 'Tully'],
  status: 'dead',
  gender: 'female',
  titles: ['Lady', 'Mother'],
  marriage: 'yes',
  allegiance: 'Stark',
  image: './imgs/catstark.jpg'
  },
{
  first_name: 'Ned',
  last_name: 'Stark',
  House: 'Stark',
  status: 'dead',
  gender: 'male',
  titles: ['Lord', 'Hand'],
  marriage: 'yes',
  allegiance: ['Stark', 'Other'],
  image: './imgs/ned stark.jpeg',
  },
{
    first_name: 'Rickon',
    last_name: 'Stark',
    House: 'Stark',
    status: 'dead',
    gender: 'male',
    titles: 'Lord',
    marriage: 'no',
    allegiance: 'Stark',
    image: './imgs/rickon.jpg',
    },
{
  first_name: 'Cersei',
  last_name: 'Lannister',
  House: 'Lannister',
  status: 'alive',
  gender: 'female',
  titles: ['Queen', 'Hand', 'Mother'],
  marriage: 'yes',
  allegiance: ['Lannister','Other'], //technically baratheon too?
  image: './imgs/cersei.webp',
  },
{
  first_name: 'Jamie',
  last_name: 'Lannister',
  House: 'Lannister',
  status: 'alive',
  gender: 'male',
  titles: ['Hand','Kingsgaurd'],
  marriage: 'no',
  allegiance: ['Targaryen', 'Lannister'],
  image:'./imgs/jamie.webp',
  }, 
{
  first_name: 'Tywinn',
  last_name: 'Lannister',
  House: 'Lannister',
  status: 'dead',
  gender: 'male',
  titles: ['Hand','Lord'],
  marriage: 'yes',
  allegiance: 'Lannister',
  image: './imgs/tywinn.jpg',
  }, 
{
  first_name: 'Robert',
  last_name: 'Baratheon',
  House: 'Baratheon',
  status: 'dead',
  gender: 'male',
  titles: 'King',//he had another title idr
  marriage: 'yes',
  allegiance: ['Targaryen', 'Other'],
  image: './imgs/robert.jpg',
  },
{
  first_name: 'Joffrey',
  last_name: 'Baratheon',
  House: 'Baratheon',
  status: 'dead',
  gender: 'male',
  titles: 'King',
  marriage: 'yes',
  allegiance: 'Other',
  image: './imgs/joffrey.jpg',
  },
{
  first_name: 'Tommen',
  last_name: 'Baratheon',
  House: 'Baratheon',
  status: 'dead',
  gender: 'male',
  leader: 'King',
  image: './imgs/tommen.jpg',
  },
{
  first_name: 'Renly',
  last_name: 'Baratheon',
  House: 'Baratheon',
  status: 'dead',
  gender: 'Lord',
  leader: 'yes',
  image: './imgs/renly.jpg',
  },
{
  first_name: 'Stannis',
  last_name: 'Baratheon',
  House: 'Baratheon',
  status: 'dead',
  gender: 'male',
  leader: 'Lord',
  image: './imgs/stannis.jpg' ,
  },
{
  first_name: 'Myrcella',
  last_name: 'Baratheon',
  House: 'Baratheon',
  status: 'dead',
  gender: 'female',
  title: 'Princess',
  marriage:'no',
  allegiance: 'Other',
  image: './imgs/myrcella.png',
    },
{
  first_name: 'Shireen',
  last_name: 'Baratheon',
  House: 'Baratheon',
  status: 'dead',
  gender: 'femamale',
  title: 'Princess',
  marriage:'no',
  allegiance: 'Other',
  image: './imgs/shireen.jpg',
},
{
  first_name: 'Sandor',
  last_name: 'Clegane',
  House: 'Other',
  status: 'Alive',
  gender: 'Male',
  titles: ['Knight', 'Kingsgaurd', 'Soldier'],
  marriage: 'no',
  allegiance: 'Other',
  specialty: ['swordsmanship','murder'],
  image: './imgs/hound.webp',
},
{
  first_name: 'Gregor',
  last_name: 'Clegane',
  House: 'Other',
  status: 'Alive',
  gender: 'Male',
  titles: ['Queensgaurd', 'Kingsgaurd'],
  marriage: 'no',
  allegiance: ['Lannister','Other'],
  specialty: ['swordsmanship', 'murder'],
  image: './imgs/mountain.jpg',
},
{
  first_name: 'Danaerys',
  last_name: 'Targaryen',
  House: 'Targaryen',
  status: 'Alive',
  gender: 'Female',
  titles: ['Queen','Wife'],
  marriage: 'no',
  allegiance: ['Targaryen'],
  specialty:'dragons',
  image: './imgs/khaleesi.webp',
},
{
  first_name: 'Jorah',
  last_name: 'Mormont',
  House: 'Other',
  status: 'Alive',
  gender: 'Male',
  titles: ['Queensgaurd','knight','small council', 'slave'],
  marriage: 'yes',
  allegiance: ['Targaryen'],
  specialty: 'swordsmanship',
  image: './imgs/jorah.webp',
},
{
  first_name: 'Ramsay',
  last_name: 'Snow',
  House: 'other',
  status: 'dead',
  gender: 'Male',
  titles: ['Bastard', 'Lord'],
  marriage: 'yes',
  allegiance: ['Other'],
  specialty: ['torture', 'murder', 'dogs'],
  image: './imgs/ramsay.png',
},
{
  first_name: 'Melisandre',
  last_name: 'of Asshai',
  House: 'Other',
  status: 'Alive',
  gender: 'Female',
  titles: ['Lady','Small Council'],
  marriage: 'no',
  allegiance: ['Targaryen', 'Stark', 'Other'],
  specialty:'fire',
  image: './imgs/redlady.webp',
},
{
  first_name: 'Euron',
  last_name: 'Greyjoy',
  House: 'Greyjoy',
  status: 'Alive',
  gender: 'Male',
  titles: ['Lord', 'Soldier'],
  marriage: 'no',
  allegiance: ['Other', 'Lannister'],
  specialty: ['sailing'],
  image: './imgs/euron.webp',
  },
{
  first_name: 'Yara',
  last_name: 'Greyjoy',
  House: 'Greyjoy',
  status: 'Alive',
  gender: 'Female',
  titles: ['Queen', 'Lady','Soldier'],
  marriage: 'no',
  allegiance: ['Other', 'Targaryen'],
  specialty: 'sailing',
  image: './imgs/yara.jpg',
},
{
  first_name: 'Theon',
  last_name: 'Greyjoy',
  House: ['Stark','Other'],
  status: 'Alive',
  gender: 'Male',
  titles: ['Lord','Prince', 'Kingsgaurd','Soldier'],
  marriage: 'no',
  allegiance: ['Other', 'Targaryen', 'Stark'],
  specialty: ['sailing'],
  image: './imgs/theon.webp',
},
{
  first_name: 'Viserys',
  last_name: 'Targaryen',
  House: 'Targaryen',
  status: 'Dead',
  gender: 'Male',
  titles: ['Prince', 'Lord', 'King'],
  marriage: 'no',
  allegiance: ['Targaryen'],
  specialty:'dragons',
  image: './imgs/viserys.jpeg',
},
{
  first_name: 'Grey',
  last_name: 'Worm',
  House: 'Other',
  status: 'Alive',
  gender: 'Male',
  titles: ['slave', 'soldier','queensgaurd'],
  marriage: 'no',
  allegiance: ['Targaryen', 'Other'],
  specialty: ['spear', 'fighting', 'leadership'],
  image: './imgs/greyworm.webp',
},
{
  first_name: 'Aerys',
  last_name: 'Targaryen',
  House: 'Targaryen',
  status: 'Dead',
  gender: 'Male',
  titles: 'King',
  marriage: 'yes',
  allegiance: ['Targaryen'],
  specialty:'dragons',
  image: './imgs/madking.jpg',
},
 {
  first_name: 'Lyanna',
  last_name: 'Stark',
  House: 'Stark',
  status: 'dead',
  gender: 'female',
  titles: ['Lady', 'Mother'],
  marriage: 'yes',
  allegiance: ['Stark', 'Targaryen'],
  specialty: 'beauty',
  image: './imgs/lyanna.png',
  },
{
  first_name: 'Benjen',
  last_name: 'Stark',
  House: 'Stark',
  status: 'dead',
  gender: 'Male',
  titles: ['Ranger', 'Lord', 'Nights Watch'],
  marriage: 'no',
  allegiance: ['Stark', 'Other'],
  specialty: ['fighting','saving'],
  image: './imgs/unclebenjen.png',
},
{
  first_name: 'Aemon',
  last_name: 'Targaryen',
  House: 'Targaryen',
  status: 'dead',
  gender: 'Male',
  titles: ['Maester', 'Prince', 'Nights Watch'],
  marriage: 'no',
  allegiance: ['Targaryen', 'Other'],
  specialty: ['knowledge', 'wit','wisdom'],
  image: './imgs/aemon.jpg',
},
{
  first_name: 'Samwell',
  last_name: 'Tarly',
  House: 'Other',
  status: 'alive',
  gender: 'Male',
  titles: ['Maester', 'Lord', 'Nights Watch', 'Steward'],
  marriage: 'no',
  allegiance: ['Stark', 'Other'],
  specialty: ['knowledge', 'wit','wisdom', 'trutworthiness'],
  image: './imgs/sam.webp',
},
{
  first_name: 'Missandei',
  last_name: '',
  House: 'Other',
  status: 'Alive',
  gender: 'Female',
  titles: ['slave', 'small council','handmaiden'],
  marriage: 'no',
  allegiance: ['Targaryen', 'Other'],
  specialty: 'intrepreter',
  image: './imgs/missandei.webp',
},
{
  first_name: 'Varys',
  last_name: '',
  House: 'Other',
  status: 'Alive',
  gender: 'Male',
  titles: ['small council', 'lord'],
  marriage: 'no',
  allegiance: ['Targaryen', 'Lannister', 'Other'],
  specialty: 'knowledge',
  image: './imgs/varys.webp',
},
{
  first_name: 'Night',
  last_name: 'King',
  House: 'Other',
  status: 'Dead',
  gender: 'Male',
  titles: ['king', 'soldier'],
  marriage: 'no',
  allegiance: 'Other',
  specialty: 'death',
  image: './imgs/nightking.webp',
},
{
  first_name: 'Brienne',
  last_name: 'of Tarth',
  House: 'Other',
  status: 'alive',
  gender: 'female',
  titles: ['Lady', 'Kingsgaurd', 'Protector'],
  marriage: 'no',
  allegiance: ['Stark', 'Other'],
  specialty: 'fighter',
  image: './imgs/brienne.webp',
  },
{
  first_name: 'Davos',
  last_name: 'Seaworth',
  House: 'Other',
  status: 'alive',
  gender: 'male',
  titles: ['Knight', 'Kingsgaurd', 'small council'],
  marriage: 'no',
  allegiance: ['Stark', 'Other'],
  specialty: ['fighter', 'knowledge'],
  image: './imgs/davos.webp',
  },  
{
  first_name: 'Tormund',
  last_name: 'Giantsbane',
  House: 'Other',
  status: 'alive',
  gender: 'male',
  titles: ['soldier','wildling'],
  marriage: 'no',
  allegiance: ['Stark', 'Other'],
  specialty: ['fighter', 'leader'],
  image: './imgs/tormund.png',
  },   
{
  first_name: 'Mance',
  last_name: 'Rayder',
  House: 'Other',
  status: 'dead',
  gender: 'male',
  titles: ['King','Nights Watch'],
  marriage: 'no',
  allegiance:  'Other',
  specialty: ['fighter', 'leader'],
  image: './imgs/mance.jpg',
  },   
{
  first_name: 'Ygritte',
  last_name: '',
  House: 'Other',
  status: 'dead',
  gender: 'female',
  titles: ['soldier','wildling'],
  marriage: 'no',
  allegiance:  'Other',
  specialty: 'fighter',
  image: './imgs/Ygritte.jpg',
    }
// add more here
  ] 

  let characters = []

// function shuffle(a) {
//   for (let i = a.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [a[i], a[j]] = [a[j], a[i]];
//   }
//   return a;
//   }


// var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) 
// + minimum;

  function getRandom() {

    for (i = 0; i < 24; i++){
      characters.push(fullArray[Math.floor(Math.random() * ((fullArray.length - 1) + 1))])
      document.getElementById("#gameboard").div.innerHTML+=(characters[i]);
    }


      
      // return randomCharacter
    //  document.getElementsByClassName('.character').innerHTML=characters.push(randomCharacter);
    };


    // characters.push(aryaStark)

    console.log(fullArray)

// 1. Make copy array with all objects in it
// 2. Push from a random index (between 0 and copyArray.length) in the copy 
// array into the characters array
// 3. Filter/splice from the copy array
// 4. Repeat 23 more times



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