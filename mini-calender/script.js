const date = document.querySelector("#date")
const day = document.querySelector("#day")
const week = document.querySelector("#week")
const month = document.querySelector("#month")



const today = new Date();
console.log(today);

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", ]


const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August",	"September",	"October",	"November", "December"	]


date.innerHTML = (today.getDate()<0 ?"0":"" ) + today.getDate()
day.innerHTML = weekDays[today.getDay()]
month.innerHTML = allMonths[today.getMonth()]
year.innerHTML = today.getFullYear()


// date.addEventListener("click", function () {
//     alert("clicked")
// })