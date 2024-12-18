const express = require('express');
const router = express.Router();
const { createUser, getUserById, updateUser } = require('../controllers/userControllers');

// Use as funções diretamente nas rotas
router.post('/users', createUser);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);

module.exports = router;
