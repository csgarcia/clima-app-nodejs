const places = require('./places/places');
const weather = require('./weather/weather');
const argv = require('yargs').options({
    address: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

/* google api keys
url: https://developers.google.com/maps/documentation/geocoding/start

// AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM
// AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ
// AIzaSyA5mjCwx1TRLuBAjwQw84WE6h5ErSe7Uj8
// AIzaSyCroCERuudf2z02rCrVa6DTkeeneQuq8TA
// AIzaSyBkDYSVRVtQ6P2mf2Xrq0VBjps8GEcWsLU
// AIzaSyAu2rb0mobiznVJnJd6bVb5Bn2WsuXP2QI
// AIzaSyAZ7zantyAHnuNFtheMlJY1VvkRBEjvw9Y
// AIzaSyDSPDpkFznGgzzBSsYvTq_sj0T0QCHRgwM
// AIzaSyD4YFaT5DvwhhhqMpDP2pBInoG8BTzA9JY
// AIzaSyAbPC1F9pWeD70Ny8PHcjguPffSLhT-YF8
*/

let getFullInfo = async(address) => {

    try {
        let coors = await places.getLatLng(address);
        let temps = await weather.getWeather(coors.lat, coors.lng);

        return `El clima en ${argv.address} es de ${temps.data.main.temp} grados`;
    } catch (e) {
        return `Error al obtener el clima`;
    }

};

getFullInfo(argv.address)
    .then(response => console.log(response))
    .catch(error => console.log(error));