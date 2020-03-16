import express, { Request, Response } from "express";
import { createUserEndpoint } from "./endpoints/users/createUser";
import { loginUserEndpoint } from "./endpoints/users/loginUser";
import { getUserInfoEndpoint } from "./endpoints/users/getUserInfo"

const app = express();
app.use(express.json());

app.post("/createUser", createUserEndpoint);
app.post("/login", loginUserEndpoint);
app.get("/userInfo", getUserInfoEndpoint);


export default app;
