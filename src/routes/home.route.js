//----------------------variable export using router create
// import Express, { Router }  from "express"
// import testAPI from "../controller/home.controller"

// const router = Express.Router();

// router.post("/home",testAPI.add);

// module.exports =router;

//----------------------classs export router create
import Express, { Router }  from "express"
import {controller} from "../controller/home.controller"

const router = Express.Router();

router.post("/home",controller.addData);

module.exports =router;