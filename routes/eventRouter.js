const { Router } = require('express');
require('../controller/eventController');
const eventRouter = require("../controller/eventController");

const router = Router();

router.get('/', eventRouter.getAllEvents);
router.get('/sf', eventRouter.getEventFromSanFrancisco);
router.get('/online', eventRouter.getOnlineEvents);
router.get('/physical', eventRouter.getPhysicalEvents);
router.post('/', eventRouter.postAnEvent);

module.exports = router;