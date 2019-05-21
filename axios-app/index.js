
const restCountriesApi = axios.create({
    baseURL: 'https://restcountries.eu/rest/v2/name/'
});


document.getElementById("theButton").onclick = () => {
    const country = document.getElementById("theInput").value;
    getCountryInfo(country)
}





const getCountryInfo = theName => {
    restCountriesApi.get(theName)
        .then(responseFromAPI => {

            console.log('Response from API is: ', responseFromAPI.data)

            const countryName = responseFromAPI.data[0].name;
            const countryCapital = responseFromAPI.data[0].capital;

            document.getElementById("countryName").innerHTML = countryName;
            document.getElementById("countryCapital").innerHTML = "Capital: " + countryCapital;

        })
        .catch(err => {
            if (err.response.status === 404) {
                document.getElementById('errDiv').innerHTML = `What the heck is ${theName}? 🤭`
            } else {
                console.log('err => ', err)
            }
        })
}








