const router = require("express").Router();
const sendMessagePostRoute = require("./sendMessagePostRoute")

router.use("/sendmessage",sendMessagePostRoute);

module.exports = router;
