import Express  from "express";

const router = Express.Router();

router.use("/test",require('./home.route'));

module.exports = router;