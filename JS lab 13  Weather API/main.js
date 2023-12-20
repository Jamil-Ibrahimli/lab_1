'use strict'

let weatherSide = document.querySelector('.weather');


document.addEventListener('DOMContentLoaded', () => {


    setTimeout(() => {

        weatherSide.classList.add('active')


    }, 2000)


})


let input = document.querySelector('.weather_container_input_text');

let icon = document.querySelector('.weather_container_output_icon');

let name = document.querySelector('.weather_container_output_name');

let degree = document.querySelector('.weather_container_output_degree');

let info = document.querySelector('.weather_container_output_info');

let country = document.querySelector('.weather_container_output_country');



input.addEventListener('keypress', (e) => {


    if (e.keyCode == '13') {

        const key = '8c0f70b1c515df4ededf4dc20f8e5249';

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}&lang=eng&units=metric`)


            .then((res) => res.json())
            .then((data) => display(data))


    }


    function display(data) {

        name.innerHTML = data.name;
        degree.innerHTML = `${Math.round(data.main.temp)}\u00B0C`;
        info.innerHTML = data.weather[0].main;
        country.innerHTML = data.sys.country;
        icon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)


        if (info.innerHTML == 'Clouds') {

            document.body.style.backgroundImage = 'url("image/Claud.jpg")';

        } else if (info.innerHTML == 'Clear') {

            document.body.style.backgroundImage = 'url("image/SunnySKy.jpg")';

        } else if (info.innerHTML == 'Snow') {

            document.body.style.backgroundImage = 'url("image/snowing.jpg")';

        } else if (info.innerHTML == 'Rain') {

            document.body.style.backgroundImage = 'url("image/rain.jpg")';

        } else if (info.innerHTML == 'Mist') {

            document.body.style.backgroundImage = 'url("image/mist.jpg")';

        } else if (info.innerHTML == "Thunderstorm") {


            document.body.style.backgroundImage = 'url("image/ThunderStrom.jpg")'

        }else if (info.innerHTML == 'Drizzle') {

            document.body.style.backgroundImage = 'url("image/rain.jpg")';
        
        }


        settingLocal(data)
    }


    function settingLocal(data) {

        localStorage.setItem('name', data.name)
        localStorage.setItem('degree', data.main.temp)
        localStorage.setItem('info', data.weather[0].main)
        localStorage.setItem('country', data.sys.country)
        localStorage.setItem('icon', data.weather[0].icon)



    }



})




name.innerHTML = localStorage.getItem('name')
degree.innerHTML = `${Math.round(localStorage.getItem('degree'))}\u00B0C`
info.innerHTML = localStorage.getItem('info')
country.innerHTML = localStorage.getItem('country')
icon.setAttribute('src', `https://openweathermap.org/img/wn/${localStorage.getItem('icon')}.png`)



if (info.innerHTML == 'Clouds') {

    document.body.style.backgroundImage = 'url("image/Claud.jpg")';

} else if (info.innerHTML == 'Clear') {

    document.body.style.backgroundImage = 'url("image/SunnySKy.jpg")';

} else if (info.innerHTML == 'Snow') {

    document.body.style.backgroundImage = 'url("image/snowing.jpg")';

} else if (info.innerHTML == 'Rain') {

    document.body.style.backgroundImage = 'url("image/rain.jpg")';

} else if (info.innerHTML == 'Drizzle') {

    document.body.style.backgroundImage = 'url("image/rain.jpg")';

}
else if (info.innerHTML == 'Mist') {

    document.body.style.backgroundImage = 'url("image/mist.jpg")';

} else if (info.innerHTML == "Thunderstorm") {


    document.body.style.backgroundImage = 'url("image/ThunderStrom.jpg")'

}

