
$(document).ready(function(){
    $("#zip-form").submit(function(event){
        event.preventDefault();

        var zipName = $("#zip-name").val();
        getWeather(zipName);
    });

  function getWeather(zip) {

        $.get("http://api.openweathermap.org/data/2.5/weather?zip="+zip+",us&units=imperial&appid=7cc4953c245c90023cf3b1cea6b0eb42", function(data){

            let tempRound = Math.round(data.main.temp) + "&#176;" + " F";
            let tempConvert = parseFloat(tempRound);
            let convertDisplay = ((tempConvert-32) / 1.8).toFixed(2) + "&#176;" + " C";


            $("#city").html(data.name);
            $("#temp").html(tempRound);
            $("#tempConvert").html(convertDisplay)
        });

    };
});
