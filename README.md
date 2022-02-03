# FHH-test-microservices

for this simple example i don't need to use Broker or RabbitMQ for example.

so created two microservice, one is the GateWay that the client is going to talk to and it will send the data to the other microservice which is going to calculate the box size and return the data to the gateway.

## How To test it

run the two services using node index.js

the gateway service will run on port 1000
the box-size service will run on port 2000

send post request to the gateway service http://localhost:1000/
data eg. {
	"width":3,
	"hight":22,
	"length":5
    }

