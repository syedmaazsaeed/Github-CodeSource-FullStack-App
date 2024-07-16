import express from "express";
import { getLikes, getUserProfileAndRepos, likeProfile } from "../controllers/user.controller.js";
import {ensureAuthenticated } from "../middleware/ensureAuthenticated.js";



const router = express.Router();

router.get("/profile/:username", getUserProfileAndRepos);  
// ToDo  =>  GET likes (likes Routes-- who likes our profile  )
// ToDo  => POST  like a profile  (like a profile  Routes )
router.get("/likes",ensureAuthenticated,getLikes);
router.post("/like/:username",ensureAuthenticated,likeProfile);


export default router;
