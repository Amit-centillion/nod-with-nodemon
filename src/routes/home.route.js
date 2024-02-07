import express from "express"
import {controller} from "../controller/home.controller"

const router = express.Router();

router.post("/home",controller.addData);

module.exports =router;