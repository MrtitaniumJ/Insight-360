const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SellerInfo = require('../../models/seller/SellerInfo');

// Controller function to handle user registration
exports.registerSeller = async (req, res) => {
    try {
        const { firstname, lastname, username, email, password, profileImage, phoneNumber, address, city, pincode, state, shopName, gstinNumber, govIdCard } = req.body;
        // console.log(username,email,password,confirmPassword);

        // Check if the required fields are provided
        if (!firstname || !lastname || !username || !email || !password || !phoneNumber || !address || !city || !pincode || !state || !shopName || !gstinNumber) {
            return res.status(400).json({ error: 'Please provide all the information' });
        }

        // Check if the user already exists
        const existingSeller = await SellerInfo.findOne({ email });
        if (existingSeller) {
            return res.status(400).json({ error: 'Seller already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password.toString(), 10);

        // Create a new user instance
        const newSeller = new SellerInfo({ firstname, lastname, username, email, password: hashedPassword, profileImage, phoneNumber, address, city, pincode, state, shopName, gstinNumber, govIdCard });
        await newSeller.save();
        res.status(201).json({ message: 'Seller registered successfully' });
    } catch (error) {
        console.error('Error registering seller: ', error);
        res.status(500).json({ error: error.message || 'An error occurred while registering seller' });
    }
};

// Controller function to handle seller login 
exports.loginSeller = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the seller by email
        const seller = await SellerInfo.findOne({ email });
        if (!seller) {
            return res.status(404).json({ error: 'Seller not found' });
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, seller.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Ensure that the JWT_SECRET is provided and valid
        if (!process.env.JWT_SECRET) {
            return res.status(500).json({ error: 'JWT secret is missing or invalid' });
        }

        // Generate JWT token
        const token = jwt.sign({ sellerId: seller._id }, process.env.JWT_SECRET, { expiresIn: '10h' });
        res.status(200).json({ token });
    } catch (error) {
        console.error('Error logging in seller: ', error);
        res.status(500).json({ error: error.message || 'An error occurred while logging in seller' });
    }
};

// Controller function to get seller details
exports.getSellerDetails = async (req, res) => {
    try {
        const sellerId = req.sellerId;
        const seller = await SellerInfo.findById(sellerId);
        if (!seller) {
            return res.status(404).json({ error: 'Seller not found' });
        }
        res.status(200).json(seller);
    } catch (error) {
        console.error('Error fetching seller details:', error);
        res.status(500).json({ error: error.message || 'An error occurred while fetching seller details' });
    }
};

// Controller function to update seller details
exports.updateSellerDetails = async (req, res) => {
    try {
        const sellerId = req.sellerId;
        const { username, email } = req.body;
        const updatedSeller = await SellerInfo.findByIdAndUpdate(sellerId, { username, email }, { new: true });
        if (!updatedSeller) {
            return res.status(404).json({ error: 'Seller not found' });
        }
        res.status(200).json(updatedSeller);
    } catch (error) {
        console.error('Error updating seller details: ', error);
        res.status(500).json({ error: error.message || 'An error occurred while updating seller details ' });
    }
};

// Controller function to delete seller account
exports.deleteSellerAccount = async (req, res) => {
    try {
        const sellerId = req.sellerId;
        const deletedSeller = await SellerInfo.findByIdAndDelete(sellerId);
        if (!deletedSeller) {
            return res.status(404).json({ error: 'Seller not found' });
        }
        res.status(200).json({ message: 'Seller account deleted successfully' });
    } catch (error) {
        console.error('Error deleting seller account:', error);
        res.status(500).json({ error: error.message || 'An error occurred while deleting seller account' });
    }
};

exports.logoutSeller = async (req, res) => {
    try {
        //clear the JWT token on the client-side
        res.clearCookie('token');
        res.status(200).json({ message: 'Seller logged out successfully' });
    } catch (error) {
        console.error('Error logging out seller: ', error);
        res.status(500).json({ error: error.message || 'An error occurred while logging out seller' });
    }
};

// Other controller functions for seller-related operations
