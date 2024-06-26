const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.post("/events", (req, res) => {
  const event = req.body;
  console.log("event", event);

  axios.post("http://posts-clusterip-srv:4000/events", event).catch((err) => {
    console.log("Post Service Error!", err.message);
  });
  axios.post("http://comments-srv:4001/events", event).catch((err) => {
    console.log("Comment Service Error!", err.message);
  });
  axios.post("http://queries-srv:4002/events", event).catch((err) => {
    console.log("Query Service Error!", err.message);
  });
  axios.post("http://moderations-srv:4003/events", event).catch((err) => {
    console.log("Moderation Service Error!", err.message);
  });

  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});
