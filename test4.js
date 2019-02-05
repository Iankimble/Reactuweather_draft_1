var date = new Date();
$("#date").text("Todays date:" + date);

$("#citysub").text("Search City");
$("#showGif").hide();
// calling weather data based on city 
function cityCall() {
    var city = document.getElementById("city").value;
    var key2 = "851f7df26e3e439be0303240ed7125b9";
    var openWeatherCity = "https://api.openweathermap.org/data/2.5/weather?q=" + city + ",us&APPID=" + key2 + "&units=imperial";
    $.ajax({
        url: openWeatherCity,
        method: "GET",
    }).then(function (response) {
        cityTemperature = response.main.temp;
        cityForcast = response.weather[0].description;
        cityMin = response.main.temp_min;
        cityMax = response.main.temp_max;
        //console.log(response);
        console.log("Your city: " + city);
        console.log("Current Temperature: " + cityTemperature);
        console.log("Forcast: " + cityForcast);
        console.log("Low of: " + cityMin);
        console.log("High of: " + cityMax);

        $("#weatherCity").text("Your City: " + city);
        $("#weatherTemp").text("Your Tempature: " + cityTemperature);
        $("#weatherDescript").text("Description: " + cityForcast);
        $("#tempLow").text("Low of: " + cityMin)
        $("#tempHigh").text("High of: " + cityMax)
        giphyData()
 });

    $("#citysub").text("Reset Search");    
    $("#citysub").click(function () {      
        location.reload();    
    });

};

function giphyData() {
    var searchTerm1 = cityForcast
    //  var searchTerm2 = zipForcast
    var key = "vGqNVOHVpTq2I38yL5iqbi3Zpg6HYzEB"
    var giphy1 = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm1 + "&api_key=" + key;
    $.ajax({
        url: giphy1,
        method: "GET",
    }).then(function (response) {
        console.log(response);
        //giphyResult = response.data[0].images.fixed_height.url;
        gifimg = response.data
        randomGif = gifimg[Math.floor(Math.random() * gifimg.length)];
        giphyResult = randomGif.images.fixed_height.url;
        gifImage = $("<img>")
        gifImage.attr("src", giphyResult);

        $("#post").append(gifImage);
        console.log();

        $("#showGif").show();
        $("#showGif").click(function () {

            console.log("clicked");
        })

    });
};

// Onclick event that will call data based on city
$("#citysub").click(function () {
    $("#formData").onsubmit = cityCall();
    console.log()

});


