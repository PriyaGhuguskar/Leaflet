const express = require('express')
const cors = require('cors')
// const { gempaSchemaModel } = require('./schema/aws')
const axios = require('axios');


const dotenv = require('dotenv')
const connectDB = require('./configdb/db')
const app = express()

dotenv.config()
connectDB();

const PORT = process.env.PORT || 8080
app.use(express.static('public'));


app.use(cors());
app.use(express.json());
const appRoutes = require('./Routes/route')



// app.post('/', async (req, res) => {
//     try {

//         const gempa = await ApiData.map((item) => {
//             let fetchdata = new gempaSchemaModel(item);
//             fetchdata.save();

//             console.log(fetchdata)
//         })
//         console.log(gempa)

//     }
//     catch (error) {
//         res.status(500).json({ error: `${error}An error occurred while fetching data` });
//     }
// })
app.use('/', appRoutes)




app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});