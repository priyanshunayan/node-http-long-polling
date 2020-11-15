# node-http-long-polling
HTTP Long Polling Example using Node.js

- run `npm run start`
- Open a new Terminal Instance
- run `curl http://localhost:3000/date` to see the output being streamed


# Learning 
All request response objects are streams in node and thus can be streamed indefinately, in this case resets after 20 connections and streams after a delay of 1 second. 
