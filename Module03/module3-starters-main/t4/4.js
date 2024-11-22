'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];


let targetValue = document.getElementById('target')

for (let i of students) {
  let option = document.createElement('option')
  option.innerHTML = `${i.name}`
  targetValue.appendChild(option)
  option.value = i.id
}




