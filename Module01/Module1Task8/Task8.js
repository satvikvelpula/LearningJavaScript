const first_year = parseInt(prompt("Enter the first year: "))
const second_year = parseInt(prompt("Enter the second year: "))
count = first_year
let years = []
let leap_years = []
for (let count = first_year; count <= second_year; count++) {
years.push(count)
}

const leapYearList = document.getElementById("leapYearList")

for (let i = 0; i < years.length; i++) {
if (i % 400 === 0 && i % 100 !== 0 || i % 4 === 0) {
    leap_years.push(years[i]);
    let li = document.createElement('li');
    li.innerText = years[i]
    leapYearList.appendChild(li)
}
}