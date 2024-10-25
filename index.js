//part 1
const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
    companion: {
      name: "Frank",
      type: "Flea",
      inventory: ["small hat", "sunglasses"],
    },
  },
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}`);
  },
};

adventurer.roll();

adventurer.inventory.forEach((item) => {
  console.log(item);
});

//part 2
class Character {
  static MAX_HEALTH = 100;
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
  roll = function (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}`);
  };
}

const robin = new adventurer("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Companion("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Companion("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

class Adventurer extends Character {
  static ROLES = ["Fighter", "Healer", "Wizard"];

  constructor(name, role) {
    super(name);
    this.role = role;
    this.inventory.push("bedroll", "50 gold coins");
  }
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }

  duel(Adventurer) {}
}

class Companion extends Character {
  constructor(name, role) {
    super(name);
    this.role = role;
    this.inventory.push("bedroll", "50 gold coins");
  }
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
}
class AdventurerFactory {
  constructor(role) {
    this.role = role;
    this.adventurers = [];
  }
  generate(name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
  }
  findByIndex(index) {
    return this.adventurers[index];
  }
  findByName(name) {
    return this.adventurers.find((a) => a.name === name);
  }
}

const healers = new AdventurerFactory("Healer");
const robin = healers.generate("Robin");
