process.stdin.resume();
const mongoose = require("mongoose");

const user = process.env.USER;
const password = process.env.PASSWORD;


// const uri = `mongodb+srv://${user}:${password}@cluster0.3dgxs.mongodb.net/gordian-knot?retryWrites=true&w=majority`;
const uri = "mongodb://localhost:27017/imagine";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect(uri, options);
mongoose.connection.on("connected", () => {
  console.log("Connected to Mongoose");
});
mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from Mongoose");
});

// Disconnect from mongoose when server is killed

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  process.exit();
});

module.exports = mongoose;
