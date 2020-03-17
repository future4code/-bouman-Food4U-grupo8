import express, { Request, Response } from "express";
import { createUserEndpoint } from "./endpoints/users/createUser";
import { loginUserEndpoint } from "./endpoints/users/loginUser";
import { getUserInfoEndpoint } from "./endpoints/users/getUserInfo"
import { createRecipeEndpoint } from "./endpoints/recipes/createRecipeEndpoint";

const app = express();
app.use(express.json());

//Users

app.post("/createUser", createUserEndpoint);
app.post("/login", loginUserEndpoint);
app.get("/userInfo", getUserInfoEndpoint);

// Receitas

app.post("/createRecipe", createRecipeEndpoint)


export default app;
