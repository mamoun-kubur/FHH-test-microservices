const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * this is the microservice endpoint that will calculate the box size
 * and return the result to the gateway service
 */
app.post("/calculate", async (req, res) => {
  let width = req.body.width;
  let hight = req.body.hight;
  let length = req.body.length;

  let {status , message} = await calculateBoxSize(width, hight, length);

  return res.send({
    status: status,
    message: message,
  });
});

const port = 2000;

app.listen(port, () => {
  console.log(`microservice Server is running on port ${port}`);
});


/**
 * this function will calculate the box size
 */
async function calculateBoxSize(width, hight, length) {
    //error handling
    if (width == null || hight == null || length == null) {
      return {
        status: false,
        message: "invalid input",
      };
    }
  
    //business logic
    if (width <= 0 || hight <= 0 || length <= 0) {
      return {
        status: false,
        message: "invalid input",
      };
    }
  
    //calculate the volume
    let boxSize = width * hight * length;
    return {
      status: true,
      message: boxSize,
    };
  }
