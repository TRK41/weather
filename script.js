var ApiKey = ("425cfeeacd8d9bd14f3607abcaf4d4d7"); 
var fetchSearch = document.getElementById('fetchSearch');
var cityInput = document.getElementById('search');
var citySave = document.getElementById('preset');
var searches = [''];
cityInput.value = searches;
// fetch(queryURL);

fetchSearch.addEventListener('click',function(event){
    event.preventDefault();
    localStorage.setItem("history", JSON.stringify(searches));
    localStorage.setItem("1", JSON.stringify(cityInput.value));

    localStorage.getItem("history", JSON.stringify(cityInput.value));
    citySave.innerHTML= cityInput.value;
// added in recent search history
    for (var i = 0; i < searches.length; i++) {
        var search = searches[i];

        var li = document.createElement("li");
        li.textContent = search;
        li.setAttribute("data-index", i);
        

        citySave.appendChild(li);
        
    }   
    console.log(cityInput.value);


});





// function inputEl(){
   
   
// }
function getApi(){

    // var requestLoc = `http://api.openweathermap.org/data/2.5/forecast?q=${cityEl.value}&appid=${APIkey}`;    
    // var requestUrl = `https://api.openweathermap.org/data/2.5/weather?${cityEl.value}&appid=${APIKey}`;
    var requestUrl =`https://api.openweathermap.org/data/2.5/weather?q=` + cityInput +`&appid=`+ ApiKey;

    fetch(requestUrl)
        .then(function (response){
            if(response.ok){
            console.log(response);
                
        
        }
            // if(response.status === 200){
            //     responseText.textContent = response.status;
            // }
            return response.json(); 
        })
        .then(function (data) {
            console.log(data)

            for(var i = 0; i < data.length; i++) {

            }
        })

}


