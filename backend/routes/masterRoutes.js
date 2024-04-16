const express = require('express');
const router = express.Router();
const masterController = require('../controllers/master/masterController');
const { authenticateUser } = require('../middleware/authentication');

// User authentication routes
router.post('/registerMaster', masterController.registerMaster);
router.post('/loginMaster', masterController.loginMaster);
router.post('/logoutMaster', masterController.logoutMaster);

// seller info
//router.get('/sellerData', masterController.getSellerDetails);

// Protected routes for users
router.get('/master', authenticateUser, masterController.getMasterDetails);
router.put('/master', authenticateUser, masterController.updateMasterDetails);
router.delete('/master', authenticateUser, masterController.deleteMasterAccount);

module.exports = router;