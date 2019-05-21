
/*
function initMap() {

    const ironhackBCN = { lat: 41.3977381, lng: 2.190471916 }

    const myMap = new google.maps.Map(                // 2 argumentos: selector, opciones
        document.getElementById('map'),
        {
            center: ironhackBCN,
            zoom: 10
        }
    )


    new google.maps.Marker({
        map: myMap,
        position: ironhackBCN,
        title: 'Aquí estámn los ironhackers del mar'
    })
}
*/


/*

function initMap() {

    if (navigator.geolocation) {

        const ironhackBCN = { lat: 41.3977381, lng: 2.190471916 }

        const myMap = new google.maps.Map(
            document.getElementById('map'),
            {
                center: ironhackBCN,
                zoom: 10
            }
        )

        navigator.geolocation.getCurrentPosition(           // argumentos: callback de success, callback de error, objeto de opciones
            position => {

                const myLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }

                myMap.setCenter(myLocation)

                new google.maps.Marker({
                    position: myLocation,
                    title: 'Tú estás ahora aquí',
                    map: myMap
                })

            },
            error => console.log('Todo mal', error)
        )


    } else {
        console.log("Tu navegador carece de geolocalización (qué fuerte)")
    }
}

*/


/*






// Rutas
function initMap() {

    const directionsService = new google.maps.DirectionsService
    const directionsDisplay = new google.maps.DirectionsRenderer

    const ironHackMadrid = { lat: 40.3922589, lng: -3.6985873 }
    const ironhackBCN = { lat: 41.3977381, lng: 2.190471916 }


    const myMap = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: ironHackMadrid
    })

    directionsDisplay.setMap(myMap)

    calculateAndDisplay(directionsService, directionsDisplay, ironHackMadrid, ironhackBCN)
}


const calculateAndDisplay = (directionsService, directionsDisplay, orig, dest) => {

    directionsService.route({
        origin: orig,
        destination: dest,
        travelMode: google.maps.TravelMode['DRIVING']
    }, (finalRoute, status) => {
        status === 'OK' ? directionsDisplay.setDirections(finalRoute) : console.log("Error:", status)
    })
}
*/







/*

// Geocoder

function initMap() {

    const ironhackBCN = { lat: 41.3977381, lng: 2.190471916 }

    const map = new google.maps.Map(
        document.getElementById('map'),
        {
            center: ironhackBCN,
            zoom: 10
        }
    )


    const geocoder = new google.maps.Geocoder();

    geocodeAddress(geocoder, map)

}

function geocodeAddress(geocoder, resultsMap) {

    let address = document.getElementById('address').value

    geocoder.geocode({ 'address': address }, function (results, status) {

        console.log(results)

        if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location)
            new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
            })
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}


*/