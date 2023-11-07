let suits = ["spades", "clubs", "diamonds", "hearts"];
const values = ["6", "7", "8", "9", "10", "J", "Q", "K", "A"];

function getDeck() {
    let deck = [];
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            let card = {Value: values[j], Suit: suits[i]}
            deck.push(card);
        }
    }
    return deck;
}

function mix(deck) {
    for (let i = 0; i < 100; i++) {
        let location1 = Math.floor(Math.random() * deck.length);
        let location2 = Math.floor(Math.random() * deck.length);
        let newLocation = deck[location1];
        deck[location1] = deck[location2];
        deck[location2] = newLocation;
    }
}

function renderDeck(deck)
{
    document.getElementById("deck").innerHTML = "";

    for(let i = 0; i < deck.length; i++)
    {
        let card = document.createElement("div");
        let value = document.createElement("div");
        let suit = document.createElement("div");
        card.className = "card";
        value.className = "value";
        suit.className = "suit " + deck[i].Suit;

        value.innerHTML = deck[i].Value;
        card.appendChild(value);
        card.appendChild(suit);

        document.getElementById("deck").appendChild(card);
    }
}
//{
//  border: solid 1px #aaa
//;
//  border-radius: 9px
//;
//  width: 95px
//;
//  height: 150px
//;
//  float: left
//;
//  background-color: white
//;
//  padding: 3px 3px 3px 3px
//;
//  margin: 5px
//;
//}
//
//.card2 {
//  width: 50px;
//  padding: 10px;
//  border: solid 1px #808080;
//  background-color: white;
//  display: inline-block;
//  border-radius: 10px;
//  font-size: 22px;
//  text-align: center;
//  margin: 3px;
//}
//
//.card .value {
//  font-size: 15pt;
//  font-family: sans-serif;
//}
//
//.card .suit {
//  background-image: url('https://www.thatsoftwaredude.com/images/post/0f631eeb-6c4a-4bfd-9f86-e0a08ae8584b.png');
//  height: 100px;
//  width: 90px;
//}
//
//.card .diamonds {
//  background-position-y: 100px;
//}
//
//.card .hearts {
//  background-position-x: 90px;
//}
//
//.card .clubs {
//  background-position-x: 90px;
//  background-position-y: 100px;
//}




