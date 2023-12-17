'use strict'


let body = document.body

let input = document.querySelector('.weather_container_input_text')

let container = document.querySelector('.weather_container')

input.addEventListener('keypress', (e) => {

    let name = document.querySelector('.weather_container_name')
    let degree = document.querySelector('.weather_container_degree')
    let info = document.querySelector('.weather_container_info')

    let icon = document.querySelector('.weather_container_icon')
    icon.classList.add('active-icon')

    if (e.keyCode == "13") {

        const key = '8c0f70b1c515df4ededf4dc20f8e5249'


        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}&units=metric&lang=ru`)


            .then((res) => res.json())
            .then((data) => display(data)



            )


        function display(data) {



            name.innerHTML = `${data.name}`
            degree.innerHTML = `${data.main.temp}\u00B0C`
            info.innerHTML = `${data.weather[0].description}  `
            icon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
        }







    }



}





)

