import express from 'express';
import { create, read, update, dele, authread } from "../controllers/blogController.js";
import { authToken } from "../middleware/authToken.js";

const router = express.Router();

router.post("/", authToken, create);
router.get("/", read);
router.get("/read", authToken, authread);
router.put("/:id", authToken, update);
router.delete("/:id", authToken, dele);

export default router;
