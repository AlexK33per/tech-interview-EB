const { Router } = require('express');
require('../controller/eventController');
const {getAllEvents, postAnEvent} = require("../controller/eventController");

const router = Router();

router.get('/', getAllEvents);
router.post('/', postAnEvent);

module.exports = router;