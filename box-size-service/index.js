const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/calculate',async (req,res)=>{
    let width = req.body.width;
    let hight = req.body.hight;
    let depth = req.body.depth;
  
  
    //error handling
    if (width == null || hight == null || depth == null) {
      return res.send({
        status: false,
        message: "invalid input",
      });
    }
  
    //business logic
    if (width <= 0 || hight <= 0 || depth <= 0) {
      return res.send({
        status: false,
        message: "invalid input",
      });
    }
  
    //calculate the volume
    let volume = width * hight * depth;
  
    return res.send({
      status: true,
      message: volume,
    });

})


const port = 2000;

app.listen(port, () => {
  console.log(`microservice Server is running on port ${port}`);
});