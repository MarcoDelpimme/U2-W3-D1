class User {
  constructor(_firstName, _lastName, _age, _location) {
    this._firstName = _firstName;
    this._lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  ageSim(newPerson) {
    if (this.age > newPerson.age) {
      return this._firstName + " è più vecchio di " + newPerson._firstName;
    } else if (this.age < newPerson.age) {
      return this._firstName + " è più giovane di " + newPerson._firstName;
    } else {
      return this._firstName + " ha la stessa età di " + newPerson._firstName;
    }
  }
}

const person1 = new User("Davide", "Polipo", 30, "Roma");
const person2 = new User("Giulio", "Verdi", 25, "Napoli");
const person3 = new User("Genoveffa", "Verga", 25, "Caserta");

console.log(person1.ageSim(person2));
console.log(person2.ageSim(person1));
console.log(person3.ageSim(person2));

// ___________________________________________________

const myArray = [];

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

  hasPetsWithSameOwner(ownerName) {
    if (this.ownerName === ownerName) {
      return console.log("true");
    }
    return console.log("false");
  }
}

function createPet() {
  let petName = document.getElementById("petName").value;
  let ownerName = document.getElementById("ownerName").value;
  let species = document.getElementById("species").value;
  let breed = document.getElementById("breed").value;
  const newPet = new Pet(petName, ownerName, species, breed);

  myArray.push(newPet);
  console.log(myArray);
  addPetToList(newPet);
  document.getElementById("petForm").reset();
  for (let i = 0; i < myArray.length - 1; i++) {
    myArray[myArray.length - 1].hasPetsWithSameOwner(myArray[i].ownerName);
  }
}

function addPetToList(pet) {
  const petList = document.getElementById("petList");
  const listItem = document.createElement("li");
  listItem.innerText =
    "Pet: " + pet.petName + ", Owner: " + pet.ownerName + ", Species: " + pet.species + ", Breed: " + pet.breed;
  petList.appendChild(listItem);
}
