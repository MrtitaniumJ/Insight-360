const express = require('express');
const router = express.Router();
const sellerController = require('../controllers/seller/sellerController');
const { authenticateUser } = require('../middleware/authentication');

// User authentication routes
router.post('/registerSeller', sellerController.registerSeller);
router.post('/loginSeller', sellerController.loginSeller);
router.post('/logoutSeller', sellerController.logoutSeller);

// Protected routes for users
router.get('/seller', authenticateUser, sellerController.getSellerDetails);
router.put('/seller', authenticateUser, sellerController.updateSellerDetails);
router.delete('/seller', authenticateUser, sellerController.deleteSellerAccount);

// route to get all customers
router.get('/customers', authenticateUser, sellerController.getAllCustomers);

module.exports = router;