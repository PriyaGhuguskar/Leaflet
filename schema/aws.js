const mongoose = require('mongoose')

const gempaSchema = new mongoose.Schema({
    Tanggal: String,
    Jam: String,
    DateTime: String,
    Coordinates: String,
    Lintang: String,
    Bujur: String,
    Magnitude: String,
    Kedalaman: String,
    Wilayah: String,
    Dirasakan: String,
});
const InfogempaSchema = new mongoose.Schema({
    gempa: [gempaSchema]
});
const gempaSchemaModel = mongoose.model('gempas', gempaSchema);




const InfogempaModel = mongoose.model('Infogempa', InfogempaSchema);
module.exports = { gempaSchemaModel, InfogempaModel };