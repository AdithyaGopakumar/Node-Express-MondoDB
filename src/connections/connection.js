const mongoose=require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const constants = require("../utils/constants")

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`${constants.DB_CONNECTED} @ ${process.env.MONGO_URL}`);
}).catch((err) => {
  console.log(constants.DB_CONNECT_ERR, err)
});