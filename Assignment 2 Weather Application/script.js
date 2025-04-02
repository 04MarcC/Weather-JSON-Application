function getWeather() {
    const cityName = document.getElementById("cityName").value;
    
    fetch("sample.json")
        .then(response => response.json())
        .then(data => {
            const cityData = data.find(city => city.cityName.toLowerCase() === cityName.toLowerCase());

            if (cityData) {
                localStorage.setItem("cityData", JSON.stringify(cityData));
            } else {
                alert("Invalid city");
            }
        })
        .catch(console.error);
}
