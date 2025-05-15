import express from "express";
import {
    createGroup,
    getAllGroups,
    getGroupById,
    updateGroup,
    deleteGroup,
} from "../controller/groupController.js";

const groupRouter = express.Router();

groupRouter.post("/group", createGroup);
groupRouter.get("/group", getAllGroups);
groupRouter.get("/group/:id", getGroupById);
groupRouter.put("/group/:id", updateGroup);
groupRouter.delete("/group/:id", deleteGroup);

export default groupRouter;
