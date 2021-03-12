const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(process.env.TOKEN, {polling:true});

const sendMessagePostController = async (req, res) => {

await bot.sendMessage(261579780, `${req.body.email} \n ${req.body.textAreaComment}`);
res.status(201).send({message: "Ok"})


};

module.exports = {
  sendMessagePostController,
};
