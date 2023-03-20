const { Router } = require('express');
const userController = require('../controllers/userController.js');
const { requireAuth } = require('../middleware/authMiddleware.js');

const userRouter = Router();

// User list GET route
userRouter.get('/api/users', userController.get_users);

// Signup POST route
userRouter.post('/api/signup', userController.signup_post);

// Login POST route
userRouter.post('/api/login', userController.login_post);

// Logout GET route
userRouter.get('/api/logout', requireAuth, userController.logout_get);

// Validate token route
userRouter.get('/api/validate', userController.validate);

// Delete user DELETE route
userRouter.delete('/api/delete/:id', userController.user_delete)

module.exports = userRouter;