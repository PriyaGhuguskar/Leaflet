// // async function mapData() {
// //     try {
// //         const fetchUrl = await fetch('/api/getall')
// //         const datas = await fetchUrl.json();
// //         var geojsonData = await datas?.gempas;
// //         // convertToGeoJSON(geojsonData);
// //         return geojsonData
// //     }
// //     catch (error) {
// //         console.log(error)
// //     }

// // }
// // const mapalldata = mapData()
// // console.log(mapalldata)
// async function mapData() {
//     try {
//         const fetchUrl = await fetch('/getall-data')
//         const datas = await fetchUrl.json();
//         var geojsonData = await datas?.gempas;
//         convertToGeoJSON(geojsonData);
//         return geojsonData
//     }
//     catch (error) {
//         console.log(error)
//     }

// }
// const mapalldata = mapData()
// console.log(mapalldata)
// // convertToGeoJSON(mapalldata)



// function convertToGeoJSON(data) {
//     const geojson = {
//         type: 'FeatureCollection',
//         features: []
//     };

//     data.forEach(item => {
//         let Time = item.Jam
//         let region = item.Wilayah
//         let magnitude = item.Magnitude
//         let lati = JSON.parse((item.Lintang).slice(0, 5))
//         let longi = JSON.parse((item.Bujur).slice(0, 5))
//         // localStorage.setItem(lati)
//         const feature = {
//             type: 'Feature',
//             geometry: {
//                 type: 'Point',
//                 coordinates: [longi, lati] // Assuming your data has latitude and longitude properties
//             },
//             properties: {
//                 // Add additional properties as needed
//                 DateTime: item.DateTime,
//                 date: item.Tanggal,
//                 time: item.Jam,
//                 region: item.Wilayah,
//                 address: item.Wilayah,
//                 description: item.Dirasakan,
//                 title: item.Dirasakan,
//                 magnit: magnitude,
//             }

//         };

//         geojson.features.push(feature);
//     });
//     const geojsonString = JSON.stringify(geojson);
//     // console.log(geojsonString)
//     let i = 0;

//     localStorage.setItem(i, geojsonString)
//     return geojson;
// }
// // // (module.exports = convertToGeoJSON)



