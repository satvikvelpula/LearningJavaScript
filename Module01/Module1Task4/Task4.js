
const name = prompt("What's your student name?: ");
const randomint = Math.floor(Math.random() * 4) + 1;
let house;

console.log(randomint)

if (randomint === 1) {
    house = "Gryffindor"
    document.querySelector('#target').innerHTML = name + ', ' + house;
}

    else if (randomint === 2) {
        house = "Slytherin"
        document.querySelector('#target').innerHTML = name + ', ' + house;
    }

    else if (randomint === 3) {
        house = "Hufflepuff"
        document.querySelector('#target').innerHTML = name + ', ' + house;
    }

    else if (randomint === 4) {
        house = "Ravenclaw"
        document.querySelector('#target').innerHTML = name + ', ' + house;
    }

    else {
    document.querySelector('#target').innerHTML = name + ', Unknown class';
    }
