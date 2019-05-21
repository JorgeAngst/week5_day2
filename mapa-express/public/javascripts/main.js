window.onload = () => {

    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: {
            lat: 41.386230,
            lng: 2.174980
        }
    })

    let center = {
        lat: undefined,
        lng: undefined
    }

    getRestaurants(map)
}




function getRestaurants(map) {
    axios.get("/restaurants/api")
        .then(response => placeRestaurants(response.data.restaurants, map))
        .catch(error => console.log(error))
}


const placeRestaurants = (restaurants, myMap) => {

    restaurants.forEach(restaurant => {

        const location = {
            lat: restaurant.location.coordinates[1],
            lng: restaurant.location.coordinates[0]
        }

        new google.maps.Marker({
            position: location,
            map: myMap,
            title: restaurant.name
        })
    })
}