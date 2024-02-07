import Express, { Router }  from "express"
import testAPI from "../controller/home.controller"

const router = Express.Router();

router.post("/home",testAPI.add);

module.exports =router;