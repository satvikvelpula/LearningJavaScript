'use strict';
const names = ['John', 'Paul', 'Jones']
let reference_ul = document.getElementById('target')

for (let i of names) {
    let creating_li = document.createElement('li')
    creating_li.innerHTML = `${i}`
    reference_ul.append(creating_li)
}
