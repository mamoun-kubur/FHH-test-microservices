const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const axios = require("axios");

app.use(bodyParser.json());

app.post("/", async (req, res) => {
  let data = {
    width: req.body.width,
    hight: req.body.hight,
    depth: req.body.depth,
  };

  await axios
    .post("http://localhost:2000/calculate", data)
    .then(function (response) {
      return res.send({ message: `the box size is ${response.data.message}` });
    })
    .catch(function (error) {
      return res.send({ message: error });
    });
});

const port = 1000;

app.listen(port, () => {
  console.log(`Gateway Server is running on port ${port}`);
});
