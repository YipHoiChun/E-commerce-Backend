const express = require('express');
const router = express.Router();
// const productController = require('../../controllers/product');
// const manufacturerController = require('../../controllers/manufacturer');

// router.get('/manufacturers', manufacturerController.all);
// router.get('/manufacturers/:id', manufacturerController.byId);
// router.post('/manufacturers', manufacturerController.create);
// router.put('/manufacturers/:id', manufacturerController.update);
// router.delete('/manufacturers/:id', manufacturerController.remove);

// router.get('/products', productController.all);
// router.get('/products/:id', productController.byId);
// router.post('/products', productController.create);
// router.put('/products/:id', productController.update);
// router.delete('/products/:id', productController.remove);

// module.exports = router;
const commodityController = require('../../controllers/commodity');
const vendorController = require('../../controllers/vendor');

router.get('/vendors', vendorController.all);
router.get('/vendors/:id', vendorController.byId);
router.post('/vendors', vendorController.create);
router.put('/vendors/:id', vendorController.update);
router.delete('/vendors/:id', vendorController.remove);

router.get('/commodities', commodityController.all);
router.get('/commodities/:id', commodityController.byId);
router.post('/commodities', commodityController.create);
router.put('/commodities/:id', commodityController.update);
router.delete('/commodities/:id', commodityController.remove);

module.exports = router;