import { Request, Response } from "express";
import { RecipeDB } from "../../../data/recipeDataBase";
import { CreateRecipeUC } from "../../../business/usecase/recipes/createRecipeUseCase";

export const createUserEndpoint = async (req: Request, res: Response) => {
  try {
    const createRecipeUC = new CreateRecipeUC(new RecipeDB());
    const result = await createRecipeUC.execute({
      title: req.body.title,
      description: req.body.description,
      userId: req.body.userId

    });
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      message: err.message,
      ...err
    });
  }
};