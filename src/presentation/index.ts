import express, { Request, Response } from "express";
import { createUserEndpoint } from "./endpoints/users/createUser";
import { loginUserEndpoint } from "./endpoints/users/loginUser";

const app = express();
app.use(express.json());

app.post("/createUser", createUserEndpoint);
app.post("/login", loginUserEndpoint);



export default app;
