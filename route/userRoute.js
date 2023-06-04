const express = require('express');
const router = express.Router();
const {signup, login, getAllUsers, getUserByEmail, getUserById, updateUserByEmail, updateUserById, deleteUserByEmail, deleteUserById} = require('../controller/userController');
const { verifyToken } = require('../middleware/jsonwebtoken');


router.post('/signup', signup);


router.post('/login', login);


router.get('/', verifyToken, getAllUsers);

router.get('/getUser', verifyToken, getUserByEmail);


router.get('/getUser/:id', verifyToken, getUserById);


router.get('/update', verifyToken, updateUserByEmail);


router.get('/update/:id', verifyToken, updateUserById);


router.get('/delete', verifyToken, deleteUserByEmail);


router.get('/delete/:id', verifyToken, deleteUserById);

module.exports = router;