function update() {
  //   alert("update button clicked");

  const cities = ["Seoul", "Tokyo", "Chicago", "Stuttgart"];
  const num = parseInt(Math.random() * cities.length);
  //   console.log(num);
  //   document.getElementById("location").innerHTML = "Tokyo";
  document.getElementById("location").innerHTML = cities[num];
  document.getElementById("degree").innerHTML = parseInt(Math.random() * 30);
}
