import { Request, Response } from "express";

import { Pet } from "../models/pet";
import { CreateMenuObeject } from "../helpers/createMenuObject";

export const search = (req: Request, res: Response) => {
  let query: string = req.query.q as string;

  if (!query) {
    res.redirect("/");
    return;
  }

  let list = Pet.getFromName(query);

  res.render("pages/page", {
    menu: CreateMenuObeject(""),
    list,
    query,
  });
};
