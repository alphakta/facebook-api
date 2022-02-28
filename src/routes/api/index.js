import { Router } from "express";
// Routes
import authentication from "./authentication.route";
import users from "./users.route";
import posts from "./posts.route";
// Middlewares
import  jwt  from '../../middlewares/jwt.middleware';
const api = Router();

api.use("/authentication", authentication);
api.use("/users", jwt, users);
api.use("/posts", jwt, posts);


export default api;
