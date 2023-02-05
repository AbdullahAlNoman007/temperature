const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;
const searchTemperature = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => showdetails(data));
}
const setvalue =(id,value)=>{
    const idfield = document.getElementById(id)
    idfield.innerText= value
}
const showdetails=(data)=>{        
    setvalue("city",data.main.temp)
    setvalue("temp",data.name)
    setvalue("mood",data.weather[0].main)

}
document.getElementById("search").addEventListener('click',function(){    
    const city = document.getElementById('input').value;
    searchTemperature(city)
})
