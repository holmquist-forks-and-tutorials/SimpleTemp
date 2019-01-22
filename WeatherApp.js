
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

            //Append the original background of the container to a temp-related gradient.
            $(".weather-container").css({"background-image":"linear-gradient(to right,#FF00E0, yellow)"});
});

  };

});
