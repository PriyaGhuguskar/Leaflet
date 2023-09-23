const express = require('express')
const router = express.Router();

const { getAllData,
    postAllDta } = require('../controller/modelControl')
// For all book on landing page
router.get("/getall-data", getAllData)

// for create Book
router.post("/", postAllDta)


module.exports = router;