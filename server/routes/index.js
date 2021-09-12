const router = require('express').Router();
const Gantt = require('../controllers/gantt');

router.get('/gantt', Gantt.search);

router.put('/gantt', Gantt.update);

router.post('/gantt', Gantt.create);

router.delete('/gantt', Gantt.remove);

module.exports = router;