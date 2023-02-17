var apiKey = "425cfeeacd8d9bd14f3607abcaf4d4d7"; 
const cityName = document.getElementById('cityname');
var cityList = document.getElementById('list');
var list = [];

const searchedCity = () => {
    console.log(cityName.value)  
}

const searchedList = () => {
    for ( var i = 0; i < list.length; i++){
    
    var li = document.createElement("li");
    li.textContent = list;
    li.setAttribute("data-index", i++);
    cityList.appendChild(li);

        
    // let list = localStorage.getItem("list")
    // var storedList = JSON.parse(localStorage.getItem())
    // localStorage.setItem("")
    }
}