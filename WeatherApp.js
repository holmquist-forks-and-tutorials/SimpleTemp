
$(document).ready(function(){
    $("#zip-form").submit(function(event){
        event.preventDefault();

        var zipName = $("#zip-name").val();
        getWeather(zipName);
    });

  function getWeather(zip) {

        $.get("http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&units=imperial&appid=7cc4953c245c90023cf3b1cea6b0eb42", function(data) {

            let tempRound = Math.round(data.main.temp) + "&#176;" + "F";
            let tempConvert = parseFloat(tempRound);
            let convertDisplay = ((tempConvert-32) / 1.8).toFixed(0) + "&#176;" + "C";
            let theTemp = Math.round(data.main.temp);


            $("#city").html(data.name);
            $("#temp").html(tempRound);
            $("#tempConvert").html(convertDisplay);

        //Use if/else if to determine gradient colors given the temperatures.
        //Then append the linear-gradient based on the temp.


            if (theTemp <= -20) {
                $(".weather-container").css({"background-image":"linear-gradient(to right,#0500ff, #0100ff )"});
            }
            else if (theTemp <=-10) {
                $(".weather-container").css({"background-image":"linear-gradient(to right,#0100ff, #0032ff)"});
            }
            else if (theTemp <= 0) {
                $(".weather-container").css({"background-image":"linear-gradient(to right, #0032ff ,#0084ff )"});
            }
            else if (theTemp <= 10) {
                $(".weather-container").css({"background-image":"linear-gradient(to right,#0084ff,#00d4ff)"});
            }
            else if (theTemp <= 20) {
                $(".weather-container").css({"background-image":"linear-gradient(to right,#00d4ff,#00ff83)"});
            }
            else if (theTemp <= 30) {
                $(".weather-container").css({"background-image":"linear-gradient(to right, #00ff83,#3eff00)"});
            }
            else if (theTemp <= 40) {
                $(".weather-container").css({"background-image":"linear-gradient(to right, #3eff00 ,#fdff00)"});
            }
            else if (theTemp <= 50) {
                $(".weather-container").css({"background-image":"linear-gradient(to right,#fdff00 ,#FFd200 )"});
            }
            else if (theTemp <= 60) {
                $(".weather-container").css({"background-image":"linear-gradient(to right,#FFd200, #FFa000)"});
            }
            else if (theTemp <= 70) {
                $(".weather-container").css({"background-image":"linear-gradient(to right, #FFa000 , #FF6e00)"});
            }
            else if (theTemp <= 80) {
                $(".weather-container").css({"background-image":"linear-gradient(to right,#FF6e00 ,#FF3c00 )"});
            }
            else if (theTemp <= 90) {
                $(".weather-container").css({"background-image":"linear-gradient(to right, #FF3c00 , #FF0a00)"});
            }
            else if (theTemp <= 100) {
                $(".weather-container").css({"background-image":"linear-gradient(to right,#FF0a00, #FF0040)"});
            }
            else if (theTemp <= 110) {
                $(".weather-container").css({"background-image":"linear-gradient(to right,#FF0040, #FF00E0)"});
            }
            else {
                $(".weather-container").css({"background-image":"linear-gradient(to right, #FF00E0 , #FF04F0)"});
            }

});

  };

});
