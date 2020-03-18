import express, { Request, Response } from "express";
import { createUserEndpoint } from "./endpoints/users/createUser";
import { loginUserEndpoint } from "./endpoints/users/loginUser";
import { getUserInfoEndpoint } from "./endpoints/users/getUserInfo";
import { createRecipeEndpoint } from "./endpoints/recipes/createRecipeEndpoint";
import { followUserEndpoint } from "./endpoints/users/followUser";
import { getFeedEndpoint } from "./endpoints/recipes/GetFeedEndPoint";

const app = express();
app.use(express.json());

//Users

app.post("/createUser", createUserEndpoint);
app.post("/login", loginUserEndpoint);
app.get("/userInfo", getUserInfoEndpoint);
app.post("/user/follow", followUserEndpoint);


// Recepies

app.post("/createRecipe", createRecipeEndpoint);
app.get("/feed", getFeedEndpoint)

export default app;
