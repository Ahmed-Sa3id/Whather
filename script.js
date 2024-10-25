// console.log("1");
// console.log(alert("2"));
// console.log("3");
// let api = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//     .then((data) => console.log(data[8].email)); // Accessing the email of the 9th user

// let api2 = fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => console.log(data[8].title));

const searchBTN = document.querySelector("button");
const searchBOX = document.querySelector("input");

async function cheakWheather(city) {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=" +
      city +
      "&appid=74dec22ca04167936861e400426053fd"
  );
  const data = await response.json();
  console.log(data);
  document.querySelector(".country").innerHTML ="Country : "+ data.sys.country;
    document.querySelector(".city").innerHTML ="City : "+ data.name;
    document.querySelector(".temp").innerHTML = "Temp : " + Math.floor(data.main.temp) + "<sup>o</sup>C"
    document.querySelector(".wind").innerHTML="Wind : "+Math.round(data.wind.speed)+"km/h"
}

// searchBTN.addEventListener("click", function () {
//   cheakWheather();
// });
searchBTN.addEventListener("click", () => {
  cheakWheather(searchBOX.value);
}); //another method
