/*
    Assignment #4
    {Navkaran Sohi}
*/

$(function () {
    function getLocation() {
        return new Promise((resolve, reject) => {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            } else {
                reject("Geolocation is not available in your browser.");
            }
        });
    }

    async function main() {
        try {
            const position = await getLocation();
            const { latitude, longitude } = position.coords;

            const locationHere = $("#locationhere");
            locationHere.text(`Current Location: Latitude ${latitude}, Longitude ${longitude}`);

            const storedLocation = localStorage.getItem("userLocation");

            if (storedLocation) {
                const [storedLat, storedLon] = storedLocation.split(",");
                const distance = calcDistanceBetweenPoints(latitude, longitude, parseFloat(storedLat), parseFloat(storedLon));

                const welcomeMessage = $("#welcomeMessage");
                welcomeMessage.text("Welcome back to the page!");

                const distanceTravelled = $("#distanceTravelled");
                distanceTravelled.text(`You traveled ${distance.toFixed(2)} meters since your last visit.`);
            } else {
                const welcomeMessage = $("#welcomeMessage");
                welcomeMessage.text("Welcome to the page for the first time!");

                localStorage.setItem("userLocation", `${latitude},${longitude}`);
            }
        } catch (error) {
            const errorMessage = $("#errorMessage");
            errorMessage.text(error);
        }
    }

    main();

    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        const toRadians = function (num) {
            return num * Math.PI / 180;
        }
        const R = 6371000; // radius of Earth in meters
        const φ1 = toRadians(lat1);
        const φ2 = toRadians(lat2);
        const Δφ = toRadians(lat2 - lat1);
        const Δλ = toRadians(lon2 - lon1);

        const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return R * c;
    }
});

