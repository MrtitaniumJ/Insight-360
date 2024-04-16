const express = require('express');
const router = express.Router();
const sellerController = require('../controllers/seller/sellerController');
const { authenticateSeller } = require('../middleware/authentication');

// User authentication routes
router.post('/registerSeller', sellerController.registerSeller);
router.post('/loginSeller', sellerController.loginSeller);
router.post('/logoutSeller', sellerController.logoutSeller);

// Protected routes for users
router.get('/seller', authenticateSeller, sellerController.getSellerDetails);
router.put('/seller', authenticateSeller, sellerController.updateSellerDetails);
router.delete('/seller', authenticateSeller, sellerController.deleteSellerAccount);

//get deatils of aa the user 
router.get('/userData', sellerController.getUserDetails );

// router.post('/addProduct',sellerController.addProduct);
module.exports = router;