const API_KEY = '74beab557a9466055b4a10a55a9800ca';

const  fetchData = position => {
    const { latitude, longitude} = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)

        .then(response => response.json())
        .then(data => climaData(data))
} 

const climaData = data => {
    console.log(data);
    const info = {
        localidad: data.name,
        presion: data.main.pressure,
        humedad: data.main.humidity+='%',
        temperatura: data.main.temp+=' ºC',
        descripcion: data.weather[0].main,
        fecha: getDate(),
    }
    Object.keys(info).forEach( key =>{
        document.getElementById(key).textContent = info[key]
    })

    cleanUp();
}

const cleanUp = () => { 
    let dspnon = document.getElementById('dspnon');
    let loader = document.getElementById('loader');

    loader.style.display = 'none';
    dspnon.style.display = 'flex';
}

const getDate = () => {
    let fecha = new Date();
    return `${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}`
}

const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
}