// class Cat {
//     intro(){
//         return (console.log(` hi my name is ${this.name}`));
//     }
//     food(){
//         return (console.log(`I eat ${this.diet}`));
//     }
//     coat(){
//         return (console.log(`My fur color is ${this.fur}`));
//     }
// }
// const garfield = new Cat();
// garfield.name="Garfield";
// garfield.diet="lasagna";
// garfield.fur="orange";
// const strayCat = new Cat("???", "Anything", "black and white");
// strayCat.name="????";
// strayCat.diet="Anything";
// strayCat.fur="black and white";
// garfield.intro();
// garfield.food();
// garfield.coat();
// garfield.name = "not Garfield";
// console.log(garfield);
// console.log(strayCat);
// strayCat.name = "homeFound";
// console.log(strayCat);

class Pirate {
  constructor(name, rank, weapon) {
    this.name = name;
    this.rank = rank;
    this.weapon=weapon;
  }
  intro() {
    console.log(`hi my name is ${this.name}`)
  }
  fleet() {
    console.log(`${this.shipName} is the name of my ship`)
  }
  gold(){
    console.log(`I have this much gold on my ship, ${this.loot}`)
  }
}
const strawHatsPirates = [
    new Pirate("Monkey D. Luffy","Captain", "gomu gomi no mi"),
    new Pirate("Sanji", "Cook", "Germa fighting style"), 
    new Pirate("Zoro", "Member", "3 sword fighting style")
];
const blackBeardPirates = [
    new Pirate ("Black Beard", "Captain", "yami yami no mi & gura gura no mi"),
    new Pirate ( "Jesus Burgess", "member", "his fists and strength"),
    new Pirate ("Shiryu", "member", "swordsman")
];
strawHatsPirates.forEach(pirate => {
    console.log("Name:", pirate.name);
    console.log("Rank:", pirate.rank);
    console.log("Weapon:", pirate.weapon);
    console.log("--------------------------");
  });
  blackBeardPirates.forEach(pirate => {
    console.log("Name:", pirate.name);
    console.log("Rank:", pirate.rank);
    console.log("Weapon:", pirate.weapon);
    console.log("--------------------------");
  });