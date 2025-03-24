const express = require("express");
const  GeminiResponse = require('../config/googleAi')

const route = express.Router();


route.post("/code-review", async (req, res) => {
    const { code} = req.body;

    if(!code){
        return res.status(400).json({message: "Please provide code to review"})
    }

    const response = await GeminiResponse(code);

    res.send(response);


});
module.exports = route;