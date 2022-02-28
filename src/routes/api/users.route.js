import { Router } from "express";
import * as ProfileController from '../../controllers/profil.controller'

const api = Router();

api.get("/:id/posts", ProfileController.getPostsById);
api.get("/:id/profile", ProfileController.getById);
api.patch("/:id/profile", ProfileController.upsertProfile);
api.delete("/:id", ProfileController.deleteById);

export default api;
