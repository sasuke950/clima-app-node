const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDSPDpkFznGgzzBSsYvTq_sj0T0QCHRgwM
    `)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    //console.log(JSON.stringify(resp.data, undefined, 2));
    let location = resp.data.results[0];
    let coordenadas = location.geometry.location;
    let southWest = location.geometry.bounds.northeast;

    return {
        direccion: location.formatted_address,
        lat: coordenadas.lat,
        lng: coordenadas.lng,
        latStWest: southWest.lat,
    }

}

module.exports = { getLugarLatLng };