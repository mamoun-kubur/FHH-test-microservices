const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const axios = require("axios");

app.use(bodyParser.json());

/**
 * 
 * this is the gateway service endpoint that will call the other microservice
 * and return the result to the client
 * 
 */
app.post("/", async (req, res) => {
  try {
    let data = {
      width: req.body.width,
      hight: req.body.hight,
      length: req.body.length,
    };
    let response = await axios.post("http://localhost:2000/calculate", data);
    if (response.data.status) {
      return res.send({ message: `the box size is ${response.data.message}` });
    }
    return res.send({ message: response.data.message });
  } catch (err) {
    return res.send({
      status: false,
      message: err.message,
    });
  }
});

const port = 1000;

app.listen(port, () => {
  console.log(`Gateway Server is running on port ${port}`);
});
