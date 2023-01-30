var apiKey = "425cfeeacd8d9bd14f3607abcaf4d4d7"; 
var fetchButton = document.getElementById('fetchSearch');
var cityInputEl = document.getElementById('cityname');
var citySaveEl = document.getElementById('preset');
var searches = [''];
cityInputEl.value = searches;
// fetch(queryURL);





const formSubmitHandler = (event) =>{
    event.preventDefault();

    var cityName = cityInputEl.value.trim();

    if (cityName) {
        getCityWeather(cityName);

        citySaveEl.textContent = '';
        cityInputEl.value = '';
    } else{
        alert('Please enter a City name');
    }   
    console.log(cityName);
};







// function inputEl(){
   
   
// }
const getCityWeather = (cityName) =>{

    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName +'&appid='+ apiKey;
    // var requestUrl = 'http://api.openweathermap.org/geo/1.0/direct?q='+ cityInputEl +'&limit=1&appid='+ apiKey;

    fetch(requestUrl)
        .then(function (response){
            if(response.ok){
            console.log(response);
            response.json().then(function (data) {    
             displayWeather(data,cityName);
             console.log(data)   
        });
         } else {
            alert('Error:' + response.statusText);
         }
        });
        
        
};
console.log(searches);

// const displayWeather = (cities, searchTerm) => {
//     if (cities.length === 0){
//         ci
//     }
// }



var weatherDate = moment().format('MM/Do/YY');
//current weather time (real time)
setInterval(function time() {
     
     $("#weatherDay").text(weatherDate);
}, );




// fetchButton.addEventListener('click',function(event){
//     event.preventDefault();
//     localStorage.setItem("history", JSON.stringify(searches));
//     localStorage.setItem("1", JSON.stringify(cityInput.value));

//     localStorage.getItem("history", JSON.stringify(cityInput.value));
//     citySave.innerHTML= cityInput.value;
// // added in recent search history
//     for (var i = 0; i < searches.length; i++) {
//         var search = searches[i];

//         var li = document.createElement("li");
//         li.textContent = search;
//         li.setAttribute("data-index", i);
        

//         citySave.appendChild(li);
        
//     }   
//     console.log(cityInput.value);


// });