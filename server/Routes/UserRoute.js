import express from "express";

import { AddTask, RemoveTask } from "../Controllers/UserController.js";

const router = express.Router();

router.put("/:id/addtask", AddTask);
router.put("/:id/remove", RemoveTask);

export default router;
