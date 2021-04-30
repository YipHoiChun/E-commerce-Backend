const express = require('express');
const router = express.Router();
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