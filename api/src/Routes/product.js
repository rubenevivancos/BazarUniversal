const { Router } = require('express');
const productSearch = require("../Controllers/products");


const router = Router();



router.get('/productSearch', productSearch);



module.exports = router;