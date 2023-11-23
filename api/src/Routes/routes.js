const { Router } = require('express');

const product = require('./product');


const router = Router();

// Configurar los routers
router.use('/product', product);


module.exports = router;