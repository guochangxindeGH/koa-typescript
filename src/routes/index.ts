import Router from "koa-router";
import { user, general } from "../controllers";

const router = new Router({
    prefix:"/api"
});

router
    .get("/general", general.helloWorld)
    .get("/users", user.getUsers)
    .get("/users/:id", user.getUser)
    .post("/users", user.createUser)
    .put("/users/:id", user.updateUser)
    .delete("/users/:id", user.deleteUser);

export default router;
