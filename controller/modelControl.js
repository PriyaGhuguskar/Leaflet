const mongoose = require('mongoose')

const { InfogempaModel, gempaSchemaModel } = require('../schema/aws')
const axios = require('axios');





exports.getAllData = async (req, res) => {
    try {
        const gempas = await gempaSchemaModel.find({})
        if (!gempas) {
            return res.status(200).send({
                success: false,
                message: "No data Found"
            })
        }
        return res.status(200).send({
            success: true,
            bookCount: gempas.length,
            message: "All Books List",
            gempas,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            success: false,
            message: "Error while getting Books",
            err,
        });
    }
}

exports.postAllDta = async (req, res) => {


    try {
        const response = await axios.get('https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json');
        const datas = response.data.Infogempa.gempa;
        const gempadata = await datas.map((item) => {
            let fetchdata = new gempaSchemaModel(item);
            fetchdata.save();
        })
        let allData = new InfogempaModel({ gempadata })
        await allData.save();
    }
    catch (error) {
        res.status(500).json({ error: `${error}An error occurred while fetching data` });
    }
    // const { title, author, description, image } = req.body;
    //     const postingData = async () => {
    //         const response = await axios.get('https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json')
    //             .then((res) => (res.data.Infogempa.gempa))
    //         return response;
    //     }
    //     const ApiData = postingData()
    //     const newdatas =
    //         ApiData.map(async (item) => {

    //             const newData = new gempaSchemaModel({ Tanggal, Jam, DateTime, Coordinates, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Dirasakan })
    //             await newData.save();

    //         })



    //     res.status(200).json({
    //         success: true,
    //         message: "newData Created",
    //         newBook,
    //     });


    // } catch (err) {
    //     console.log(err);
    //     return res.status(400).send({
    //         success: false,
    //         message: `Error while Creating Book${err}`,
    //         err
    //     })
    // }

}

exports.postAlldata = async (req, res) => {
    try {
        const response = await axios.get('https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json');
        const data = response.data.Infogempa.gempa;
        console.log(data)
        const gempa = await data.map((item) => {
            let fetchdata = new gempaSchemaModel(item);
            fetchdata.save();
        })
        let allData = new InfogempaModel({ gempa })
        await allData.save();
    }
    catch (error) {
        res.status(500).json({ error: `${error}An error occurred while fetching data` });
    }

};
