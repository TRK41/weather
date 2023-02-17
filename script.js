var apiKey = "425cfeeacd8d9bd14f3607abcaf4d4d7"; 
var fetchButton = document.getElementById('fetchButton');
var city = document.getElementById('city');
var lat = "";
var lon = "";
var citySaveEl = document.getElementById('list');
var searches = [];

console.log(city.val)

getCityWeather();


const getInput = (cityname) => {

    for( let i = 0; i<searches.length; i++){
        if (cityname.toUpperCase()===searches[i]){
            return -1
        }
    }
return 1;
    
}

const getCityWeather = () =>{
    const cityName = city.value
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName +'&appid='+ apiKey;
    // var requestUrl = 'https://api.github.com/users/TRK41/repos'
    fetch(requestUrl)
        .then(function (response){
            if(response.ok){
            console.log(response);
            response.json().then(function (data) {    
             displayWeather(data,cityName);
             console.log(data)
             console.log(cityName)  
            
        });
         } else {
            alert('Error:' + response.statusText);
         }
        });       
        }

        

//         function saveSearch() {
//         let list = localStorage.getItem("list")
//         var storedList = JSON.parse(localStorage.getItem())
//         localStorage.setItem("history", JSON.stringify(city.value))
//         localStorage.getItem("history",)
        
//     }
        


// fetchButton.addEventListener('click',function(event){
// event.preventDefault();

//     });



//     var weatherDate = moment().format('MM/Do/YY');
//     //current weather time (real time)
//     setInterval(function time() {
         
//          $("#weatherDay").text(weatherDate);
//     }, );

// // console.log(cityName);
// // console.log(city);
// // console.log(city.value);
// // console.log(fetchButton.value)







// fetchButton.addEventListener('click',function(event){
//     event.preventDefault();
    
    
    





    
    


   
// });


// // // const formSubmitHandler = (event) =>{
// // //     preventDefault(event);

// // //     var cityName = city.value.trim();

// // //     if (cityName) {
// // //         getCityWeather(cityName);

// // //         citySaveEl.textContent = '';
// // //         city.value = '';
// // //     } else{
// // //         alert('Please enter a City name');
// // //     }   
// // //     console.log(cityName);
// // // };







// // // function inputEl(){
   
   
// // // }

// // console.log(searches);


// // // const displayWeather = (cities, searchTerm) => {
// // //     if (cities.length === 0){
// // //         ci
// // //     }
// // // }





// // fetchButton.addEventListener("click",getCityWeather(cityName))