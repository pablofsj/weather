$(document).ready(function() {
    

    $(document).on('click', 'button', function mostrar_tiempo(){
        var clave = '12438c017db16aa42369acfc272dddbc';
        var ciudad = $('input:text').val();
        $.get('http://api.openweathermap.org/data/2.5/weather?q=' + ciudad + '&&appid=' + clave, function(res){
            var resultados_clima1 = '';
            var resultados_clima2 = '';
            resultados_clima1 = "<p>" + res.name + ": " + res.weather[0].description + "</p>";
            resultados_clima2 = "<p>" + "Temperatura: " + res.main.temp + " F</p>";
            $('#resultados').append(resultados_clima1 + resultados_clima2);
            $('input:text').val('');
        }, 'json');
        
        
    })

});