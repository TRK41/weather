var apiKey = "425cfeeacd8d9bd14f3607abcaf4d4d7"; 
var fetchButton = document.getElementById('fetchButton');
var cityInputEl = document.getElementById('cityname');
var citySaveEl = document.getElementById('list');
let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
var searches = [];
const cityName = cityInputEl.value

let citySaveEl = searches

getCityWeather(cityName);

var getInput = () => {
    console.log(cityInputEl.value)
    console.log(cityInputEl)

    cityName =(cityInputEl.value).trim()

    // added in recent search history
     

}


fetchButton.addEventListener('click',function(event){
event.preventDefault();

const getCityWeather = (cityName) =>{
    
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName +'&appid='+ apiKey;
    // var requestUrl = 'https://api.github.com/users/TRK41/repos'
    fetch(requestUrl)
        .then(function (response){
            response.json()})
        .then(function (data){
            console.log(data) 
        })
        .catch(function() {

        });    
            //  displayWeather(data,cityName);
            
            window.onload = function() {
                getCityWeather(cityName);
              }
            
        }
        

        searched = (cityName) => {
            citySaveEl.innerHTML = "";
            for (var i = 0; i < searches.length; i++) {
                var li = document.createElement("li");
                li.setAttribute("type","text");
                li.setAttribute("readonly",true);
                li.setAttribute("value",searches[i]);
                li.addEventListener("click",function(){
                    getCityWeather(li.value);
                })
                citySaveEl.appendChild(li);
                
            }
            }
            var weatherDate = moment().format('MM/Do/YY');
            //current weather time (real time)
            setInterval(function time() {
                 
                 $("#weatherDay").text(weatherDate);
            })


    },
);

