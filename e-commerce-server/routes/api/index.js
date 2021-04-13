const express = require('express');
const router = express.Router();
const productController = require('../../controllers/product');
const vendorController = require('../../controllers/vendor');

router.get('/vendors', vendorController.all);
router.get('/vendors/:id', vendorController.byId);
router.post('/vendors', vendorController.create);
router.put('/vendors/:id', vendorController.update);
router.delete('/vendors/:id', vendorController.remove);

router.get('/products', productController.all);
router.get('/products/:id', productController.byId);
router.post('/products', productController.create);
router.put('/products/:id', productController.update);
router.delete('/products/:id', productController.remove);

module.exports = router;