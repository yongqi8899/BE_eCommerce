import { Router } from "express";
import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/users.js";

import {checkIfUserExists, validateUser} from '../middleware/validateRequest.js';

const usersRoutes = Router();

usersRoutes.get("/", getUsers);
usersRoutes.post("/", validateUser, createUser);

usersRoutes.get("/:id", checkIfUserExists, getUserById);
usersRoutes.put("/:id", checkIfUserExists, updateUser);
usersRoutes.delete("/:id", checkIfUserExists, deleteUser);

export default usersRoutes;
