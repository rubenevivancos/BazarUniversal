const { Router } = require('express');
const getByProduct = require("../Controllers/products");


const router = Router();



router.get('/getByProduct', getByProduct);



module.exports = router;