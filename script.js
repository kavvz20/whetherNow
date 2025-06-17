const button=document.getElementById("search-button")
const input =document.getElementById("city-input")

const cityname=document.getElementById("cityname")
const citytime=document.getElementById("citytime")
const citytemp=document.getElementById("citytemp")

async function getData(value){
    const promise = await fetch(
       `http://api.weatherapi.com/v1/current.json?key=600b32a888514121a2e120740251706&q=${value}&aqi=yes`
    )
return await promise.json()
}

button.addEventListener("click",async ()=>{
    const value=input.value
    
    const result =await getData(value);
    cityname.innerText=`${result.location.name},${result.location.region},${result.location.country}` 
    citytime.innerText=result.location.localtime
    citytemp.innerText=result.current.temp_c
})
