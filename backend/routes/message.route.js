import express from "express";
 import isAuthenticated from "../middlewares/isAuthenticated.js";
import upload from "../middlewares/multer.js";
import { getMessage, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();


 
