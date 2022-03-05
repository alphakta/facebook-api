import { Router } from "express";
import * as PostController from '../../controllers/post.controller'

const api = Router();

api.post("/", PostController.createOne);
api.get("/:id", PostController.getById);
api.get("/", PostController.getAllPosts);
api.patch("/:id", PostController.updateOneById);
api.delete("/:id", PostController.deleteById);

export default api;
