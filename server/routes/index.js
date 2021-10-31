const router = require('express').Router();
const GanttController = require('../controllers/gantt');
const LoginController = require('../controllers/login');
const UsersController = require('../controllers/users');

router.post('/login', LoginController.login);

router.put('/register', LoginController.register);

router.get('/user', UsersController.getUserById);

router.get('/listview', GanttController.search);

router.put('/listview', GanttController.update);

router.post('/listview', GanttController.create);

router.delete('/listview', GanttController.remove);

module.exports = router;