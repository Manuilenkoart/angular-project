const router = require("express").Router();

const  {sendMessagePostController}=require('../../controllers/sendMessagePostController');

router.post('/', sendMessagePostController);

module.exports = router
