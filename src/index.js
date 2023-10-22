const app = require("./app");
const constants = require("./utils/constants");
require("dotenv").config();

const PORT = process.env.PORT;

app.listen(PORT, function () {
  console.log(constants.SERVER_STARTED, PORT);
});
